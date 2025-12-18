const fs = require('fs');
const path = require('path');

const MICROSITES_DIR = __dirname;

// Get all microsite directories (exclude node_modules and files)
const microsites = fs.readdirSync(MICROSITES_DIR)
  .filter(item => {
    const itemPath = path.join(MICROSITES_DIR, item);
    return fs.statSync(itemPath).isDirectory() &&
           item !== 'node_modules' &&
           !item.startsWith('.');
  });

// Domain mapping - folder name to domain
function getDomain(folderName) {
  return `https://${folderName}.com`;
}

// Find all page.tsx files and convert to URLs
function findPages(appDir, basePath = '') {
  const pages = [];

  if (!fs.existsSync(appDir)) {
    return pages;
  }

  const items = fs.readdirSync(appDir, { withFileTypes: true });

  for (const item of items) {
    const itemPath = path.join(appDir, item.name);

    if (item.isDirectory()) {
      // Skip special Next.js directories
      if (item.name.startsWith('_') || item.name.startsWith('[') || item.name === 'api') {
        continue;
      }

      // Recurse into subdirectory
      const subPages = findPages(itemPath, `${basePath}/${item.name}`);
      pages.push(...subPages);
    } else if (item.name === 'page.tsx' || item.name === 'page.js') {
      // Found a page
      const urlPath = basePath || '/';
      pages.push(urlPath);
    }
  }

  return pages;
}

// Generate robots.txt content
function generateRobotsTxt(domain) {
  return `# robots.txt for ${domain}
User-agent: *
Allow: /

# Sitemap
Sitemap: ${domain}/sitemap.xml

# Crawl-delay (optional, be nice to crawlers)
Crawl-delay: 1

# Disallow admin and API routes
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
`;
}

// Generate sitemap.xml content
function generateSitemapXml(domain, pages) {
  const today = new Date().toISOString().split('T')[0];

  // Sort pages by priority
  const sortedPages = pages.sort((a, b) => {
    // Homepage first
    if (a === '/') return -1;
    if (b === '/') return 1;
    // Then services
    if (a.includes('/services') && !b.includes('/services')) return -1;
    if (b.includes('/services') && !a.includes('/services')) return 1;
    // Then cities
    if (a.includes('/cities-served') && !b.includes('/cities-served')) return -1;
    if (b.includes('/cities-served') && !a.includes('/cities-served')) return 1;
    return a.localeCompare(b);
  });

  const urlEntries = sortedPages.map(pagePath => {
    let priority = '0.5';
    let changefreq = 'monthly';

    if (pagePath === '/') {
      priority = '1.0';
      changefreq = 'weekly';
    } else if (pagePath === '/services' || pagePath === '/contact') {
      priority = '0.9';
      changefreq = 'weekly';
    } else if (pagePath.startsWith('/services/') && pagePath.split('/').length === 3) {
      priority = '0.8';
      changefreq = 'weekly';
    } else if (pagePath.startsWith('/cities-served/') && pagePath.split('/').length === 3) {
      priority = '0.8';
      changefreq = 'monthly';
    } else if (pagePath.startsWith('/blogs')) {
      priority = '0.6';
      changefreq = 'monthly';
    } else if (pagePath.includes('/about-us')) {
      priority = '0.7';
      changefreq = 'monthly';
    }

    return `  <url>
    <loc>${domain}${pagePath}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urlEntries.join('\n')}
</urlset>`;
}

// Process each microsite
console.log('Generating SEO files for microsites...\n');

let totalPages = 0;
const results = [];

for (const site of microsites) {
  const siteDir = path.join(MICROSITES_DIR, site);
  const appDir = path.join(siteDir, 'src', 'app');
  const publicDir = path.join(siteDir, 'public');

  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const domain = getDomain(site);
  const pages = findPages(appDir);

  if (pages.length === 0) {
    console.log(`⚠️  ${site}: No pages found, skipping`);
    continue;
  }

  // Generate and write robots.txt
  const robotsTxt = generateRobotsTxt(domain);
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);

  // Generate and write sitemap.xml
  const sitemapXml = generateSitemapXml(domain, pages);
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml);

  totalPages += pages.length;
  results.push({ site, pages: pages.length, domain });
  console.log(`✅ ${site}: ${pages.length} pages`);
}

console.log(`\n========================================`);
console.log(`Generated files for ${results.length} microsites`);
console.log(`Total pages indexed: ${totalPages}`);
console.log(`========================================`);
