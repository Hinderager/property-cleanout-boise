const fs = require('fs');
const path = require('path');

const MICROSITES_DIR = __dirname;

// Curly apostrophe and quote characters to replace (using hex codes)
const replacements = [
  { from: '\u2019', to: "'" },  // Right single quotation mark
  { from: '\u2018', to: "'" },  // Left single quotation mark
  { from: '\u201C', to: '"' },  // Left double quotation mark
  { from: '\u201D', to: '"' },  // Right double quotation mark
];

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  for (const { from, to } of replacements) {
    content = content.split(from).join(to);
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

function walkDir(dir, callback) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== '.next') {
        walkDir(filePath, callback);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      callback(filePath);
    }
  }
}

// Get all microsite directories
const microsites = fs.readdirSync(MICROSITES_DIR)
  .filter(item => {
    const itemPath = path.join(MICROSITES_DIR, item);
    return fs.statSync(itemPath).isDirectory() &&
           item !== 'node_modules' &&
           !item.startsWith('.');
  });

let totalFixed = 0;
const fixedBySite = {};

for (const site of microsites) {
  const siteDir = path.join(MICROSITES_DIR, site);
  const srcDir = path.join(siteDir, 'src');

  if (!fs.existsSync(srcDir)) continue;

  let siteFixed = 0;
  walkDir(srcDir, (filePath) => {
    if (fixFile(filePath)) {
      siteFixed++;
      totalFixed++;
    }
  });

  if (siteFixed > 0) {
    fixedBySite[site] = siteFixed;
    console.log(`Fixed ${site}: ${siteFixed} files`);
  }
}

console.log(`\n========================================`);
console.log(`Total files fixed: ${totalFixed}`);
console.log(`Sites affected: ${Object.keys(fixedBySite).length}`);
console.log(`========================================`);
