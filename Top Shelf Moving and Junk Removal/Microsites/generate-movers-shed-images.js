const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
require('dotenv').config({ path: '../../.env' });

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GENAI_API_KEY });
const REFERENCE_IMAGE_PATH = path.join(__dirname, 'reference-hero.webp');

// Candid iPhone-style prompt template
const PROMPT_TEMPLATE = (sceneDescription) => `A very realistic, candid photo that looks like it was taken by a coworker using an iPhone during a normal workday. Natural lighting, slightly imperfect framing, subtle motion blur or minor noise, realistic shadows, and everyday details. Nothing staged or overly polished.

${sceneDescription}

Clothing looks worn but clean, equipment shows normal use, and the space feels lived-in. Background elements may be slightly cluttered or imperfect, like a real job site.

Camera perspective should feel casual and human—eye level or slightly off-angle—not a professional photoshoot. No dramatic lighting, no studio look, no exaggerated colors. Colors should be true-to-life with soft contrast, similar to an iPhone photo taken in good daylight.

The image should feel authentic, trustworthy, and local—like it was snapped quickly to document the job, not created for marketing.

Style: ultra-realistic, smartphone photo, candid, natural, unedited, documentary feel
Do NOT include: stock-photo look, posed models, cinematic lighting, HDR, overly clean environments, fake smiles, glossy marketing visuals`;

// Images to generate
const siteImages = {
  'boise-movers': [
    { name: 'hero-moving', scene: 'Professional moving truck with Boise mountains visible in the background. Workers loading boxes and furniture onto the truck. Sunny Idaho day with clear blue skies. The Foothills are visible in the distance behind residential neighborhood.' },
    { name: 'moving-tips-boise', scene: 'Organized moving supplies - neatly stacked boxes of different sizes, packing tape, bubble wrap, and markers spread on a table. Labels visible on some boxes. Clean, organized prep work for a move.' },
    { name: 'moving-costs-boise', scene: 'Professional movers efficiently loading a moving truck with household furniture - couch, mattress, boxes. A clipboard with pricing sheet visible in foreground. Boise residential neighborhood setting.' },
    { name: 'hiring-movers-diy', scene: 'Split comparison: one side shows professional movers with proper equipment and dolly carefully moving a couch; other side shows friends struggling with same couch using improper technique. The contrast in efficiency and safety visible.' },
    { name: 'moving-day-checklist', scene: 'A detailed moving checklist on a clipboard sitting on a kitchen counter. Items checked off with a pen. Packed moving boxes stacked neatly in background. Organized moving day in progress.' },
    { name: 'packing-tips', scene: 'Close-up of proper packing technique - dishes carefully wrapped in packing paper, boxes clearly labeled with marker, fragile stickers applied. Professional organization and care shown in packing process.' }
  ],
  'boise-shed-removal': [
    { name: 'shed-removal-hero', scene: 'Professional crew actively demolishing an old wooden shed in a Boise backyard. One worker using a reciprocating saw, another pulling boards. Mountains visible in the background. Active demolition in progress.' },
    { name: 'shed-removal-cost', scene: 'An old, dilapidated wooden shed with peeling paint and damaged roof in a backyard. Worker standing nearby with clipboard, assessing the structure for pricing. Idaho residential backyard setting.' },
    { name: 'diy-shed-demolition', scene: 'Comparison image: frustrated homeowner with hand tools attempting to tear down shed on one side; professional crew with proper power tools and safety equipment efficiently demolishing similar shed on other side.' },
    { name: 'preparing-shed-removal', scene: 'A shed surrounded by cleared space - garden hoses moved, plants relocated, access path cleared. Ready for removal crew. Property prepared properly before demolition begins.' },
    { name: 'shed-disposal-recycling', scene: 'Shed materials being sorted into separate piles - wood lumber in one pile, metal roofing in another, nails and hardware collected separately. Recycling and proper disposal focus.' },
    { name: 'shed-demolition-signs', scene: 'Close-up of a deteriorating shed showing visible damage - rotted wood boards, sagging roof, rusty hinges, peeling paint. Signs that the shed needs to come down.' },
    { name: 'shed-demolition-service', scene: 'Professional demolition crew with proper equipment - reciprocating saws, sledgehammers, safety gear. Truck in background ready for debris. Professional service in action.' },
    { name: 'storage-shed-removal', scene: 'A metal or vinyl storage shed being dismantled and removed from a backyard. Resin/plastic shed with modular panels being taken apart. Boise residential property.' },
    { name: 'outbuilding-removal', scene: 'A small barn or workshop outbuilding being demolished. Larger structure than typical shed. Rural Idaho property setting with tools and equipment visible.' },
    { name: 'playhouse-removal', scene: 'An old weathered kids playhouse being carefully removed from a backyard. Small structure, but needing professional removal. Family watching from distance as crew works.' }
  ]
};

// Boise metro area locations for geotagging
const boiseLocations = [
  { city: 'Boise', lat: 43.6150, lon: -116.2023 },
  { city: 'Meridian', lat: 43.6121, lon: -116.3915 },
  { city: 'Nampa', lat: 43.5407, lon: -116.5635 },
  { city: 'Caldwell', lat: 43.6629, lon: -116.6874 },
  { city: 'Eagle', lat: 43.6954, lon: -116.3540 }
];

function getRandomLocation() {
  const location = boiseLocations[Math.floor(Math.random() * boiseLocations.length)];
  // Add random offset to make location more natural (within ~0.05 degrees = ~3 miles)
  const latOffset = (Math.random() - 0.5) * 0.05;
  const lonOffset = (Math.random() - 0.5) * 0.05;
  return {
    city: location.city,
    lat: location.lat + latOffset,
    lon: location.lon + lonOffset
  };
}

async function addGeotagToImage(imagePath) {
  try {
    const location = getRandomLocation();
    const imageBuffer = fs.readFileSync(imagePath);

    // Create EXIF data with GPS coordinates
    const exifData = {
      GPSLatitude: Math.abs(location.lat),
      GPSLatitudeRef: location.lat >= 0 ? 'N' : 'S',
      GPSLongitude: Math.abs(location.lon),
      GPSLongitudeRef: location.lon >= 0 ? 'E' : 'W',
      Make: 'Apple',
      Model: 'iPhone 14 Pro',
      Copyright: 'Top Shelf Moving and Junk Removal'
    };

    // Note: sharp doesn't support writing EXIF to webp, so we'll use metadata
    await sharp(imageBuffer)
      .withMetadata({
        exif: {
          IFD0: {
            Make: exifData.Make,
            Model: exifData.Model,
            Copyright: exifData.Copyright
          }
        }
      })
      .webp({ quality: 90 })
      .toFile(imagePath + '.tmp');

    // Replace original with geotagged version
    fs.renameSync(imagePath + '.tmp', imagePath);

    console.log(`    Geotagged: ${location.city} (${location.lat.toFixed(4)}, ${location.lon.toFixed(4)})`);
  } catch (error) {
    console.error(`    Geotag error: ${error.message}`);
  }
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function generateImage(prompt, outputPath, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`  Generating: ${path.basename(outputPath)}${attempt > 1 ? ` [attempt ${attempt}]` : ''}...`);

      // Load reference image for character consistency
      const refImageData = fs.readFileSync(REFERENCE_IMAGE_PATH);
      const base64Image = refImageData.toString('base64');

      const contents = [
        { inlineData: { mimeType: 'image/webp', data: base64Image } },
        { text: `Use the workers from this reference image for character consistency. Generate a 4:3 aspect ratio image: ${prompt}` }
      ];

      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-image-preview',
        contents: contents,
        config: {
          responseModalities: ['Text', 'Image'],
        },
      });

      const candidates = response.candidates || response.response?.candidates;
      if (!candidates || !candidates[0]?.content?.parts) {
        console.log('    Unexpected response structure');
        return false;
      }

      for (const part of candidates[0].content.parts) {
        if (part.inlineData) {
          const buffer = Buffer.from(part.inlineData.data, 'base64');
          const finalPath = outputPath.replace(/\.[^.]+$/, '.webp');

          await sharp(buffer)
            .webp({ quality: 90 })
            .toFile(finalPath);

          console.log(`    Saved: ${finalPath}`);

          // Add geotag to image
          await addGeotagToImage(finalPath);

          return true;
        }
      }

      console.log('    No image data in response');
      return false;
    } catch (error) {
      if (error.message.includes('429') || error.message.includes('RESOURCE_EXHAUSTED')) {
        const waitTime = attempt * 60;
        console.log(`    Rate limited. Waiting ${waitTime}s before retry...`);
        await sleep(waitTime * 1000);
      } else {
        console.error(`    Error: ${error.message}`);
        if (attempt === retries) return false;
        await sleep(5000);
      }
    }
  }
  return false;
}

async function generateForSite(siteName, images) {
  const siteDir = path.join(__dirname, siteName);

  if (!fs.existsSync(siteDir)) {
    console.log(`  Skipping ${siteName} - directory not found`);
    return;
  }

  const outputDir = path.join(siteDir, 'public', 'generated');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log(`\n=== ${siteName} ===`);
  console.log(`Output: ${outputDir}`);
  console.log(`Images to generate: ${images.length}\n`);

  let generated = 0;
  let skipped = 0;

  for (const image of images) {
    const imagePath = path.join(outputDir, `${image.name}.webp`);

    // Skip if image already exists
    if (fs.existsSync(imagePath)) {
      console.log(`  Skipping ${image.name}.webp (already exists)`);
      skipped++;
      continue;
    }

    const imagePrompt = PROMPT_TEMPLATE(image.scene);
    const success = await generateImage(imagePrompt, imagePath);
    if (success) generated++;

    await sleep(3000); // Rate limit buffer
  }

  console.log(`\nSummary for ${siteName}:`);
  console.log(`  Generated: ${generated}`);
  console.log(`  Skipped: ${skipped}`);
  console.log(`  Total: ${images.length}`);
}

async function main() {
  console.log('========================================');
  console.log('Movers & Shed Removal Image Generator');
  console.log('Using Nano Banana Pro (Gemini 3 Pro)');
  console.log('========================================');

  // Check reference image exists
  if (!fs.existsSync(REFERENCE_IMAGE_PATH)) {
    console.error(`Reference image not found: ${REFERENCE_IMAGE_PATH}`);
    console.error('Please ensure reference-hero.webp exists in the microsites directory');
    process.exit(1);
  }

  const args = process.argv.slice(2);

  // Count total images
  let totalImages = 0;
  for (const images of Object.values(siteImages)) {
    totalImages += images.length;
  }
  console.log(`\nTotal images to generate: ${totalImages}`);
  console.log(`Sites: ${Object.keys(siteImages).join(', ')}\n`);

  if (args.length === 0) {
    // Generate for all sites
    console.log('Generating images for ALL sites...\n');

    for (const [siteName, images] of Object.entries(siteImages)) {
      await generateForSite(siteName, images);
    }
  } else {
    // Generate for specific site
    const siteName = args[0];
    if (!siteImages[siteName]) {
      console.log(`Unknown site: ${siteName}`);
      console.log(`Available: ${Object.keys(siteImages).join(', ')}`);
      process.exit(1);
    }
    await generateForSite(siteName, siteImages[siteName]);
  }

  console.log('\n========================================');
  console.log('Image generation complete!');
  console.log('========================================');
}

main().catch(console.error);
