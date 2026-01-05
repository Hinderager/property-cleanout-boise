const fs = require('fs');
const path = require('path');

// The 14 core microsites
const sites = [
  'boise-appliance-removal',
  'boise-carpet-removal',
  'boise-construction-debris-removal',
  'boise-demolition',
  'boise-dumpster-rental',
  'boise-estate-cleanout',
  'boise-furniture-removal',
  'boise-hoarding-cleanup',
  'boise-hot-tub-removal',
  'boise-junk-removal',
  'boise-shed-removal',
  'boise-tire-removal',
  'mobile-home-demolition-boise',
  'property-cleanout-boise'
];

// VisibleBreadcrumb component content
const visibleBreadcrumbContent = `'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface BreadcrumbItem {
  name: string
  href: string
}

export function VisibleBreadcrumb() {
  const pathname = usePathname()

  // Generate breadcrumb items from pathname
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const items: BreadcrumbItem[] = [{ name: 'Home', href: '/' }]

    if (pathname === '/') return items

    const segments = pathname.split('/').filter(Boolean)
    let currentPath = ''

    segments.forEach((segment) => {
      currentPath += '/' + segment
      const name = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      items.push({
        name,
        href: currentPath
      })
    })

    return items
  }

  const breadcrumbs = generateBreadcrumbs()

  // Don't show breadcrumb on homepage
  if (pathname === '/') return null

  return (
    <div className="bg-gray-50 border-b border-gray-200 pt-20">
      <div className="container mx-auto px-4 py-3">
        <nav className="text-sm" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1">
            {breadcrumbs.map((item, index) => (
              <li key={item.href} className="flex items-center">
                {index > 0 && <span className="mx-2 text-gray-400">/</span>}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-dark-blue font-medium">{item.name}</span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-500 hover:text-dark-blue transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  )
}
`;

const baseDir = __dirname;

function copyVisibleBreadcrumb(site) {
  const componentsDir = path.join(baseDir, site, 'src', 'components');
  const targetFile = path.join(componentsDir, 'VisibleBreadcrumb.tsx');

  if (!fs.existsSync(componentsDir)) {
    console.log(`  Components dir not found for ${site}, skipping...`);
    return false;
  }

  fs.writeFileSync(targetFile, visibleBreadcrumbContent);
  console.log(`  Created VisibleBreadcrumb.tsx in ${site}`);
  return true;
}

function updateLayout(site) {
  const layoutPath = path.join(baseDir, site, 'src', 'app', 'layout.tsx');

  if (!fs.existsSync(layoutPath)) {
    console.log(`  Layout not found for ${site}, skipping...`);
    return false;
  }

  let content = fs.readFileSync(layoutPath, 'utf8');

  // Check if VisibleBreadcrumb is already imported
  if (content.includes('VisibleBreadcrumb')) {
    console.log(`  VisibleBreadcrumb already in ${site} layout, skipping...`);
    return true;
  }

  // Add import statement - find a good place to add it
  // Look for the last component import from @/components
  const importPatterns = [
    /import \{ BreadcrumbSchema \} from '@\/components\/BreadcrumbSchema'/,
    /import \{ StructuredData \} from '@\/components\/StructuredData'/,
    /import \{ Footer \} from '@\/components\/Footer'/,
    /import \{ Header \} from '@\/components\/Header'/
  ];

  let importAdded = false;
  for (const pattern of importPatterns) {
    const match = content.match(pattern);
    if (match) {
      content = content.replace(pattern, `${match[0]}\nimport { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'`);
      importAdded = true;
      break;
    }
  }

  if (!importAdded) {
    // Fallback: add after './globals.css' import
    content = content.replace(
      /import '\.\/globals\.css'/,
      `import './globals.css'\nimport { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'`
    );
  }

  // Add component after <Header />
  // Handle different patterns
  const headerPatterns = [
    /<Header \/>\n          \{children\}/,
    /<Header \/>\n            \{children\}/,
    /<Header \/>\n          <main>/,
    /<Header \/>\n            <main>/,
    /<Header \/>\s*\n\s*\{children\}/,
    /<Header \/>\s*\n\s*<main>/
  ];

  let componentAdded = false;
  for (const pattern of headerPatterns) {
    if (pattern.test(content)) {
      content = content.replace(pattern, (match) => {
        return match.replace(/<Header \/>/, '<Header />\n          <VisibleBreadcrumb />');
      });
      componentAdded = true;
      break;
    }
  }

  if (!componentAdded) {
    // More aggressive replacement
    content = content.replace(
      /<Header \/>/,
      '<Header />\n          <VisibleBreadcrumb />'
    );
  }

  fs.writeFileSync(layoutPath, content);
  console.log(`  Updated layout.tsx in ${site}`);
  return true;
}

console.log('Adding VisibleBreadcrumb to all 14 microsites...\n');

let successCount = 0;
for (const site of sites) {
  console.log(`Processing ${site}...`);
  const copied = copyVisibleBreadcrumb(site);
  const updated = updateLayout(site);
  if (copied && updated) {
    successCount++;
  }
}

console.log(`\nDone! Successfully updated ${successCount}/${sites.length} sites.`);
