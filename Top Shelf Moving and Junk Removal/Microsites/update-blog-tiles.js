const fs = require('fs');
const path = require('path');

// Mapping of blog slugs to their unique tile images
const blogImageMappings = {
  'boise-appliance-removal': {
    'how-much-does-appliance-removal-cost': 'appliance-removal-cost.webp',
    'why-diy-appliance-removal-is-risky': 'diy-appliance-removal-risks.webp',
    'what-to-do-with-old-appliances-boise': 'old-appliances-boise-options.webp',
    'can-you-recycle-old-refrigerators': 'refrigerator-recycling-boise.webp',
    'preparing-appliances-for-removal': 'preparing-appliances-removal.webp'
  },
  'boise-commercial-movers': {
    'commercial-vs-residential-movers': 'commercial-vs-residential.webp',
    'employee-communication-during-office-move': 'employee-communication.webp',
    'what-to-look-for-in-commercial-movers': 'hiring-commercial-movers.webp',
    'minimize-downtime-during-commercial-move': 'minimize-downtime.webp',
    'planning-office-move-boise': 'planning-office-move.webp'
  },
  'boise-construction-debris-removal': {
    'keeping-job-sites-clean': 'clean-job-site-boise.webp',
    'construction-debris-disposal-rules-boise': 'construction-debris-rules-boise.webp',
    'dumpster-rental-vs-debris-removal-service': 'dumpster-vs-removal-service.webp',
    'recycling-construction-materials-idaho': 'recycling-construction-materials.webp',
    'types-of-construction-debris': 'types-construction-debris.webp'
  },
  'boise-demolition': {
    'demolition-permits-boise-idaho': 'demolition-permits-boise.webp',
    'what-happens-during-demolition': 'demolition-process-boise.webp',
    'demolition-safety-what-homeowners-should-know': 'demolition-safety-boise.webp',
    'full-vs-partial-demolition': 'full-partial-demolition.webp',
    'preparing-property-for-demolition': 'preparing-demolition-boise.webp'
  },
  'boise-dumpster-rental': {
    'what-can-go-in-a-dumpster': 'dumpster-allowed-items.webp',
    'where-to-place-dumpster': 'dumpster-placement-guide.webp',
    'dumpster-rental-cost-boise': 'dumpster-rental-cost-boise.webp',
    'how-long-can-i-keep-a-dumpster': 'dumpster-rental-duration.webp',
    'what-size-dumpster-do-i-need': 'dumpster-size-guide.webp'
  },
  'boise-estate-cleanout': {
    'emotional-side-of-estate-cleanouts': 'emotional-estate-cleanout.webp',
    'estate-cleanout-timeline': 'estate-cleanout-timeline.webp',
    'what-to-keep-during-estate-cleanout': 'estate-sorting-decisions.webp',
    'hiring-estate-cleanout-service': 'hiring-estate-cleanout.webp',
    'how-to-start-estate-cleanout': 'start-estate-cleanout.webp'
  },
  'boise-furniture-removal': {
    'can-old-furniture-be-donated': 'furniture-donation-boise.webp',
    'furniture-removal-cost-guide': 'furniture-removal-pricing.webp',
    'furniture-disposal-vs-junk-removal': 'furniture-vs-junk-removal.webp',
    'removing-heavy-furniture-safely': 'heavy-furniture-moving.webp',
    'getting-rid-of-old-furniture-boise': 'old-furniture-disposal-boise.webp'
  },
  'boise-hoarding-cleanup': {
    'after-hoarding-cleanup': 'after-hoarding-cleanup.webp',
    'helping-hoarder-family-member': 'helping-hoarder-family.webp',
    'hoarding-cleanup-cost-factors': 'hoarding-cleanup-costs.webp',
    'hoarding-cleanup-process': 'hoarding-cleanup-process.webp',
    'understanding-hoarding-disorder': 'understanding-hoarding.webp'
  },
  'boise-hot-tub-removal': {
    'diy-hot-tub-removal': 'diy-hot-tub-removal.webp',
    'what-happens-to-old-hot-tubs': 'hot-tub-recycling.webp',
    'hot-tub-removal-cost-boise': 'hot-tub-removal-cost.webp',
    'hot-tub-removal-process': 'hot-tub-removal-process.webp',
    'preparing-hot-tub-for-removal': 'preparing-hot-tub-removal.webp'
  },
  'boise-junk-removal': {
    'why-your-stuff-is-ruining-your-life': 'garage-cleanout.webp',
    'decluttering-guide-boise': 'decluttering-guide.webp',
    'junk-removal-pricing-explained': 'electronics-ewaste.webp',
    'what-junk-removal-companies-take': 'items-we-take.webp',
    'same-day-junk-removal': 'same-day-service.webp',
    'junk-removal-vs-dumpster-rental': 'junk-vs-dumpster.webp'
  },
  'boise-movers': {
    'hiring-movers-vs-diy': 'movers-vs-diy.webp',
    'how-much-do-movers-cost-boise': 'moving-cost-boise.webp',
    'moving-day-checklist': 'moving-day-checklist.webp',
    'moving-to-boise-guide': 'moving-to-boise.webp',
    'packing-tips-moving': 'packing-tips.webp'
  },
  'boise-tire-removal': {
    'illegal-tire-dumping-penalties': 'illegal-tire-dumping.webp',
    'property-tire-cleanup': 'property-tire-cleanup.webp',
    'tire-disposal-options-boise': 'tire-removal-options.webp',
    'tire-removal-cost': 'tire-removal-pricing.webp',
    'where-to-recycle-tires-boise': 'where-to-recycle-tires.webp'
  },
  'mobile-home-demolition-boise': {
    'mobile-home-demolition-permits': 'demolition-permits.webp',
    'mobile-home-demolition-cost': 'mobile-home-demo-cost.webp',
    'what-happens-to-demolished-mobile-homes': 'mobile-home-recycling.webp',
    'preparing-mobile-home-for-demolition': 'preparing-for-demolition.webp',
    'mobile-home-removal-vs-demolition': 'removal-vs-demolition.webp'
  },
  'property-cleanout-boise': {
    'property-cleanout-checklist': 'cleanout-checklist.webp',
    'property-cleanout-cost-factors': 'cleanout-cost-factors.webp',
    'foreclosure-cleanout-process': 'foreclosure-cleanout.webp',
    'rental-property-cleanout-guide': 'rental-cleanout-guide.webp',
    'same-day-property-cleanout': 'same-day-cleanout.webp'
  }
};

function updateBlogLandingPage(siteName, mappings) {
  const blogPagePath = path.join(__dirname, siteName, 'src', 'app', 'blogs', 'page.tsx');

  if (!fs.existsSync(blogPagePath)) {
    console.log(`  Skipping ${siteName} - blog page not found`);
    return false;
  }

  let content = fs.readFileSync(blogPagePath, 'utf8');
  let updated = false;

  for (const [slug, imageName] of Object.entries(mappings)) {
    // Create regex to match image path for this slug
    const slugPattern = new RegExp(
      `("slug":\\s*"${slug}"[^}]*"image":\\s*")[^"]+(")`
    );

    if (slugPattern.test(content)) {
      content = content.replace(
        slugPattern,
        `$1/generated/${imageName}$2`
      );
      updated = true;
      console.log(`    Updated: ${slug} -> ${imageName}`);
    }
  }

  if (updated) {
    fs.writeFileSync(blogPagePath, content);
    console.log(`  Saved: ${blogPagePath}`);
    return true;
  }

  return false;
}

console.log('========================================');
console.log('Updating Blog Landing Page Tile Images');
console.log('========================================\n');

let sitesUpdated = 0;

for (const [siteName, mappings] of Object.entries(blogImageMappings)) {
  console.log(`\n=== ${siteName} ===`);
  if (updateBlogLandingPage(siteName, mappings)) {
    sitesUpdated++;
  }
}

console.log(`\n========================================`);
console.log(`Updated ${sitesUpdated} blog landing pages`);
console.log('========================================');
