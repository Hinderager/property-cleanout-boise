const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all blog page.tsx files (excluding the landing pages)
const micrositesDir = __dirname;

function findBlogPages() {
  const blogPages = [];
  const sites = fs.readdirSync(micrositesDir).filter(f => {
    const stat = fs.statSync(path.join(micrositesDir, f));
    return stat.isDirectory() && f.startsWith('boise-') || f.startsWith('mobile-') || f.startsWith('property-');
  });

  for (const site of sites) {
    const blogsDir = path.join(micrositesDir, site, 'src', 'app', 'blogs');
    if (!fs.existsSync(blogsDir)) continue;

    const blogFolders = fs.readdirSync(blogsDir).filter(f => {
      const blogPath = path.join(blogsDir, f);
      return fs.statSync(blogPath).isDirectory() && f !== 'page.tsx';
    });

    for (const blog of blogFolders) {
      const pagePath = path.join(blogsDir, blog, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        blogPages.push({
          site,
          blog,
          path: pagePath
        });
      }
    }
  }

  return blogPages;
}

function updateBlogHeroPosition(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Pattern to find the hero image className
  // Current: className="object-cover"
  // Target: className="object-cover object-center"

  const oldPattern = /className="object-cover"(\s*\/>)/;
  const newClass = 'className="object-cover object-center"$1';

  if (oldPattern.test(content)) {
    content = content.replace(oldPattern, newClass);
    fs.writeFileSync(filePath, content);
    return true;
  }

  return false;
}

console.log('========================================');
console.log('Fixing Blog Hero Image Positions');
console.log('========================================\n');

const blogPages = findBlogPages();
console.log(`Found ${blogPages.length} blog pages\n`);

let updated = 0;
let skipped = 0;

for (const page of blogPages) {
  if (updateBlogHeroPosition(page.path)) {
    console.log(`  Updated: ${page.site}/${page.blog}`);
    updated++;
  } else {
    skipped++;
  }
}

console.log(`\n========================================`);
console.log(`Updated: ${updated} blog pages`);
console.log(`Skipped: ${skipped} (already had positioning or different pattern)`);
console.log('========================================');
