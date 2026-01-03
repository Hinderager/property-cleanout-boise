/**
 * Fix Next.js Config - Remove optimizeCss experimental feature
 * that requires the critters package
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

function getFixedNextConfig() {
  return `/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Image Optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'topshelfpros.com',
        pathname: '/images/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache for images
  },

  // Compression & Headers
  compress: true,
  poweredByHeader: false,

  // Caching Headers for Static Assets
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
`;
}

console.log('Fixing Next.js configs (removing optimizeCss)...\n');

MICROSITES.forEach(site => {
  const configPath = path.join(MICROSITES_DIR, site, 'next.config.js');

  if (fs.existsSync(configPath)) {
    fs.writeFileSync(configPath, getFixedNextConfig());
    console.log(`[OK] ${site} - Updated next.config.js`);
  } else {
    console.log(`[SKIP] ${site} - next.config.js not found`);
  }
});

console.log('\nDone!');
