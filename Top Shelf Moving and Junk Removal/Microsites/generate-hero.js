const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
require('dotenv').config({ path: '../../.env' });

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GENAI_API_KEY });
const REFERENCE_IMAGE_PATH = path.join(__dirname, 'reference-hero.webp');

async function generateHero() {
  const prompt = `A very realistic, candid photo that looks like it was taken by a coworker using an iPhone during a normal workday. Natural lighting, slightly imperfect framing, subtle motion blur or minor noise, realistic shadows, and everyday details. Nothing staged or overly polished.

The scene shows two junk removal workers carrying an old couch out the front door of a suburban home. They're mid-lift, focused on their work. One worker is backing out the door while the other guides from inside. The home's front porch and yard are visible. No truck in frame.

Clothing looks worn but clean, equipment shows normal use, and the space feels lived-in. Background elements may be slightly cluttered or imperfect, like a real job site.

Camera perspective should feel casual and human—eye level or slightly off-angle—not a professional photoshoot. No dramatic lighting, no studio look, no exaggerated colors. Colors should be true-to-life with soft contrast, similar to an iPhone photo taken in good daylight.

The image should feel authentic, trustworthy, and local—like it was snapped quickly to document the job, not created for marketing.

Style: ultra-realistic, smartphone photo, candid, natural, unedited, documentary feel
Do NOT include: stock-photo look, posed models, cinematic lighting, HDR, overly clean environments, fake smiles, glossy marketing visuals`;

  const refImageData = fs.readFileSync(REFERENCE_IMAGE_PATH);
  const base64Image = refImageData.toString('base64');

  const contents = [
    { inlineData: { mimeType: 'image/webp', data: base64Image } },
    { text: 'Use the workers from this reference image for character consistency. Generate a new ultrawide 21:9 aspect ratio 2K resolution image: ' + prompt }
  ];

  console.log('Generating ultrawide 2K hero image with reference...');

  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-image-preview', // Nano Banana Pro - supports up to 4K
    contents: contents,
    config: {
      responseModalities: ['Text', 'Image'],
    },
  });

  const candidates = response.candidates || response.response?.candidates;
  for (const part of candidates[0].content.parts) {
    if (part.inlineData) {
      const buffer = Buffer.from(part.inlineData.data, 'base64');
      await sharp(buffer).webp({ quality: 90 }).toFile('boise-junk-removal/public/generated/hero-junk-removal-ultrawide.webp');
      console.log('Saved: hero-junk-removal-ultrawide.webp');
      return;
    }
  }
  console.log('No image generated');
}

generateHero().catch(console.error);
