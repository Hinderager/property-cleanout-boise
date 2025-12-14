const fs = require('fs');
const path = require('path');

const MICROSITES_DIR = __dirname;

const microsites = [
  'boise-appliance-removal',
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
  'boise-tire-removal',
  'mobile-home-demolition-boise',
  'property-cleanout-boise'
];

let updatedCount = 0;

for (const site of microsites) {
  const headerPath = path.join(MICROSITES_DIR, site, 'src', 'components', 'Header.tsx');

  if (fs.existsSync(headerPath)) {
    let content = fs.readFileSync(headerPath, 'utf8');

    // Check if header has blog link
    if (content.includes("href: '/blog'") && !content.includes("href: '/blogs'")) {
      // Update blog link from /blog to /blogs
      content = content.replace(/href: '\/blog'/g, "href: '/blogs'");
      fs.writeFileSync(headerPath, content);
      console.log(`Updated ${site}/Header.tsx`);
      updatedCount++;
    } else if (content.includes("href: '/blogs'")) {
      console.log(`${site}/Header.tsx already has /blogs link`);
    } else {
      // Need to add blog link to resources
      console.log(`${site}/Header.tsx - checking for resources array...`);

      // Check for different header structures and add blog if missing
      if (content.includes('const resources =')) {
        if (!content.includes("'Blog'") && !content.includes('"Blog"')) {
          // Add blog to resources array
          content = content.replace(
            /const resources = \[([^\]]*)\]/s,
            (match, arrayContent) => {
              if (arrayContent.trim().endsWith(',')) {
                return `const resources = [${arrayContent}  { name: 'Blog', href: '/blogs' },\n]`;
              } else if (arrayContent.trim()) {
                return `const resources = [${arrayContent},\n  { name: 'Blog', href: '/blogs' },\n]`;
              } else {
                return `const resources = [\n  { name: 'Blog', href: '/blogs' },\n]`;
              }
            }
          );
          fs.writeFileSync(headerPath, content);
          console.log(`Added blog link to ${site}/Header.tsx`);
          updatedCount++;
        }
      } else {
        console.log(`${site}/Header.tsx - no standard resources array found`);
      }
    }
  } else {
    console.log(`Header not found: ${headerPath}`);
  }
}

console.log(`\nTotal headers updated: ${updatedCount}`);
