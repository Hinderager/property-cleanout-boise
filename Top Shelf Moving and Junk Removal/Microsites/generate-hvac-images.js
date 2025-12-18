const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
require('dotenv').config({ path: '../../.env' });

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GENAI_API_KEY });
const REFERENCE_IMAGE_PATH = path.join(__dirname, 'reference-hero.webp');

// Candid iPhone-style prompt template for HVAC
const PROMPT_TEMPLATE = (sceneDescription) => `A very realistic, candid photo that looks like it was taken by an HVAC technician or homeowner using an iPhone during a normal workday. Natural lighting, slightly imperfect framing, subtle motion blur or minor noise, realistic shadows, and everyday details. Nothing staged or overly polished.

${sceneDescription}

Work clothes look worn but clean, equipment shows normal use, and the space feels lived-in. Background elements may be slightly cluttered or imperfect, like a real job site or home.

Camera perspective should feel casual and human—eye level or slightly off-angle—not a professional photoshoot. No dramatic lighting, no studio look, no exaggerated colors. Colors should be true-to-life with soft contrast, similar to an iPhone photo taken in good daylight.

The image should feel authentic, trustworthy, and local—like it was snapped quickly to document the job, not created for marketing. Boise, Idaho area setting when outdoors.

Style: ultra-realistic, smartphone photo, candid, natural, unedited, documentary feel
Do NOT include: stock-photo look, posed models, cinematic lighting, HDR, overly clean environments, fake smiles, glossy marketing visuals`;

// All HVAC images needed for the expanded site
const hvacImages = {
  // Hero and general images
  hero: [
    { name: 'hero-hvac', scene: 'An HVAC technician in a Boise home, kneeling next to a furnace with diagnostic tools. The tech wears a uniform shirt and looks focused on the work. Residential basement or utility room setting. Natural lighting from a nearby window.' },
    { name: 'hero-hvac-ultrawide', scene: 'Wide shot of an HVAC service van parked in a Boise residential driveway with mountain foothills visible in background. A technician walks toward the front door with a tool bag. Suburban Idaho neighborhood, clear day.' },
  ],

  // Service Category Pages (6 categories)
  serviceCategories: [
    { name: 'air-conditioning', scene: 'An HVAC technician inspecting an outdoor AC condenser unit in a Boise backyard. Gauges connected, checking refrigerant levels. Summer day, homeowner garden visible in background.' },
    { name: 'heating', scene: 'A technician working on a furnace in a residential basement, panel removed showing burners and heat exchanger. Tools organized nearby. Warm indoor lighting.' },
    { name: 'furnaces', scene: 'Close-up of a technician hands checking a furnace flame sensor and igniter. Orange glow from pilot flame visible. Professional diagnostic work.' },
    { name: 'heat-pumps', scene: 'A modern heat pump outdoor unit being serviced by a technician. Unit sits on a concrete pad. Idaho foothills visible in background. Clear weather.' },
    { name: 'indoor-air-quality', scene: 'A technician installing or inspecting an air purification unit in home ductwork. Clean filter visible. Utility room or attic access setting.' },
    { name: 'ductwork', scene: 'A technician in a crawlspace or attic inspecting flexible ductwork with a flashlight. Insulated ducts visible. Looking for leaks or damage.' },
  ],

  // Individual Service Images (20 services)
  services: [
    // Air Conditioning Services
    { name: 'ac-repair', scene: 'An HVAC technician using a multimeter to test an AC unit condenser outside a Boise home. Focused on diagnostics. Tools spread on the ground nearby. Sunny summer day.' },
    { name: 'ac-maintenance', scene: 'A technician performing routine AC maintenance - cleaning coils with a specialized brush, refrigerant gauges connected nearby. Residential backyard, early morning light.' },
    { name: 'ac-installation', scene: 'Two HVAC technicians carefully positioning a new outdoor AC condenser unit on a concrete pad. One steadies it while the other guides placement. New copper lines visible. Boise home backyard.' },
    { name: 'emergency-ac-repair', scene: 'An HVAC technician arriving at a Boise home on a hot summer evening. Service van with lights on. Concerned homeowner at door. Sense of urgency.' },
    { name: 'refrigerant-leak-repair', scene: 'Close-up of technician hands using a leak detector around AC refrigerant lines. Electronic sniffer tool in use. Focused diagnostic work.' },
    { name: 'thermostat-repair', scene: 'A technician using a small screwdriver to work on a wall thermostat with wires exposed. Testing with multimeter. Clean wall installation area.' },

    // Heating Services
    { name: 'heater-repair', scene: 'A technician inside a home, using a flashlight to inspect inside a gas furnace with the panel removed. Flame sensor and burners visible. Basement utility room setting.' },
    { name: 'heater-maintenance', scene: 'HVAC technician performing annual heating system maintenance - changing filter, cleaning flame sensor. Residential basement, organized tools nearby.' },
    { name: 'heater-installation', scene: 'Two workers installing a new heating system in a basement. One connects ductwork while another handles gas line connections. New unit still has protective film on it.' },

    // Furnace Services
    { name: 'furnace-repair', scene: 'A technician testing furnace control board with a multimeter. Panel removed, wires and circuit board visible. Basement furnace room. Diagnostic focus.' },
    { name: 'furnace-maintenance', scene: 'Technician cleaning furnace burners with a wire brush. Clean vs dirty comparison visible. Annual maintenance work in progress.' },
    { name: 'furnace-installation', scene: 'Workers positioning a new high-efficiency furnace in a basement. Shiny new unit next to old ductwork that needs connection. Professional installation.' },

    // Heat Pump Services
    { name: 'heat-pump-repair', scene: 'A technician checking heat pump outdoor unit defrost cycle. Light frost on ground. Winter setting in Idaho. Diagnostic equipment connected.' },
    { name: 'heat-pump-maintenance', scene: 'Technician cleaning heat pump coils and checking refrigerant levels. Unit on concrete pad. Seasonal maintenance work.' },
    { name: 'heat-pump-installation', scene: 'HVAC crew installing a new ductless mini-split heat pump. Indoor unit being mounted on wall while outdoor unit sits ready. Modern home setting.' },

    // Indoor Air Quality Services
    { name: 'air-purifiers', scene: 'A technician installing a whole-home air purification system in ductwork. UV light unit visible. Clean installation in utility room.' },
    { name: 'duct-cleaning', scene: 'Professional duct cleaning in progress - large vacuum hose connected to duct opening. Debris visible being removed. Messy but effective work.' },
    { name: 'uv-light-installation', scene: 'Close-up of a technician installing a UV germicidal light in a furnace plenum. Blue UV glow visible. Clean hands working with electrical connections.' },

    // Ductwork Services
    { name: 'duct-repair', scene: 'A technician sealing ductwork joints with mastic sealant in an attic. Insulated ducts, some with visible gaps being sealed. Repair work in progress.' },
    { name: 'duct-replacement', scene: 'Old damaged ductwork being removed while new insulated flexible duct sits ready for installation. Attic or crawlspace setting. Upgrade work.' },
  ],

  // Location page images (9 cities)
  locations: [
    { name: 'boise-hvac', scene: 'HVAC service van driving through a Boise neighborhood with the downtown skyline and foothills visible in background. Clear Idaho day. Residential street with mature trees.' },
    { name: 'meridian-hvac', scene: 'A technician working on a rooftop commercial HVAC unit with Meridian suburban development visible in background. New construction area. Sunny day.' },
    { name: 'nampa-hvac', scene: 'An HVAC tech loading equipment into a service van in a Nampa residential driveway. Older established neighborhood. Agricultural land visible in distance.' },
    { name: 'caldwell-hvac', scene: 'Technician servicing an AC unit at a Caldwell home with rural Idaho farmland visible beyond the fence. Mix of suburban and rural character.' },
    { name: 'eagle-hvac', scene: 'HVAC service at an upscale Eagle foothills home. Nice landscaping, larger home. Technician carrying equipment toward the house. Boise foothills in background.' },
    { name: 'garden-city-hvac', scene: 'HVAC technician servicing a unit at a Garden City home near the Boise River. Mix of residential and light industrial character. River greenway visible.' },
    { name: 'kuna-hvac', scene: 'Service van parked at a newer Kuna subdivision home. Growing community feel with new construction visible. Technician at front door.' },
    { name: 'star-hvac', scene: 'HVAC work at a Star Idaho home with agricultural land and foothills in background. Rural-suburban transition area. Small town feel.' },
    { name: 'middleton-hvac', scene: 'Technician servicing HVAC at a Middleton family home. Orchards and farmland visible in background. Canyon County rural character.' },
  ],

  // About section images
  about: [
    { name: 'about-team', scene: 'Group of 3-4 HVAC technicians standing together near their service vans. Friendly, professional appearance. Company uniforms. Boise area parking lot.' },
    { name: 'about-testimonials', scene: 'A happy homeowner shaking hands with an HVAC technician at their front door. Job well done moment. Boise suburban home.' },
    { name: 'about-licenses', scene: 'Close-up of HVAC license certificates and insurance documentation on a desk. Professional credentials display. Office setting.' },
    { name: 'about-why-choose-us', scene: 'HVAC technician showing a homeowner the work completed on their furnace. Educational moment, pointing at components. Trust-building interaction.' },
    { name: 'about-careers', scene: 'A senior HVAC technician training a younger apprentice on furnace diagnostics. Teaching moment. Passing knowledge to next generation.' },
  ],

  // Resources section images
  resources: [
    { name: 'resources-faq', scene: 'A homeowner looking at their thermostat with a questioning expression. Common HVAC questions moment. Living room setting.' },
    { name: 'resources-hvac-tips', scene: 'A homeowner changing an HVAC filter in their hallway. The old dirty filter next to the new clean one. DIY maintenance moment. Typical home interior.' },
    { name: 'resources-repair-vs-replace', scene: 'An old rusted furnace next to a new modern high-efficiency furnace still in packaging. Comparison visible. Basement or utility room setting.' },
    { name: 'resources-financing', scene: 'A technician showing a homeowner financing options on a tablet or clipboard. Kitchen table discussion. Professional but friendly interaction.' },
    { name: 'resources-maintenance-plans', scene: 'Calendar on a refrigerator with HVAC maintenance reminder. Organized homeowner planning. Kitchen setting with family feel.' },
    { name: 'hvac-pricing', scene: 'An HVAC technician showing a homeowner a tablet or clipboard with pricing information. Standing in a garage next to an old furnace. Professional but casual interaction.' },
  ],

  // Contact page
  contact: [
    { name: 'contact-hero', scene: 'Friendly HVAC receptionist or dispatcher at a desk with phone headset, taking customer calls. Office setting with service schedule board visible. Welcoming atmosphere.' },
  ],

  // Blog images
  blogs: [
    { name: 'ac-warning-signs', scene: 'Close-up of an AC outdoor unit with visible ice formation on the refrigerant lines. Problem is obvious. Overgrown grass around the unit. Summer setting.' },
    { name: 'choosing-contractor', scene: 'An HVAC technician handing a business card to a homeowner at the front door. Professional appearance, clean uniform with company logo. Trust-building moment.' },
    { name: 'seasonal-maintenance', scene: 'A homeowner changing an HVAC filter in their hallway. The old dirty filter next to the new clean one. DIY maintenance moment. Typical Boise home interior.' },
  ],

  // Additional detail images for service pages
  details: [
    { name: 'thermostat-install', scene: 'Close-up of hands installing a modern smart thermostat on a wall. Wires visible. Clean installation in progress. Nest or Ecobee style device.' },
    { name: 'ductwork-inspection', scene: 'A technician with a flashlight inspecting ductwork in an attic or crawlspace. Insulated ducts visible. Checking for leaks or damage.' },
    { name: 'refrigerant-check', scene: 'HVAC gauges connected to an AC unit showing pressure readings. Technician hands visible adjusting valves. Technical diagnostic work.' },
    { name: 'heat-pump', scene: 'A modern heat pump outdoor unit running in winter. Light frost on ground. Efficient heating visible with no ice buildup. Idaho winter setting.' },
  ]
};

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function generateImage(prompt, outputPath, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`  Generating: ${path.basename(outputPath)}${attempt > 1 ? ` [attempt ${attempt}]` : ''}...`);

      // Load reference image for character consistency
      let contents;
      if (fs.existsSync(REFERENCE_IMAGE_PATH)) {
        const refImageData = fs.readFileSync(REFERENCE_IMAGE_PATH);
        const base64Image = refImageData.toString('base64');
        contents = [
          { inlineData: { mimeType: 'image/webp', data: base64Image } },
          { text: `Use a similar style to this reference image but for HVAC work. Generate a 4:3 aspect ratio image: ${prompt}` }
        ];
      } else {
        contents = [
          { text: `Generate a 4:3 aspect ratio image: ${prompt}` }
        ];
      }

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

async function main() {
  console.log('========================================');
  console.log('HVAC Image Generator - Expanded Site');
  console.log('Using Nano Banana Pro (Gemini 3 Pro)');
  console.log('========================================');

  // Check reference image exists
  if (!fs.existsSync(REFERENCE_IMAGE_PATH)) {
    console.log(`Note: Reference image not found: ${REFERENCE_IMAGE_PATH}`);
    console.log('Using text-only prompts...');
  }

  const outputDir = path.join(__dirname, 'hvac-boise', 'public', 'generated');

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Count total images
  let totalImages = 0;
  let existingImages = 0;
  for (const images of Object.values(hvacImages)) {
    for (const image of images) {
      totalImages++;
      const imagePath = path.join(outputDir, `${image.name}.webp`);
      if (fs.existsSync(imagePath)) {
        existingImages++;
      }
    }
  }
  console.log(`\nTotal images defined: ${totalImages}`);
  console.log(`Already existing: ${existingImages}`);
  console.log(`To generate: ${totalImages - existingImages}\n`);

  // Generate all images (skip existing)
  for (const [category, images] of Object.entries(hvacImages)) {
    console.log(`\n=== ${category.toUpperCase()} ===`);

    for (const image of images) {
      const imagePath = path.join(outputDir, `${image.name}.webp`);

      // Skip if image already exists
      if (fs.existsSync(imagePath)) {
        console.log(`  Skipping ${image.name}.webp (already exists)`);
        continue;
      }

      const imagePrompt = PROMPT_TEMPLATE(image.scene);
      await generateImage(imagePrompt, imagePath);
      await sleep(3000); // Rate limit buffer
    }
  }

  console.log('\n========================================');
  console.log('HVAC image generation complete!');
  console.log('========================================');
}

main().catch(console.error);
