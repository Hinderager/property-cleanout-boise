const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Boise metro area - multiple real locations per city for natural variation
// Each location represents a real neighborhood/area within that city
const cityLocations = {
  boise: [
    { name: 'Downtown Boise', lat: 43.6187, lng: -116.2146 },
    { name: 'North End', lat: 43.6350, lng: -116.2050 },
    { name: 'Boise Bench', lat: 43.5980, lng: -116.2100 },
    { name: 'West Boise', lat: 43.6100, lng: -116.2650 },
    { name: 'Southeast Boise', lat: 43.5850, lng: -116.1750 },
    { name: 'Garden City border', lat: 43.6420, lng: -116.2350 },
    { name: 'Harris Ranch area', lat: 43.5700, lng: -116.1500 },
    { name: 'Cole/Ustick area', lat: 43.6280, lng: -116.2480 },
    { name: 'State Street corridor', lat: 43.6380, lng: -116.2550 },
    { name: 'Federal Way area', lat: 43.6050, lng: -116.2350 },
  ],
  meridian: [
    { name: 'Downtown Meridian', lat: 43.6121, lng: -116.3915 },
    { name: 'North Meridian', lat: 43.6350, lng: -116.3800 },
    { name: 'South Meridian', lat: 43.5850, lng: -116.4000 },
    { name: 'Ten Mile area', lat: 43.6200, lng: -116.4200 },
    { name: 'Linder Road area', lat: 43.6000, lng: -116.3650 },
    { name: 'Ustick/Meridian', lat: 43.6280, lng: -116.3920 },
    { name: 'Cherry Lane area', lat: 43.5950, lng: -116.3850 },
    { name: 'McMillan area', lat: 43.6420, lng: -116.3950 },
  ],
  nampa: [
    { name: 'Downtown Nampa', lat: 43.5407, lng: -116.5635 },
    { name: 'North Nampa', lat: 43.5650, lng: -116.5550 },
    { name: 'South Nampa', lat: 43.5200, lng: -116.5700 },
    { name: 'West Nampa', lat: 43.5400, lng: -116.5900 },
    { name: 'Garrity Blvd area', lat: 43.5550, lng: -116.5450 },
    { name: 'Karcher Road area', lat: 43.5300, lng: -116.5500 },
    { name: 'Midland Blvd area', lat: 43.5480, lng: -116.5750 },
    { name: 'Franklin Road area', lat: 43.5600, lng: -116.5680 },
  ],
  caldwell: [
    { name: 'Downtown Caldwell', lat: 43.6629, lng: -116.6874 },
    { name: 'North Caldwell', lat: 43.6800, lng: -116.6750 },
    { name: 'South Caldwell', lat: 43.6450, lng: -116.6950 },
    { name: 'West Caldwell', lat: 43.6600, lng: -116.7100 },
    { name: 'Cleveland Blvd area', lat: 43.6550, lng: -116.6800 },
    { name: 'Ustick/Caldwell', lat: 43.6280, lng: -116.6900 },
    { name: 'Middleton Road area', lat: 43.6700, lng: -116.7000 },
    { name: 'Linden Street area', lat: 43.6580, lng: -116.6820 },
  ]
};

// All microsites and their assigned city
const microsites = [
  { dir: 'boise-appliance-removal', city: 'boise' },
  { dir: 'boise-commercial-movers', city: 'boise' },
  { dir: 'boise-construction-debris-removal', city: 'meridian' },
  { dir: 'boise-demolition', city: 'nampa' },
  { dir: 'boise-dumpster-rental', city: 'caldwell' },
  { dir: 'boise-estate-cleanout', city: 'boise' },
  { dir: 'boise-furniture-removal', city: 'meridian' },
  { dir: 'boise-hoarding-cleanup', city: 'boise' },
  { dir: 'boise-hot-tub-removal', city: 'nampa' },
  { dir: 'boise-junk-removal', city: 'boise' },
  { dir: 'boise-movers', city: 'meridian' },
  { dir: 'boise-tire-removal', city: 'caldwell' },
  { dir: 'mobile-home-demolition-boise', city: 'nampa' },
  { dir: 'property-cleanout-boise', city: 'boise' }
];

const exiftoolPath = 'C:/ProgramData/chocoportable/bin/exiftool.exe';

// Track which locations have been used per city to ensure variety
const usedLocations = {
  boise: [],
  meridian: [],
  nampa: [],
  caldwell: []
};

function getUniqueLocation(city) {
  const locations = cityLocations[city];
  const used = usedLocations[city];

  // Find locations not yet used
  const available = locations.filter((_, idx) => !used.includes(idx));

  // If all used, reset and start over
  if (available.length === 0) {
    usedLocations[city] = [];
    return getUniqueLocation(city);
  }

  // Pick a random available location
  const randomIdx = Math.floor(Math.random() * available.length);
  const originalIdx = locations.indexOf(available[randomIdx]);
  usedLocations[city].push(originalIdx);

  const loc = available[randomIdx];

  // Add small random variation (±0.002 degrees ≈ 200 meters) for extra uniqueness
  const variation = {
    lat: loc.lat + (Math.random() - 0.5) * 0.004,
    lng: loc.lng + (Math.random() - 0.5) * 0.004,
    name: loc.name
  };

  return variation;
}

function geotagImage(imagePath, lat, lng) {
  const latRef = lat >= 0 ? 'N' : 'S';
  const lngRef = lng >= 0 ? 'E' : 'W';
  const absLat = Math.abs(lat);
  const absLng = Math.abs(lng);

  const cmd = `"${exiftoolPath}" -overwrite_original -GPSLatitude=${absLat} -GPSLatitudeRef=${latRef} -GPSLongitude=${absLng} -GPSLongitudeRef=${lngRef} "${imagePath}"`;

  try {
    execSync(cmd, { stdio: 'pipe' });
    return true;
  } catch (error) {
    console.error(`  Error tagging ${path.basename(imagePath)}: ${error.message}`);
    return false;
  }
}

async function main() {
  console.log('========================================');
  console.log('Geo-tagging All Microsite Images');
  console.log('Varied Locations Throughout Boise Metro');
  console.log('========================================\n');

  let totalImages = 0;
  let taggedImages = 0;

  for (const site of microsites) {
    const generatedDir = path.join(__dirname, site.dir, 'public', 'generated');

    if (!fs.existsSync(generatedDir)) {
      console.log(`  Skipping ${site.dir} - no generated folder`);
      continue;
    }

    console.log(`\n=== ${site.dir} (${site.city}) ===`);

    const images = fs.readdirSync(generatedDir).filter(f => f.endsWith('.webp'));

    for (const img of images) {
      const imgPath = path.join(generatedDir, img);
      const loc = getUniqueLocation(site.city);
      totalImages++;

      if (geotagImage(imgPath, loc.lat, loc.lng)) {
        console.log(`  ${img} → ${loc.name} (${loc.lat.toFixed(4)}, ${loc.lng.toFixed(4)})`);
        taggedImages++;
      }
    }
  }

  console.log('\n========================================');
  console.log(`Geo-tagging complete: ${taggedImages}/${totalImages} images`);
  console.log('Each image has a unique location!');
  console.log('========================================');
}

main().catch(console.error);
