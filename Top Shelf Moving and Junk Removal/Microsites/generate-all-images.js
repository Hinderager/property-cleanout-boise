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

// Microsite configurations with service-specific scenes
const microsites = {
  'boise-appliance-removal': {
    hero: 'Two appliance removal workers carefully dollying an old white refrigerator down the front steps of a suburban home. They\'re focused on navigating the steps safely. One worker steadies the dolly while the other guides from behind. The home\'s front porch and sidewalk are visible. No truck in frame.',
    services: [
      { name: 'refrigerator-removal', scene: 'A worker strapping an old side-by-side refrigerator to a heavy-duty dolly in a residential kitchen. The fridge has some dust on top. Cabinets and countertops visible in background.' },
      { name: 'washer-dryer-removal', scene: 'Two workers carefully tilting and moving a stacked washer-dryer unit through a laundry room doorway. The room has typical laundry supplies on shelves.' },
      { name: 'dishwasher-removal', scene: 'A worker disconnected an old dishwasher from under a kitchen counter, pulling it out on a furniture dolly. Some water drip marks visible on the floor.' },
      { name: 'oven-removal', scene: 'Workers sliding an old electric range out from between kitchen cabinets. One worker is behind guiding while another steadies from the front. Typical Boise kitchen.' }
    ]
  },
  'boise-commercial-movers': {
    hero: 'Two commercial movers carrying a heavy office desk down a hallway of an office building. They\'re navigating past cubicle walls. One worker leads backward while the other follows. Office environment with fluorescent lighting.',
    services: [
      { name: 'office-furniture', scene: 'Workers disassembling a large conference table in a corporate meeting room. Tools and hardware on the floor. Office chairs pushed to the side.' },
      { name: 'cubicle-moving', scene: 'A mover carefully carrying stacked cubicle panels through an office space. Other workers visible in background organizing furniture.' },
      { name: 'server-moving', scene: 'Two workers carefully moving a server rack on a specialized dolly through a data center aisle. Focus on careful handling.' },
      { name: 'retail-fixture', scene: 'Workers removing display shelving from a retail store. The store is empty except for fixtures being moved. Commercial space feel.' }
    ]
  },
  'boise-construction-debris-removal': {
    hero: 'Two workers loading chunks of broken drywall and lumber scraps into a wheelbarrow at a home renovation site. Dust in the air, work boots, and the mess of an active remodel visible.',
    services: [
      { name: 'drywall-removal', scene: 'A worker shoveling broken drywall pieces into a large rolling trash bin inside a gutted room. Dust mask visible around neck. Exposed studs in background.' },
      { name: 'lumber-cleanup', scene: 'Workers stacking scrap lumber and old framing materials on a cart outside a house under renovation. Sawdust and nails on the ground.' },
      { name: 'concrete-debris', scene: 'A worker using a wheelbarrow to move broken concrete chunks from a demolished patio. Work gloves and safety glasses visible.' },
      { name: 'renovation-cleanup', scene: 'Two workers sweeping and collecting renovation debris from a room mid-remodel. Plastic sheeting on walls, floor covered in dust and small debris.' }
    ]
  },
  'boise-demolition': {
    hero: 'Workers using pry bars and sledgehammers to tear down an old wooden shed in a backyard. Wood panels coming apart, debris on the ground. Safety gear visible. Residential Boise neighborhood.',
    services: [
      { name: 'shed-demolition', scene: 'A worker pulling apart the roof boards of a deteriorating garden shed with a crowbar. Nails and wood scraps scattered below.' },
      { name: 'deck-removal', scene: 'Two workers prying up old deck boards from a backyard deck. Rotten wood and rusty nails visible. House siding in background.' },
      { name: 'fence-teardown', scene: 'A worker removing old fence posts from the ground while another stacks the old fence boards. Typical Boise backyard setting.' },
      { name: 'interior-demo', scene: 'Worker with sledgehammer breaking through interior wall drywall for a remodel. Dust in air, plastic sheeting on floor. Protective gear worn.' }
    ]
  },
  'boise-dumpster-rental': {
    hero: 'A roll-off dumpster being positioned in a residential driveway by a truck driver. The dumpster is clean and freshly placed. Typical Boise suburban home in background. No truck fully visible, just the dumpster landing.',
    services: [
      { name: 'residential-dumpster', scene: 'A 15-yard dumpster sitting in a driveway with a homeowner tossing bags of trash into it. Garage cleanout in progress visible in background.' },
      { name: 'construction-dumpster', scene: 'Workers tossing lumber scraps and drywall into a large dumpster at a job site. The dumpster is partially full with construction debris.' },
      { name: 'roofing-dumpster', scene: 'Old shingles being thrown into a roll-off container from a rooftop. Worker visible on roof edge tossing shingles. Dumpster positioned close to house.' },
      { name: 'cleanout-dumpster', scene: 'A dumpster in a driveway with old furniture, boxes, and household items being loaded in by a homeowner during a home cleanout.' }
    ]
  },
  'boise-estate-cleanout': {
    hero: 'Two workers carefully carrying boxes and old furniture from the front door of a suburban home. The scene feels respectful, organized—clearly handling someone\'s lifetime of belongings with care. Front porch and yard visible.',
    services: [
      { name: 'whole-house-cleanout', scene: 'Workers organizing items into "keep", "donate", and "trash" piles in a living room filled with decades of belongings. Boxes and bags throughout.' },
      { name: 'garage-cleanout', scene: 'Two workers carrying old lawn equipment and boxes out of a cluttered garage. Shelves of old items visible. Typical Boise residential garage.' },
      { name: 'basement-cleanout', scene: 'Workers navigating stairs while carrying boxes up from a basement filled with stored items. Narrow stairway, boxes lining the walls.' },
      { name: 'donation-sorting', scene: 'Worker carefully wrapping dishes in paper and placing them in a donation box. Kitchen cleanout in progress. Care taken with items.' }
    ]
  },
  'boise-furniture-removal': {
    hero: 'Two furniture removal workers carrying an old sectional couch through the front doorway of a home. One worker backing out while the other guides. The couch is slightly worn. Front porch and yard visible.',
    services: [
      { name: 'couch-removal', scene: 'Workers tilting a large sofa to fit through a narrow hallway. One worker guiding, the other lifting. Typical residential hallway.' },
      { name: 'mattress-removal', scene: 'A worker carrying a queen mattress down the front steps of a home. The mattress is old and slightly stained. Helper visible at doorway.' },
      { name: 'dining-set-removal', scene: 'Workers disassembling a heavy wooden dining table in a dining room. Chairs already stacked against wall. Tools on floor.' },
      { name: 'bedroom-furniture', scene: 'Two workers carrying an old wooden dresser out of a bedroom. Mirror removed and leaning against wall. Carpet with furniture indentations visible.' }
    ]
  },
  'boise-hoarding-cleanup': {
    hero: 'Two cleanup workers carefully and respectfully sorting through piles of belongings in a cluttered room. They\'re focused, wearing gloves, with clear bags and boxes for organizing items. No judgment in the scene—just professional help.',
    services: [
      { name: 'hoarding-cleanup', scene: 'Workers creating a clear pathway through a cluttered living room. Items being sorted carefully. Respectful, non-judgmental atmosphere.' },
      { name: 'ongoing-maintenance', scene: 'A cleanup worker doing a follow-up maintenance visit at a home, helping organize a closet that has started to accumulate clutter again. The worker is friendly and supportive, not judgmental. A small pile of sorted items sits on the bed. The room is mostly tidy but showing early signs of re-accumulation. Collaborative, supportive atmosphere.' },
      { name: 'deep-cleaning', scene: 'Worker scrubbing floors in a room that has just been cleared. Cleaning supplies visible. The space transforming from cluttered to clean.' },
      { name: 'emergency-services', scene: 'Workers rapidly but carefully organizing and clearing a room under time pressure. Professional urgency without chaos.' }
    ]
  },
  'boise-hot-tub-removal': {
    hero: 'Two workers using a reciprocating saw to cut apart an old hot tub in a backyard. Sawdust and cut pieces visible. The hot tub is drained and weathered. Typical Boise backyard with fence.',
    services: [
      { name: 'hot-tub-disconnect', scene: 'A worker disconnecting electrical and plumbing from an old spa. Tools on the deck. The hot tub cover is set aside.' },
      { name: 'hot-tub-cutting', scene: 'Worker sawing through the fiberglass shell of a hot tub with a reciprocating saw. Wearing safety glasses. Pieces already cut on ground.' },
      { name: 'spa-removal', scene: 'Two workers lifting a section of cut hot tub shell and carrying it toward the side gate. Backyard pathway cleared for removal.' },
      { name: 'deck-repair', scene: 'The empty space where a hot tub used to sit on a deck. Worker inspecting the deck boards. Some weathering visible where tub protected the wood.' }
    ]
  },
  'boise-junk-removal': {
    hero: 'Two junk removal workers carrying an old couch out the front door of a suburban home. They\'re mid-lift, focused on their work. One worker is backing out the door while the other guides from inside. The home\'s front porch and yard are visible. No truck in frame.',
    services: [
      { name: 'electronics-ewaste', scene: 'Workers loading old electronics into their equipment—old CRT monitors, desktop computers, tangled cables, printers, and keyboards. A home office or garage setting with outdated tech being cleared out. Workers handling the electronics carefully. Box of cables and small devices visible.' },
      { name: 'basement-cleanout', scene: 'Two workers carrying boxes and old items up basement stairs. The basement is partially cleared with old holiday decorations, forgotten exercise equipment, and dusty boxes still remaining. Typical unfinished basement with concrete floor and utility shelving. Workers making progress through years of accumulated stuff.' },
      { name: 'yard-waste', scene: 'Workers loading branches, old planters, and yard debris into a wheelbarrow. Backyard cleanup in progress. Rakes and gloves visible.' },
      { name: 'garage-cleanout', scene: 'Workers loading old boxes, broken equipment, and miscellaneous junk from a garage into a dolly. Typical cluttered garage in background.' }
    ]
  },
  'boise-movers': {
    hero: 'Two professional movers carrying a wrapped dresser down the front walkway of a Boise home. Furniture blankets and straps visible. They\'re focused and careful. Nice suburban neighborhood visible.',
    services: [
      { name: 'residential-moving', scene: 'Movers carefully wrapping a couch in protective blankets inside a living room. Moving boxes stacked nearby. Family photos on wall.' },
      { name: 'packing-services', scene: 'A mover carefully wrapping dishes in paper and placing them in a labeled box. Kitchen packing in progress. Organized and methodical.' },
      { name: 'heavy-items', scene: 'Two movers using a stair-climbing dolly to move a piano down front porch steps. Extreme care and focus visible.' },
      { name: 'loading-truck', scene: 'Workers organizing furniture and boxes inside a moving truck. Everything strapped and secured. Efficient use of space.' }
    ]
  },
  'boise-tire-removal': {
    hero: 'A worker rolling old tires out of a backyard shed area. Multiple tires stacked nearby. Typical Boise property with grass and fence. Gloves and work wear visible.',
    services: [
      { name: 'tire-collection', scene: 'Workers loading old car tires into a trailer. Variety of tire sizes visible. Property cleanout in progress.' },
      { name: 'commercial-tires', scene: 'A worker rolling a large truck tire out of a commercial building. Industrial setting with concrete floors.' },
      { name: 'tire-recycling', scene: 'Stack of old tires being sorted for recycling. Worker organizing by size. Outdoor staging area.' },
      { name: 'property-cleanup', scene: 'Workers clearing accumulated tires from an overgrown corner of a property. Weeds and debris around the tires.' }
    ]
  },
  'mobile-home-demolition-boise': {
    hero: 'Workers beginning demolition on an old mobile home, removing siding panels. The mobile home shows age and wear. Tools and safety equipment visible. Empty lot setting.',
    services: [
      { name: 'mobile-home-demo', scene: 'Workers tearing off aluminum siding from a mobile home exterior. Panels stacked on ground. Structure being systematically taken apart.' },
      { name: 'interior-gutting', scene: 'Workers removing interior walls and fixtures from inside a mobile home. Debris pile visible. Dust in the air.' },
      { name: 'frame-removal', scene: 'Heavy equipment lifting the frame of a demolished mobile home. Workers directing the operation. Clean lot emerging.' },
      { name: 'site-cleanup', scene: 'Workers raking and cleaning the empty lot where a mobile home once stood. Fresh dirt visible. Ready for next use.' }
    ]
  },
  'property-cleanout-boise': {
    hero: 'Two workers removing old furniture and boxes from a vacant property. The property has been empty a while—some dust and neglect visible. Professional cleanup in progress.',
    services: [
      { name: 'rental-cleanout', scene: 'Workers clearing leftover furniture and trash from a vacant rental unit. Apartment or small home interior. Professional and thorough.' },
      { name: 'foreclosure-cleanup', scene: 'Team removing debris and personal items left behind in a foreclosed property. Efficient work, organized approach.' },
      { name: 'eviction-cleanout', scene: 'Workers boxing up and removing items from a recently vacated property. Fast, professional, non-judgmental.' },
      { name: 'code-violation', scene: 'Workers quickly clearing overgrown yard debris and accumulated junk from a property exterior. Old lawn equipment, trash bags, broken items being removed. A code violation notice or city letter visible on the door. Workers moving fast but thorough. Neighbors houses visible in background. Sense of urgency to meet a deadline.' }
    ]
  }
};

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function generateImage(prompt, outputPath, aspectRatio = '4:3', retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`  Generating: ${path.basename(outputPath)} (${aspectRatio})${attempt > 1 ? ` [attempt ${attempt}]` : ''}...`);

      // Load reference image for character consistency
      const refImageData = fs.readFileSync(REFERENCE_IMAGE_PATH);
      const base64Image = refImageData.toString('base64');

      const aspectInstruction = aspectRatio === '21:9'
        ? 'Generate an ultrawide 21:9 aspect ratio 2K resolution image'
        : 'Generate a 4:3 aspect ratio image';

      const contents = [
        { inlineData: { mimeType: 'image/webp', data: base64Image } },
        { text: `Use the workers from this reference image for character consistency. ${aspectInstruction}: ${prompt}` }
      ];

      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-image-preview', // Nano Banana Pro
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

async function generateForMicrosite(siteName, config) {
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
  console.log(`Output: ${outputDir}\n`);

  // Generate hero image (21:9 ultrawide)
  const heroPrompt = PROMPT_TEMPLATE(config.hero);
  const heroPath = path.join(outputDir, 'hero.png');
  await generateImage(heroPrompt, heroPath, '21:9');
  await sleep(2000); // Rate limit buffer

  // Generate service images (4:3)
  for (const service of config.services) {
    const servicePrompt = PROMPT_TEMPLATE(service.scene);
    const servicePath = path.join(outputDir, `${service.name}.png`);
    await generateImage(servicePrompt, servicePath, '4:3');
    await sleep(2000); // Rate limit buffer
  }
}

async function main() {
  console.log('========================================');
  console.log('Top Shelf Microsites Image Generator');
  console.log('Using Nano Banana Pro (Gemini 3 Pro)');
  console.log('========================================');

  // Check reference image exists
  if (!fs.existsSync(REFERENCE_IMAGE_PATH)) {
    console.error(`Reference image not found: ${REFERENCE_IMAGE_PATH}`);
    process.exit(1);
  }

  const args = process.argv.slice(2);

  if (args.length === 0) {
    // Generate for all microsites
    console.log('\nGenerating images for ALL microsites...\n');

    for (const [siteName, config] of Object.entries(microsites)) {
      await generateForMicrosite(siteName, config);
    }
  } else {
    // Generate for specific microsite
    const siteName = args[0];
    if (!microsites[siteName]) {
      console.log(`Unknown microsite: ${siteName}`);
      console.log(`Available: ${Object.keys(microsites).join(', ')}`);
      process.exit(1);
    }
    await generateForMicrosite(siteName, microsites[siteName]);
  }

  console.log('\n========================================');
  console.log('Image generation complete!');
  console.log('========================================');
}

main().catch(console.error);
