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

// New replacement service images needed
const imagesToGenerate = [
  {
    site: 'boise-hoarding-cleanup',
    name: 'ongoing-maintenance',
    scene: 'A cleanup worker doing a follow-up maintenance visit at a home, helping organize a closet that has started to accumulate clutter again. The worker is friendly and supportive, not judgmental. A small pile of sorted items sits on the bed. The room is mostly tidy but showing early signs of re-accumulation. Collaborative, supportive atmosphere.'
  },
  {
    site: 'boise-junk-removal',
    name: 'electronics-ewaste',
    scene: 'Workers loading old electronics into their equipment—old CRT monitors, desktop computers, tangled cables, printers, and keyboards. A home office or garage setting with outdated tech being cleared out. Workers handling the electronics carefully. Box of cables and small devices visible.'
  },
  {
    site: 'boise-junk-removal',
    name: 'basement-cleanout',
    scene: 'Two workers carrying boxes and old items up basement stairs. The basement is partially cleared with old holiday decorations, forgotten exercise equipment, and dusty boxes still remaining. Typical unfinished basement with concrete floor and utility shelving. Workers making progress through years of accumulated stuff.'
  },
  {
    site: 'property-cleanout-boise',
    name: 'code-violation',
    scene: 'Workers quickly clearing overgrown yard debris and accumulated junk from a property exterior. Old lawn equipment, trash bags, broken items being removed. A code violation notice or city letter visible on the door. Workers moving fast but thorough. Neighbors houses visible in background. Sense of urgency to meet a deadline.'
  }
];

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

async function main() {
  console.log('========================================');
  console.log('Generating Replacement Service Images');
  console.log('Using Nano Banana Pro (Gemini 3 Pro)');
  console.log('========================================\n');

  // Check reference image exists
  if (!fs.existsSync(REFERENCE_IMAGE_PATH)) {
    console.error(`Reference image not found: ${REFERENCE_IMAGE_PATH}`);
    process.exit(1);
  }

  for (const img of imagesToGenerate) {
    const outputDir = path.join(__dirname, img.site, 'public', 'generated');

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    console.log(`\n=== ${img.site} / ${img.name} ===`);

    const prompt = PROMPT_TEMPLATE(img.scene);
    const outputPath = path.join(outputDir, `${img.name}.png`);

    await generateImage(prompt, outputPath);
    await sleep(3000); // Rate limit buffer between images
  }

  console.log('\n========================================');
  console.log('Replacement images generated!');
  console.log('========================================');
}

main().catch(console.error);
