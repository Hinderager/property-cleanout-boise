#!/usr/bin/env node

/**
 * Convert HVAC content to Roofing content across the boise-roofing-company microsite
 *
 * This script systematically replaces HVAC references with roofing equivalents
 */

const fs = require('fs');
const path = require('path');

const siteDir = path.join(__dirname, 'boise-roofing-company');

// Replacement mappings for HVAC -> Roofing terminology
const replacements = {
  // Service names
  'HVAC': 'Roofing',
  'hvac': 'roofing',
  'Air Conditioning': 'Roof Installation',
  'air conditioning': 'roof installation',
  'AC ': 'Roof ',
  ' AC': ' Roof',
  'Furnace': 'Roof Repair',
  'furnace': 'roof repair',
  'Heat Pump': 'Roof Maintenance',
  'heat pump': 'roof maintenance',
  'Heating': 'Roof Inspection',
  'heating': 'roof inspection',
  'Indoor Air Quality': 'Specialty Roofing',
  'indoor air quality': 'specialty roofing',
  'Ductwork': 'Gutter Services',
  'ductwork': 'gutter services',

  // Company names
  'Boise HVAC Pros': 'Boise Roofing Company',
  'hvac-boise.com': 'boise-roofing.com',

  // Service-specific terms
  'cooling': 'protecting',
  'Cooling': 'Protecting',
  'heating and cooling': 'roofing protection',
  'Heating and Cooling': 'Roofing Protection',
  'comfortable': 'protected',
  'Comfortable': 'Protected',
  'temperature': 'structural integrity',
  'Temperature': 'Structural Integrity',
  'thermostat': 'roof system',
  'Thermostat': 'Roof System',
  'refrigerant': 'roofing material',
  'Refrigerant': 'Roofing Material',
  'compressor': 'roof structure',
  'Compressor': 'Roof Structure',
  'filter': 'shingle',
  'Filter': 'Shingle',
  'duct': 'flashing',
  'Duct': 'Flashing',

  // Problem descriptions
  'not cooling': 'leaking',
  'not heating': 'damaged',
  'stops working': 'fails',
  'breakdown': 'damage',
  'Breakdown': 'Damage',
};

// Files to skip
const skipFiles = [
  'node_modules',
  '.next',
  '.git',
  'public',
  'convert-hvac-to-roofing.js'
];

function shouldProcessFile(filePath) {
  const ext = path.extname(filePath);
  return ['.tsx', '.ts', '.jsx', '.js', '.json'].includes(ext);
}

function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Apply replacements
    for (const [oldTerm, newTerm] of Object.entries(replacements)) {
      const regex = new RegExp(oldTerm, 'g');
      if (content.match(regex)) {
        content = content.replace(regex, newTerm);
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Updated: ${path.relative(siteDir, filePath)}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
    return false;
  }
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  let processedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    // Skip certain directories
    if (skipFiles.some(skip => filePath.includes(skip))) {
      continue;
    }

    if (stat.isDirectory()) {
      processedCount += walkDirectory(filePath);
    } else if (shouldProcessFile(filePath)) {
      if (processFile(filePath)) {
        processedCount++;
      }
    }
  }

  return processedCount;
}

// Main execution
console.log('Starting HVAC to Roofing conversion...\n');
console.log(`Processing directory: ${siteDir}\n`);

const count = walkDirectory(siteDir);

console.log(`\nConversion complete! ${count} files updated.`);
console.log('\nNote: Review the changes and manually update any content that needs refinement.');
