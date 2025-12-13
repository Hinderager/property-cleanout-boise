const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
require('dotenv').config({ path: '../../.env' });

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GENAI_API_KEY });

// Reference image path for character consistency
const REFERENCE_IMAGE_PATH = path.join(__dirname, 'reference-hero.webp');

// Service-specific image prompts
const servicePrompts = {
  'junk-removal': [
    {
      name: 'hero-junk-removal',
      prompt: 'Professional junk removal workers in matching dark blue uniforms carrying old furniture out of a suburban home. Two friendly workers, one carrying end of a couch, working together near the front door of a nice Boise Idaho house. No truck visible. Bright sunny day. Photorealistic, high quality commercial photography style.',
      useReference: true
    },
    {
      name: 'garage-cleanout',
      prompt: 'Before and after split image of a cluttered garage being cleaned out. Left side shows piles of old furniture, boxes, and junk. Right side shows the same garage completely empty and clean. Boise Idaho suburban home. Professional photography.'
    },
    {
      name: 'furniture-removal',
      prompt: 'Two professional movers carefully carrying an old couch out of a home front door. They wear matching work uniforms and use proper lifting technique. Clean suburban Boise neighborhood background. Friendly, professional atmosphere. Commercial photography style.'
    }
  ],
  'appliance-removal': [
    {
      name: 'hero-appliance-removal',
      prompt: 'Professional appliance removal worker using a dolly to move an old white refrigerator from a residential kitchen. Worker wears clean uniform, looks professional and friendly. Modern Boise Idaho home interior. Photorealistic commercial photography.'
    },
    {
      name: 'washer-dryer-removal',
      prompt: 'Two workers carefully moving a stacked washer and dryer unit through a laundry room doorway. Professional uniforms, proper equipment. Clean suburban home in Boise Idaho. Commercial photography style, bright lighting.'
    },
    {
      name: 'appliance-recycling',
      prompt: 'Old appliances including refrigerators, washers, and dryers lined up at a recycling facility. Workers sorting materials. Environmental responsibility theme. Clean, organized industrial setting. Professional documentary photography style.'
    }
  ],
  'furniture-removal': [
    {
      name: 'hero-furniture-removal',
      prompt: 'Professional furniture removal team carrying a large sectional sofa out of a modern living room. Workers in matching uniforms using furniture blankets and straps. Boise Idaho suburban home. Bright, professional commercial photography.'
    },
    {
      name: 'couch-removal',
      prompt: 'Two workers loading an old couch into a box truck using a ramp. Clean truck, professional appearance. Suburban Boise Idaho driveway. Sunny day, friendly atmosphere. Commercial photography style.'
    },
    {
      name: 'bedroom-furniture',
      prompt: 'Workers carefully disassembling and removing a large wooden bedroom set including bed frame and dresser. Professional equipment and uniforms. Boise Idaho home interior. Commercial photography.'
    }
  ],
  'estate-cleanout': [
    {
      name: 'hero-estate-cleanout',
      prompt: 'Professional estate cleanout team working in a home filled with decades of belongings. Workers carefully sorting items, some for donation, some for removal. Respectful, compassionate atmosphere. Boise Idaho home. Documentary photography style.'
    },
    {
      name: 'whole-house-cleanout',
      prompt: 'Before and after of a complete estate cleanout. Left shows cluttered rooms with furniture and personal items. Right shows empty, clean rooms ready for sale. Boise Idaho home interior. Professional real estate photography style.'
    }
  ],
  'hoarding-cleanup': [
    {
      name: 'hero-hoarding-cleanup',
      prompt: 'Compassionate cleanup crew working in a challenging hoarding situation. Workers in protective gear carefully and respectfully sorting through items. Emphasis on professionalism and dignity. Soft, understanding lighting. Documentary style.'
    },
    {
      name: 'cleanup-progress',
      prompt: 'Progressive stages of hoarding cleanup showing transformation. Professional workers making steady progress. Emphasis on hope and renewal. Boise Idaho home. Respectful documentary photography.'
    }
  ],
  'demolition': [
    {
      name: 'hero-demolition',
      prompt: 'Professional demolition crew with heavy equipment taking down an old shed structure. Workers in safety gear, organized worksite. Boise Idaho property. Dramatic action shot with dust and debris. Commercial photography.'
    },
    {
      name: 'shed-demolition',
      prompt: 'Excavator demolishing an old wooden shed in a backyard. Professional operator, safe distance. Before and after composition. Boise Idaho suburban property. Construction photography style.'
    }
  ],
  'dumpster-rental': [
    {
      name: 'hero-dumpster',
      prompt: 'Clean roll-off dumpster being delivered to a residential driveway by a professional truck. Driver positioning the container carefully. Boise Idaho suburban home. Bright sunny day. Commercial photography.'
    },
    {
      name: 'dumpster-sizes',
      prompt: 'Row of different sized roll-off dumpsters (10, 15, 20, 30 yard) lined up for comparison. Clean containers, professional appearance. Construction yard setting. Product photography style with clear size differences visible.'
    }
  ]
};

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function generateImage(prompt, outputPath, useReference = false, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`Generating: ${path.basename(outputPath)}${attempt > 1 ? ` (attempt ${attempt})` : ''}${useReference ? ' (with reference)' : ''}...`);

      // Build contents - either text only or text + reference image
      let contents;
      if (useReference && fs.existsSync(REFERENCE_IMAGE_PATH)) {
        const refImageData = fs.readFileSync(REFERENCE_IMAGE_PATH);
        const base64Image = refImageData.toString('base64');
        contents = [
          {
            inlineData: {
              mimeType: 'image/webp',
              data: base64Image
            }
          },
          {
            text: `Using the workers shown in this reference image for character consistency, generate a new image: ${prompt}`
          }
        ];
      } else {
        contents = prompt;
      }

      // Use Gemini 2.0 Flash with image generation capability
      const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash-exp-image-generation',
        contents: contents,
        config: {
          responseModalities: ['Text', 'Image'],
        },
      });

      // Check response structure
      const candidates = response.candidates || response.response?.candidates;
      if (!candidates || !candidates[0]?.content?.parts) {
        console.log('  Unexpected response structure');
        console.log('  Response:', JSON.stringify(response, null, 2).slice(0, 500));
        return false;
      }

      for (const part of candidates[0].content.parts) {
        if (part.inlineData) {
          const buffer = Buffer.from(part.inlineData.data, 'base64');

          // Convert to WebP for optimal web performance
          await sharp(buffer)
            .webp({ quality: 85 })
            .toFile(outputPath.replace(/\.[^.]+$/, '.webp'));

          console.log(`  Saved: ${outputPath.replace(/\.[^.]+$/, '.webp')}`);
          return true;
        }
      }

      console.log('  No image data in response');
      return false;
    } catch (error) {
      if (error.message.includes('429') || error.message.includes('RESOURCE_EXHAUSTED')) {
        const waitTime = attempt * 60; // Wait longer each retry
        console.log(`  Rate limited. Waiting ${waitTime}s before retry...`);
        await sleep(waitTime * 1000);
      } else {
        console.error(`  Error: ${error.message}`);
        return false;
      }
    }
  }
  console.log('  Max retries exceeded');
  return false;
}

async function generateForService(serviceType, targetDir) {
  const prompts = servicePrompts[serviceType];

  if (!prompts) {
    console.log(`Unknown service type: ${serviceType}`);
    console.log(`Available types: ${Object.keys(servicePrompts).join(', ')}`);
    return;
  }

  // Create output directory if it doesn't exist
  const outputDir = path.join(targetDir, 'public', 'generated');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log(`\nGenerating images for: ${serviceType}`);
  console.log(`Output directory: ${outputDir}\n`);

  for (const item of prompts) {
    const outputPath = path.join(outputDir, `${item.name}.png`);
    await generateImage(item.prompt, outputPath, item.useReference || false);

    // Small delay between requests to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  console.log('\nDone!');
}

// CLI usage
const args = process.argv.slice(2);
if (args.length < 2) {
  console.log('Usage: node generate-images.js <service-type> <target-directory>');
  console.log('');
  console.log('Service types:');
  Object.keys(servicePrompts).forEach(type => {
    console.log(`  - ${type}`);
  });
  console.log('');
  console.log('Example:');
  console.log('  node generate-images.js junk-removal ./boise-junk-removal');
  process.exit(1);
}

const [serviceType, targetDir] = args;
generateForService(serviceType, targetDir);
