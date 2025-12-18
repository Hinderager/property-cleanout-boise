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

// Blog images organized by microsite
const blogImages = {
  'boise-appliance-removal': [
    { name: 'appliance-removal-cost', scene: 'A worker loading an old dishwasher onto a hand truck next to a pricing clipboard on a kitchen counter. Typical Boise home kitchen with tile backsplash. The worker is focused on securing the appliance.' },
    { name: 'diy-appliance-removal-risks', scene: 'A homeowner struggling to tilt a heavy front-load washing machine, clearly straining. The machine is at an awkward angle. Laundry room setting with potential for injury visible - tight space, slippery floor.' },
    { name: 'old-appliances-boise-options', scene: 'An older refrigerator, stove, and dishwasher lined up in a garage awaiting pickup. Mix of conditions - one looks decent, others clearly worn out. Typical Boise residential garage.' },
    { name: 'refrigerator-recycling-boise', scene: 'A worker disconnecting refrigerant lines from an old refrigerator at a recycling facility. Proper equipment visible. Industrial but not sterile setting.' },
    { name: 'preparing-appliances-removal', scene: 'A homeowner emptying the last items from an old freezer into coolers before removal. Unplugged cord visible. Garage or utility room setting. Defrost water tray on floor.' }
  ],
  'boise-commercial-movers': [
    { name: 'commercial-vs-residential', scene: 'Split perspective showing office cubicle components being moved on one side and residential furniture on the other. Workers in both scenes. Professional office vs cozy home contrast.' },
    { name: 'employee-communication', scene: 'An office manager showing a move schedule on a whiteboard to employees gathered around. Moving boxes in background. Collaborative planning atmosphere in a Boise office.' },
    { name: 'hiring-commercial-movers', scene: 'A property manager and commercial mover shaking hands in an empty office space with cubicle panels in background. Professional interaction, business casual attire.' },
    { name: 'minimize-downtime', scene: 'Commercial movers efficiently setting up workstations in a new office space while IT technician connects cables. After-hours moving scene with some lights on. Focused teamwork.' },
    { name: 'planning-office-move', scene: 'Floor plans and moving timeline documents spread on a conference table. Someone marking routes with a highlighter. Office chairs stacked in background.' }
  ],
  'boise-construction-debris-removal': [
    { name: 'clean-job-site-boise', scene: 'A construction worker sweeping debris into piles on a renovation site. Organized debris bins visible. The site is messy but clearly being maintained. Idaho contractor at work.' },
    { name: 'construction-debris-rules-boise', scene: 'A dumpster with sorted debris - wood in one section, drywall in another. A permit sticker visible on the dumpster. Boise residential neighborhood construction site.' },
    { name: 'dumpster-vs-removal-service', scene: 'Side-by-side view of a dumpster in a driveway and a junk removal truck being loaded by workers. Visual comparison of the two options for debris removal.' },
    { name: 'recycling-construction-materials', scene: 'Workers sorting wood scraps, metal pieces, and concrete chunks into separate bins at a construction site. Recycling focus. Idaho recycling practices.' },
    { name: 'types-construction-debris', scene: 'Various construction debris spread out - broken drywall, old lumber, tile pieces, carpet scraps, metal flashing. Diversity of materials visible on job site.' }
  ],
  'boise-demolition': [
    { name: 'demolition-permits-boise', scene: 'A demolition permit posted on a partially demolished structure. The permit is clearly visible. Workers in background continuing tear-down. Boise city permit format.' },
    { name: 'demolition-process-boise', scene: 'Workers systematically tearing apart an old shed, with different stages visible - some walls down, roof partially removed. Organized demolition process.' },
    { name: 'demolition-safety-boise', scene: 'Workers wearing hard hats, safety glasses, and gloves during a demolition. Focus on proper PPE. Dust mask around one workers neck. Active demo site.' },
    { name: 'full-partial-demolition', scene: 'A house with one room gutted to studs while adjacent room remains intact. Visual contrast between full demo area and preserved space. Interior remodel.' },
    { name: 'preparing-demolition-boise', scene: 'Workers disconnecting utilities and removing fixtures before demo begins. One worker turning off a water valve, another removing light fixtures. Pre-demolition prep.' }
  ],
  'boise-dumpster-rental': [
    { name: 'dumpster-allowed-items', scene: 'Various approved items being tossed into a dumpster - old furniture, boxes, household debris. Someone holding a mattress about to throw it in. Residential cleanout.' },
    { name: 'dumpster-placement-guide', scene: 'A roll-off dumpster positioned perfectly in a driveway with protective boards underneath. Clear access around it. Plywood protecting the driveway surface.' },
    { name: 'dumpster-rental-cost-boise', scene: 'A delivery driver handing over paperwork to a homeowner next to a freshly placed dumpster. Price discussion implied. Boise residential setting.' },
    { name: 'dumpster-rental-duration', scene: 'A calendar or scheduling app on a phone showing rental dates, with a partially filled dumpster in the background. Timeline planning concept.' },
    { name: 'dumpster-size-guide', scene: 'Different sized dumpsters lined up for comparison - 10, 15, 20 yard containers. Visual scale reference with a worker standing nearby. Size options display.' }
  ],
  'boise-estate-cleanout': [
    { name: 'emotional-estate-cleanout', scene: 'A family member holding an old photo album while sorting through belongings in an estate home. Emotional but composed moment. Boxes marked donate and keep visible.' },
    { name: 'estate-cleanout-timeline', scene: 'A handwritten checklist on a clipboard showing estate cleanout tasks with some checked off. Living room of estate home visible with boxes in progress.' },
    { name: 'estate-sorting-decisions', scene: 'Items laid out on a table being sorted - antiques, everyday items, paperwork. Three piles forming: keep, donate, discard. Decision-making in progress.' },
    { name: 'hiring-estate-cleanout', scene: 'An estate cleanout professional talking compassionately with a family member at the front door of a home. Respectful, professional interaction.' },
    { name: 'start-estate-cleanout', scene: 'Someone standing at the entrance of a cluttered garage or room, looking at the task ahead. Overwhelm visible but determined posture. Where to begin moment.' }
  ],
  'boise-furniture-removal': [
    { name: 'furniture-donation-boise', scene: 'Workers loading a nice but used couch into a donation truck. The furniture is in good condition. Idaho Youth Ranch or similar charity truck visible.' },
    { name: 'furniture-removal-pricing', scene: 'Two workers measuring and assessing a large sectional sofa in a living room. One worker taking notes. Volume-based pricing assessment.' },
    { name: 'furniture-vs-junk-removal', scene: 'Side view showing quality furniture being carefully moved versus old broken furniture being hauled as junk. Contrast between salvageable and trash.' },
    { name: 'heavy-furniture-moving', scene: 'Two workers using furniture straps to carefully lift a heavy armoire down stairs. Proper technique visible - bent knees, straps secured. Safety focus.' },
    { name: 'old-furniture-disposal-boise', scene: 'An old worn couch being loaded into a removal truck. The couch is clearly past its useful life. Boise residential neighborhood.' }
  ],
  'boise-hoarding-cleanup': [
    { name: 'after-hoarding-cleanup', scene: 'A transformed room that was previously cluttered - now clean, organized, and livable. Before/after implied. Light streaming through clean windows. Hope and renewal.' },
    { name: 'helping-hoarder-family', scene: 'A compassionate cleanup worker sitting with an elderly person, looking through items together. Respectful collaboration. Small pile of sorted items nearby.' },
    { name: 'hoarding-cleanup-costs', scene: 'A worker surveying a cluttered room, making notes on a clipboard for an estimate. The scale of the job visible. Professional assessment.' },
    { name: 'hoarding-cleanup-process', scene: 'Workers creating pathways through a cluttered space, carefully sorting items into categories. Systematic approach. Respectful handling of belongings.' },
    { name: 'understanding-hoarding', scene: 'A room showing the reality of hoarding - stacked items, narrow pathways, accumulated belongings. Not judgmental, just realistic documentation.' }
  ],
  'boise-hot-tub-removal': [
    { name: 'diy-hot-tub-removal', scene: 'A frustrated homeowner attempting to cut into a hot tub shell with inadequate tools. The difficulty of DIY clearly visible. Backyard setting.' },
    { name: 'hot-tub-recycling', scene: 'Cut sections of a hot tub sorted for recycling - fiberglass in one pile, metal components in another, plastic jets separated. Recycling process.' },
    { name: 'hot-tub-removal-cost', scene: 'A professional providing an estimate while standing next to an old hot tub in a backyard. Clipboard in hand. Pricing discussion moment.' },
    { name: 'hot-tub-removal-process', scene: 'Step-by-step hot tub removal - one section shows draining, another shows cutting, another shows hauling pieces. Process overview.' },
    { name: 'preparing-hot-tub-removal', scene: 'A drained hot tub with electrical disconnected, cover removed, and area cleared for removal. Ready for the crew. Preparation complete.' }
  ],
  'boise-junk-removal': [
    { name: 'decluttering-guide', scene: 'A homeowner sorting through boxes in a spare room, making keep and discard piles. The process of decluttering visible. Boise home interior.' },
    { name: 'items-we-take', scene: 'Variety of acceptable junk items loaded in a truck - old furniture, electronics, boxes, yard waste. Diversity of accepted items shown.' },
    { name: 'junk-vs-dumpster', scene: 'Split view: one side shows workers loading a truck (full service), other side shows homeowner loading a dumpster themselves (self-service). Comparison.' },
    { name: 'same-day-service', scene: 'A junk removal truck pulling up to a Boise home, homeowner waving from the porch. Quick response, urgent service implied. Same-day arrival.' }
  ],
  'boise-movers': [
    { name: 'movers-vs-diy', scene: 'Contrast image: professional movers with equipment on one side, family struggling with a couch on the other. The difference in efficiency visible.' },
    { name: 'moving-cost-boise', scene: 'A mover reviewing a detailed estimate with a homeowner in their living room. Boxes in background. Transparent pricing discussion.' },
    { name: 'moving-day-checklist', scene: 'A checklist on a counter with moving supplies - tape, markers, boxes - and a Boise moving day in progress visible through window.' },
    { name: 'moving-to-boise', scene: 'A moving truck parked in front of a Boise home with mountain views in background. New residents greeting neighbors. Welcome to Idaho moment.' },
    { name: 'packing-tips', scene: 'Close-up of proper packing technique - dishes wrapped in paper, boxes labeled clearly, fragile stickers applied. Organized packing process.' }
  ],
  'boise-tire-removal': [
    { name: 'illegal-tire-dumping', scene: 'Illegally dumped tires in a rural Idaho ditch or field. Environmental eyesore. The problem of tire dumping visible. No people, just the issue.' },
    { name: 'property-tire-cleanup', scene: 'Workers collecting scattered tires from an overgrown property. Weeds and debris around tires. Cleanup in progress. Property restoration.' },
    { name: 'tire-removal-options', scene: 'Different tire disposal methods shown - curbside pickup, drop-off location, professional removal service. Options comparison.' },
    { name: 'tire-removal-pricing', scene: 'A worker counting and categorizing tires of different sizes for pricing. Car tires, truck tires, tractor tires. Volume assessment.' },
    { name: 'where-to-recycle-tires', scene: 'A tire recycling facility with stacks of tires being processed. Industrial but environmentally focused. Idaho recycling center.' }
  ],
  'mobile-home-demolition-boise': [
    { name: 'demolition-permits', scene: 'A demolition permit posted on a mobile home scheduled for teardown. Official document visible. Idaho permit requirements.' },
    { name: 'mobile-home-demo-cost', scene: 'Workers assessing a mobile home for demolition estimate. One taking measurements, another taking notes. Cost estimation process.' },
    { name: 'mobile-home-recycling', scene: 'Sorted materials from a demolished mobile home - aluminum siding in one pile, steel frame pieces in another, copper wiring separated. Recycling focus.' },
    { name: 'preparing-for-demolition', scene: 'Interior of mobile home being cleared before demo - furniture removed, personal items boxed. Preparing for teardown. Pre-demolition prep.' },
    { name: 'removal-vs-demolition', scene: 'Side-by-side concept: a mobile home being moved intact on one side, another being demolished on site. Comparison of options.' }
  ],
  'property-cleanout-boise': [
    { name: 'cleanout-checklist', scene: 'A property manager with a detailed room-by-room checklist walking through a vacant property. Systematic inspection. Professional approach.' },
    { name: 'cleanout-cost-factors', scene: 'Workers surveying a property filled with various items - showing the factors that affect pricing: volume, access, item types. Assessment in progress.' },
    { name: 'foreclosure-cleanout', scene: 'Workers clearing out a foreclosed property - mix of left-behind furniture and personal items. Professional but rapid cleanout. Bank property situation.' },
    { name: 'rental-cleanout-guide', scene: 'A landlord and cleanout crew discussing the scope of work in a recently vacated rental unit. Tenant left belongings behind. Turnover situation.' },
    { name: 'same-day-cleanout', scene: 'Workers rapidly but efficiently clearing a property under time pressure. Urgency visible but professional. Same-day service in action.' }
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

async function generateForMicrosite(siteName, images) {
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

async function main() {
  console.log('========================================');
  console.log('Blog Hero Image Generator');
  console.log('Using Nano Banana Pro (Gemini 3 Pro)');
  console.log('========================================');

  // Check reference image exists
  if (!fs.existsSync(REFERENCE_IMAGE_PATH)) {
    console.error(`Reference image not found: ${REFERENCE_IMAGE_PATH}`);
    process.exit(1);
  }

  const args = process.argv.slice(2);

  // Count total images
  let totalImages = 0;
  for (const images of Object.values(blogImages)) {
    totalImages += images.length;
  }
  console.log(`\nTotal blog images to generate: ${totalImages}\n`);

  if (args.length === 0) {
    // Generate for all microsites
    console.log('Generating images for ALL microsites...\n');

    for (const [siteName, images] of Object.entries(blogImages)) {
      await generateForMicrosite(siteName, images);
    }
  } else {
    // Generate for specific microsite
    const siteName = args[0];
    if (!blogImages[siteName]) {
      console.log(`Unknown microsite: ${siteName}`);
      console.log(`Available: ${Object.keys(blogImages).join(', ')}`);
      process.exit(1);
    }
    await generateForMicrosite(siteName, blogImages[siteName]);
  }

  console.log('\n========================================');
  console.log('Blog image generation complete!');
  console.log('========================================');
}

main().catch(console.error);
