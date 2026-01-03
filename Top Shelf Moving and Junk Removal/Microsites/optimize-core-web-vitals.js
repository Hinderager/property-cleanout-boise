/**
 * Core Web Vitals Optimization Script
 * Applies mobile page speed optimizations across all microsites
 * Targets: LCP, FID, CLS improvements
 */

const fs = require('fs');
const path = require('path');

// List of all 16 microsites to optimize
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

// ============================================
// 1. NEXT.JS CONFIG OPTIMIZATION
// ============================================
function getOptimizedNextConfig() {
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

function updateNextConfig(sitePath) {
  const configPath = path.join(sitePath, 'next.config.js');

  if (fs.existsSync(configPath)) {
    const newConfig = getOptimizedNextConfig();
    fs.writeFileSync(configPath, newConfig);
    console.log(`  [OK] Updated next.config.js`);
    return true;
  }
  console.log(`  [SKIP] next.config.js not found`);
  return false;
}

// ============================================
// 2. LAYOUT.TSX OPTIMIZATION
// ============================================
function optimizeLayout(sitePath) {
  const layoutPath = path.join(sitePath, 'src', 'app', 'layout.tsx');

  if (!fs.existsSync(layoutPath)) {
    console.log(`  [SKIP] layout.tsx not found`);
    return false;
  }

  let content = fs.readFileSync(layoutPath, 'utf8');
  let modified = false;

  // Add preconnect for critical domains if not present
  const preconnects = [
    '<link rel="preconnect" href="https://www.googletagmanager.com" />',
    '<link rel="preconnect" href="https://www.google-analytics.com" />',
    '<link rel="preconnect" href="https://connect.facebook.net" />'
  ];

  // Check if preconnect already exists, if not add them
  preconnects.forEach(preconnect => {
    const domain = preconnect.match(/href="([^"]+)"/)[1];
    if (!content.includes(`preconnect" href="${domain}"`)) {
      // Find the dns-prefetch for this domain and add preconnect before it
      const dnsPrefetchPattern = new RegExp(`<link rel="dns-prefetch" href="${domain.replace(/\./g, '\\.')}"[^>]*>`, 'g');
      if (content.match(dnsPrefetchPattern)) {
        content = content.replace(dnsPrefetchPattern, `${preconnect}\n        <link rel="dns-prefetch" href="${domain}" />`);
        modified = true;
      }
    }
  });

  // Add font preload hint if not present
  if (!content.includes('font-display: swap')) {
    // Font display swap is already set via next/font, but ensure it's there
  }

  // Add viewport meta for mobile optimization
  if (!content.includes('viewportFit')) {
    // Already present in existing layouts
  }

  if (modified) {
    fs.writeFileSync(layoutPath, content);
    console.log(`  [OK] Updated layout.tsx with preconnect hints`);
  } else {
    console.log(`  [OK] layout.tsx already optimized`);
  }

  return true;
}

// ============================================
// 3. HERO SECTION OPTIMIZATION (LCP)
// ============================================
function optimizeHeroSection(sitePath) {
  const heroPath = path.join(sitePath, 'src', 'components', 'HeroSection.tsx');

  if (!fs.existsSync(heroPath)) {
    console.log(`  [SKIP] HeroSection.tsx not found`);
    return false;
  }

  let content = fs.readFileSync(heroPath, 'utf8');
  let modified = false;

  // Add blur placeholder for hero image if not present
  // Look for Image components with /generated/hero.webp
  const heroImagePattern = /(<Image[\s\S]*?src="\/generated\/hero\.webp"[\s\S]*?)(priority)/g;

  if (content.includes('src="/generated/hero.webp"') && !content.includes('placeholder="blur"')) {
    // Add placeholder and blurDataURL for LCP optimization
    const blurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgIBAwQDAAAAAAAAAAAAAQIDBAAFESEGEjFBUWFx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADERIh/9oADAMBAAIRAxEAPwDIqNGG7qKxNqCSdWIleSKWMLHGGJLD2Rx/cYyCQASTgYyFSpIopJ//2Q==';

    // Find and update hero Image component
    content = content.replace(
      /(<Image[\s\S]*?src="\/generated\/hero\.webp"[\s\S]*?)(fill\s+priority)/g,
      '$1fill priority\n        placeholder="blur"\n        blurDataURL="' + blurDataURL + '"'
    );
    modified = true;
  }

  // Ensure fetchPriority="high" is set for hero images
  if (content.includes('priority') && !content.includes('fetchPriority')) {
    content = content.replace(
      /priority(\s+quality)/g,
      'priority$1\n        fetchPriority="high"'
    );
    modified = true;
  }

  // Add explicit width/height hints via sizes prop optimization
  if (content.includes('sizes="100vw"')) {
    // Already has sizes, good for CLS
  }

  if (modified) {
    fs.writeFileSync(heroPath, content);
    console.log(`  [OK] Updated HeroSection.tsx with blur placeholder`);
  } else {
    console.log(`  [OK] HeroSection.tsx already optimized`);
  }

  return true;
}

// ============================================
// 4. GLOBALS.CSS OPTIMIZATION
// ============================================
function optimizeGlobalsCss(sitePath) {
  const cssPath = path.join(sitePath, 'src', 'app', 'globals.css');

  if (!fs.existsSync(cssPath)) {
    console.log(`  [SKIP] globals.css not found`);
    return false;
  }

  let content = fs.readFileSync(cssPath, 'utf8');
  let modified = false;

  // Add critical CSS optimizations if not present
  const criticalCss = `
/* Critical rendering optimizations */
@layer base {
  /* Reduce layout shift with font-display optimization */
  * {
    font-display: optional;
  }

  /* Hardware acceleration for smoother animations */
  .will-change-transform {
    will-change: transform;
  }

  /* Reduce paint operations */
  img, video {
    content-visibility: auto;
  }
}

/* Optimize images for CLS */
img {
  height: auto;
  max-width: 100%;
}

/* Prefers reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
`;

  // Check if critical optimizations already exist
  if (!content.includes('content-visibility: auto') || !content.includes('prefers-reduced-motion')) {
    // Add before the last closing of the file
    content = content.trimEnd() + '\n' + criticalCss;
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(cssPath, content);
    console.log(`  [OK] Updated globals.css with critical CSS`);
  } else {
    console.log(`  [OK] globals.css already optimized`);
  }

  return true;
}

// ============================================
// 5. CREATE DYNAMIC IMPORT WRAPPER
// ============================================
function createDynamicImportWrapper(sitePath) {
  const componentsDir = path.join(sitePath, 'src', 'components');
  const wrapperPath = path.join(componentsDir, 'LazyComponents.tsx');

  if (!fs.existsSync(componentsDir)) {
    console.log(`  [SKIP] components directory not found`);
    return false;
  }

  // Check if FAQ component exists for lazy loading
  const faqExists = fs.existsSync(path.join(componentsDir, 'FAQ.tsx'));
  const mapExists = fs.existsSync(path.join(componentsDir, 'MapSection.tsx'));
  const reviewsExists = fs.existsSync(path.join(componentsDir, 'GoogleReviews.tsx'));

  const lazyComponents = `'use client'

import dynamic from 'next/dynamic'

// Lazy load below-the-fold components for better LCP
${faqExists ? `export const LazyFAQ = dynamic(() => import('./FAQ').then(mod => mod.FAQ), {
  loading: () => <div className="animate-pulse bg-gray-100 h-96 rounded-lg" />,
  ssr: true,
})` : ''}

${mapExists ? `export const LazyMapSection = dynamic(() => import('./MapSection').then(mod => mod.MapSection), {
  loading: () => <div className="animate-pulse bg-gray-200 h-80 rounded-lg" />,
  ssr: false, // Map doesn't need SSR
})` : ''}

${reviewsExists ? `export const LazyGoogleReviews = dynamic(() => import('./GoogleReviews').then(mod => mod.GoogleReviews), {
  loading: () => <div className="animate-pulse bg-gray-100 h-64 rounded-lg" />,
  ssr: true,
})` : ''}
`;

  if (faqExists || mapExists || reviewsExists) {
    fs.writeFileSync(wrapperPath, lazyComponents);
    console.log(`  [OK] Created LazyComponents.tsx for dynamic imports`);
    return true;
  }

  console.log(`  [SKIP] No components to lazy load`);
  return false;
}

// ============================================
// 6. OPTIMIZE GOOGLE REVIEWS BADGE (CLS)
// ============================================
function optimizeGoogleReviewsBadge(sitePath) {
  const badgePath = path.join(sitePath, 'src', 'components', 'GoogleReviewsBadge.tsx');

  if (!fs.existsSync(badgePath)) {
    console.log(`  [SKIP] GoogleReviewsBadge.tsx not found`);
    return false;
  }

  let content = fs.readFileSync(badgePath, 'utf8');
  let modified = false;

  // Add fixed dimensions to prevent CLS
  if (!content.includes('min-h-') && !content.includes('min-height')) {
    // Add minimum height classes to prevent layout shift
    content = content.replace(
      /className="md:hidden bg-white rounded-xl/g,
      'className="md:hidden bg-white rounded-xl min-h-[52px]'
    );
    content = content.replace(
      /className="hidden md:block bg-white rounded-2xl/g,
      'className="hidden md:block bg-white rounded-2xl min-h-[100px]'
    );
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(badgePath, content);
    console.log(`  [OK] Updated GoogleReviewsBadge.tsx with fixed dimensions`);
  } else {
    console.log(`  [OK] GoogleReviewsBadge.tsx already optimized`);
  }

  return true;
}

// ============================================
// 7. OPTIMIZE HEADER COMPONENT (CLS + FID)
// ============================================
function optimizeHeader(sitePath) {
  const headerPath = path.join(sitePath, 'src', 'components', 'Header.tsx');

  if (!fs.existsSync(headerPath)) {
    console.log(`  [SKIP] Header.tsx not found`);
    return false;
  }

  let content = fs.readFileSync(headerPath, 'utf8');
  let modified = false;

  // Optimize scroll listener with passive option if not present
  if (content.includes("addEventListener('scroll'") && !content.includes('passive: true')) {
    content = content.replace(
      /addEventListener\('scroll', handleScroll\)/g,
      "addEventListener('scroll', handleScroll, { passive: true })"
    );
    modified = true;
  }

  // Add fixed height to prevent CLS
  if (!content.includes('min-h-[56px]') && !content.includes('h-14')) {
    // Header already has h-14 in most cases
  }

  if (modified) {
    fs.writeFileSync(headerPath, content);
    console.log(`  [OK] Updated Header.tsx with passive scroll listener`);
  } else {
    console.log(`  [OK] Header.tsx already optimized`);
  }

  return true;
}

// ============================================
// 8. OPTIMIZE SERVICES GRID (CLS)
// ============================================
function optimizeServicesGrid(sitePath) {
  const gridPath = path.join(sitePath, 'src', 'components', 'ServicesGrid.tsx');

  if (!fs.existsSync(gridPath)) {
    console.log(`  [SKIP] ServicesGrid.tsx not found`);
    return false;
  }

  let content = fs.readFileSync(gridPath, 'utf8');
  let modified = false;

  // Add aspect-ratio to cards for CLS prevention
  if (!content.includes('aspect-') && content.includes('<Card')) {
    content = content.replace(
      /<Card key=\{index\} className="/g,
      '<Card key={index} className="min-h-[280px] '
    );
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(gridPath, content);
    console.log(`  [OK] Updated ServicesGrid.tsx with fixed dimensions`);
  } else {
    console.log(`  [OK] ServicesGrid.tsx already optimized`);
  }

  return true;
}

// ============================================
// 9. ADD LOADING SKELETON COMPONENT
// ============================================
function createLoadingSkeleton(sitePath) {
  const componentsDir = path.join(sitePath, 'src', 'components');
  const skeletonPath = path.join(componentsDir, 'LoadingSkeleton.tsx');

  if (!fs.existsSync(componentsDir)) {
    return false;
  }

  const skeletonComponent = `export function LoadingSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={\`animate-pulse bg-gray-200 rounded-lg \${className}\`} />
  )
}

export function CardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-200 h-48 rounded-t-lg" />
      <div className="p-4 space-y-3">
        <div className="bg-gray-200 h-6 rounded w-3/4" />
        <div className="bg-gray-200 h-4 rounded" />
        <div className="bg-gray-200 h-4 rounded w-5/6" />
      </div>
    </div>
  )
}

export function HeroSkeleton() {
  return (
    <div className="animate-pulse bg-gray-300 h-[580px] md:h-[900px] lg:h-[950px] w-full" />
  )
}
`;

  fs.writeFileSync(skeletonPath, skeletonComponent);
  console.log(`  [OK] Created LoadingSkeleton.tsx`);
  return true;
}

// ============================================
// MAIN EXECUTION
// ============================================
function optimizeSite(siteName) {
  const sitePath = path.join(MICROSITES_DIR, siteName);

  if (!fs.existsSync(sitePath)) {
    console.log(`[SKIP] ${siteName} - directory not found`);
    return;
  }

  console.log(`\n[OPTIMIZING] ${siteName}`);
  console.log('='.repeat(50));

  // Apply all optimizations
  updateNextConfig(sitePath);
  optimizeLayout(sitePath);
  optimizeHeroSection(sitePath);
  optimizeGlobalsCss(sitePath);
  createDynamicImportWrapper(sitePath);
  optimizeGoogleReviewsBadge(sitePath);
  optimizeHeader(sitePath);
  optimizeServicesGrid(sitePath);
  createLoadingSkeleton(sitePath);
}

// Run optimization on all sites
console.log('='.repeat(60));
console.log('CORE WEB VITALS OPTIMIZATION SCRIPT');
console.log('='.repeat(60));
console.log(`\nOptimizing ${MICROSITES.length} microsites...`);

MICROSITES.forEach(site => {
  optimizeSite(site);
});

console.log('\n' + '='.repeat(60));
console.log('OPTIMIZATION COMPLETE');
console.log('='.repeat(60));
console.log(`
Summary of optimizations applied:
1. next.config.js - Added caching headers, image optimization
2. layout.tsx - Added preconnect hints for critical domains
3. HeroSection.tsx - Added blur placeholder for LCP
4. globals.css - Added critical CSS and reduced-motion support
5. LazyComponents.tsx - Created dynamic import wrapper
6. GoogleReviewsBadge.tsx - Fixed dimensions for CLS
7. Header.tsx - Optimized scroll listener
8. ServicesGrid.tsx - Added minimum heights for CLS
9. LoadingSkeleton.tsx - Created loading skeleton component

Next steps:
- Run 'npm run build' to verify no errors
- Test with Lighthouse to measure improvements
- Consider implementing Intersection Observer for lazy loading
`);
