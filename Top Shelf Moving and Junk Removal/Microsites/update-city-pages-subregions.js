const fs = require('fs');
const path = require('path');

// Neighborhood data for adding links to city pages
const cityNeighborhoods = {
  boise: [
    { slug: 'north-end', name: 'North End' },
    { slug: 'bench', name: 'The Bench' },
    { slug: 'downtown', name: 'Downtown Boise' },
    { slug: 'harris-ranch', name: 'Harris Ranch' },
    { slug: 'southeast-boise', name: 'Southeast Boise' },
    { slug: 'west-boise', name: 'West Boise' }
  ],
  meridian: [
    { slug: 'ten-mile', name: 'Ten Mile Area' },
    { slug: 'lochsa-falls', name: 'Lochsa Falls' },
    { slug: 'paramount', name: 'Paramount' },
    { slug: 'tuscany', name: 'Tuscany' }
  ],
  nampa: [
    { slug: 'downtown-nampa', name: 'Downtown Nampa' },
    { slug: 'karcher', name: 'Karcher' },
    { slug: 'lake-lowell', name: 'Lake Lowell' },
    { slug: 'midway', name: 'Midway' }
  ]
};

const microsites = [
  'boise-junk-removal',
  'boise-hoarding-cleanup',
  'boise-estate-cleanout',
  'boise-demolition',
  'boise-movers',
  'boise-furniture-removal',
  'boise-dumpster-rental',
  'boise-construction-debris-removal',
  'boise-appliance-removal',
  'boise-hot-tub-removal',
  'boise-shed-removal',
  'boise-carpet-removal',
  'boise-tire-removal',
  'boise-commercial-movers',
  'boise-roofing-company',
  'boise-roof-repair',
  'boise-roof-replacement'
];

function addNeighborhoodLinks(content, city, neighborhoods) {
  const cityCapitalized = city.charAt(0).toUpperCase() + city.slice(1);

  // Check if neighborhood links section already exists
  if (content.includes('Neighborhood Pages') || content.includes('neighborhood-links')) {
    console.log(`  Skipping ${city} - already has neighborhood links`);
    return content;
  }

  // Create the neighborhood links section
  const neighborhoodSection = `
            {/* Neighborhood Pages */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-dark-blue mb-6">
                ${cityCapitalized} Neighborhoods We Serve
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                ${neighborhoods.map(n => `
                <Link
                  href="/cities-served/${city}/${n.slug}"
                  className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 transition-colors"
                >
                  <span className="font-semibold text-dark-blue">${n.name}</span>
                </Link>`).join('')}
              </div>
            </div>
`;

  // Try to find a good insertion point - before the CTA section
  const ctaPatterns = [
    /({\s*\/\*\s*CTA\s*\*\/)/i,
    /(<div className="[^"]*bg-dark-blue[^"]*rounded-xl[^"]*p-8[^"]*text-center)/,
    /(<div className="[^"]*bg-gunmetal[^"]*rounded-xl[^"]*p-8[^"]*text-center)/,
    /(Get a Free Quote)/
  ];

  let modified = false;
  for (const pattern of ctaPatterns) {
    if (pattern.test(content)) {
      // Find a good spot before the CTA
      const match = content.match(pattern);
      if (match) {
        const insertionPoint = content.indexOf(match[0]);
        if (insertionPoint > -1) {
          // Find the start of the line to insert before
          let lineStart = content.lastIndexOf('\n', insertionPoint);
          if (lineStart === -1) lineStart = 0;

          content = content.slice(0, lineStart) + neighborhoodSection + content.slice(lineStart);
          modified = true;
          break;
        }
      }
    }
  }

  if (!modified) {
    // Fallback: try to insert before </section> near end of main content
    const lastSectionClose = content.lastIndexOf('</section>');
    if (lastSectionClose > -1) {
      // Find the previous line
      let lineStart = content.lastIndexOf('\n', lastSectionClose - 100);
      content = content.slice(0, lineStart) + neighborhoodSection + content.slice(lineStart);
    }
  }

  return content;
}

async function updateCityPages() {
  const baseDir = __dirname;
  let updated = 0;
  let errors = [];

  console.log('Updating city pages with neighborhood links...\n');

  for (const microsite of microsites) {
    const micrositeDir = path.join(baseDir, microsite);

    if (!fs.existsSync(micrositeDir)) {
      console.log(`Skipping ${microsite} - directory not found`);
      continue;
    }

    console.log(`Processing ${microsite}...`);

    for (const [city, neighborhoods] of Object.entries(cityNeighborhoods)) {
      const cityPagePath = path.join(micrositeDir, 'src', 'app', 'cities-served', city, 'page.tsx');

      if (!fs.existsSync(cityPagePath)) {
        console.log(`  Skipping ${city} - page not found`);
        continue;
      }

      try {
        let content = fs.readFileSync(cityPagePath, 'utf8');
        const originalContent = content;

        content = addNeighborhoodLinks(content, city, neighborhoods);

        if (content !== originalContent) {
          fs.writeFileSync(cityPagePath, content);
          updated++;
          console.log(`  Updated: ${city}/page.tsx`);
        }
      } catch (err) {
        errors.push(`${microsite}/${city}: ${err.message}`);
        console.error(`  Error updating ${city}: ${err.message}`);
      }
    }
  }

  console.log('\n========================================');
  console.log(`Update complete!`);
  console.log(`Pages updated: ${updated}`);
  if (errors.length > 0) {
    console.log(`Errors: ${errors.length}`);
    errors.forEach(e => console.log(`  - ${e}`));
  }
  console.log('========================================\n');
}

updateCityPages().catch(console.error);
