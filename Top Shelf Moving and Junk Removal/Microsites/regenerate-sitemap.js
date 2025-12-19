const fs = require('fs');
const path = require('path');

// Get microsite from command line argument
const microsite = process.argv[2];
if (!microsite) {
  console.log('Usage: node regenerate-sitemap.js <microsite-folder>');
  process.exit(1);
}

const micrositePath = path.join(__dirname, microsite);
const srcAppPath = path.join(micrositePath, 'src', 'app');
const sitemapPath = path.join(micrositePath, 'public', 'sitemap.xml');

// Read robots.txt to get domain
const robotsPath = path.join(micrositePath, 'public', 'robots.txt');
let domain = '';
try {
  const robotsContent = fs.readFileSync(robotsPath, 'utf8');
  const match = robotsContent.match(/Sitemap:\s*https?:\/\/([^\/\s]+)/i);
  if (match) {
    domain = match[1];
  }
} catch (e) {
  console.error('Could not read robots.txt:', e.message);
  process.exit(1);
}

if (!domain) {
  console.error('Could not extract domain from robots.txt');
  process.exit(1);
}

console.log(`Domain: ${domain}`);

// Recursively find all page.tsx files
function findPages(dir, basePath = '') {
  const pages = [];
  try {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        // Skip special Next.js folders
        if (!item.startsWith('_') && !item.startsWith('[') && item !== 'api') {
          const newBasePath = basePath ? `${basePath}/${item}` : item;
          pages.push(...findPages(fullPath, newBasePath));
        }
      } else if (item === 'page.tsx' || item === 'page.ts' || item === 'page.js') {
        pages.push(basePath);
      }
    }
  } catch (e) {
    console.error(`Error reading ${dir}:`, e.message);
  }
  return pages;
}

// Get all pages
const pages = findPages(srcAppPath);
console.log(`Found ${pages.length} pages`);

// Determine priority based on path depth
function getPriority(urlPath) {
  if (!urlPath || urlPath === '') return '1.0';
  const depth = urlPath.split('/').length;
  if (depth === 1) {
    if (['services', 'cities-served'].includes(urlPath)) return '0.9';
    if (['about-us', 'resources', 'blogs', 'contact'].includes(urlPath)) return '0.8';
    return '0.7';
  }
  if (depth === 2) return '0.8';
  if (depth === 3) return '0.7';
  return '0.5';
}

// Determine changefreq based on path
function getChangefreq(urlPath) {
  if (!urlPath || urlPath === '') return 'weekly';
  if (urlPath.startsWith('blogs')) return 'weekly';
  if (urlPath.startsWith('services') || urlPath.startsWith('cities-served')) return 'monthly';
  return 'monthly';
}

// Sort pages logically
pages.sort((a, b) => {
  // Homepage first
  if (!a) return -1;
  if (!b) return 1;

  // Services before cities-served before about-us before blogs before resources
  const order = ['services', 'cities-served', 'about-us', 'blogs', 'resources', 'contact', 'privacy', 'terms'];
  const aPrefix = order.findIndex(p => a.startsWith(p));
  const bPrefix = order.findIndex(p => b.startsWith(p));

  if (aPrefix !== bPrefix) {
    if (aPrefix === -1) return 1;
    if (bPrefix === -1) return -1;
    return aPrefix - bPrefix;
  }

  return a.localeCompare(b);
});

// Generate sitemap XML
const today = new Date().toISOString().split('T')[0];
let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
`;

for (const page of pages) {
  const url = page ? `https://${domain}/${page}` : `https://${domain}/`;
  const priority = getPriority(page);
  const changefreq = getChangefreq(page);

  xml += `  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;
}

xml += '</urlset>\n';

// Write sitemap
fs.writeFileSync(sitemapPath, xml, 'utf8');
console.log(`Sitemap written to ${sitemapPath}`);
console.log(`Total URLs: ${pages.length}`);
