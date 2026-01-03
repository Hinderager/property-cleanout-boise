/**
 * Fix Hero Blur Placeholders
 * Adds blur placeholder to remaining hero sections that use different patterns
 */

const fs = require('fs');
const path = require('path');

const MICROSITES = [
  'boise-appliance-removal',
  'boise-carpet-removal',
  'boise-chiropractors',
  'boise-commercial-movers',
  'boise-construction-debris-removal',
  'boise-demolition',
  'boise-dumpster-rental',
  'boise-estate-cleanout',
  'boise-furniture-removal',
  'boise-hoarding-cleanup',
  'boise-hot-tub-removal',
  'boise-junk-removal',
  'boise-movers',
  'boise-roofing-company',
  'boise-shed-removal',
  'topshelfdumpsters'
];

const MICROSITES_DIR = __dirname;

const blurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgIBAwQDAAAAAAAAAAAAAQIDBAAFESEGEjFBUWFx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADERIh/9oADAMBAAIRAxEAPwDIqNGG7qKxNqCSdWIleSKWMLHGGJLD2Rx/cYyCQASTgYyFSpIopJ//2Q==';

function fixHeroBlurPlaceholder(siteName) {
  const heroPath = path.join(MICROSITES_DIR, siteName, 'src', 'components', 'HeroSection.tsx');

  if (!fs.existsSync(heroPath)) {
    console.log(`[SKIP] ${siteName} - HeroSection.tsx not found`);
    return false;
  }

  let content = fs.readFileSync(heroPath, 'utf8');

  // Check if already has blur placeholder
  if (content.includes('placeholder="blur"')) {
    console.log(`[OK] ${siteName} - Already has blur placeholder`);
    return true;
  }

  // Pattern 1: fill priority quality
  // Pattern 2: fill\n        priority\n        quality
  // We need to add placeholder="blur" and blurDataURL after priority

  // Try to add blur placeholder after priority
  let modified = false;

  // Pattern for sites with line-by-line attributes
  if (content.includes('priority\n        quality')) {
    content = content.replace(
      /priority\n        quality/g,
      `priority\n        placeholder="blur"\n        blurDataURL="${blurDataURL}"\n        quality`
    );
    modified = true;
  }

  // Pattern for sites with inline attributes
  if (!modified && content.includes('priority quality')) {
    content = content.replace(
      /priority quality/g,
      `priority\n        placeholder="blur"\n        blurDataURL="${blurDataURL}"\n        quality`
    );
    modified = true;
  }

  // Pattern for sites with fill priority on same or different lines
  if (!modified && content.includes('fill\n        priority')) {
    content = content.replace(
      /fill\n        priority\n        quality/g,
      `fill\n        priority\n        placeholder="blur"\n        blurDataURL="${blurDataURL}"\n        quality`
    );
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(heroPath, content);
    console.log(`[FIXED] ${siteName} - Added blur placeholder`);
    return true;
  }

  console.log(`[MANUAL] ${siteName} - Could not auto-fix, please check manually`);
  return false;
}

console.log('Fixing Hero Blur Placeholders...\n');

MICROSITES.forEach(site => {
  fixHeroBlurPlaceholder(site);
});

console.log('\nDone!');
