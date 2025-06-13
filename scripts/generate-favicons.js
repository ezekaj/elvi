/**
 * Favicon Generation Script
 * 
 * This script creates multiple favicon sizes from the existing zekaj.png logo
 * for optimal browser compatibility and display quality.
 * 
 * Usage: node scripts/generate-favicons.js
 * 
 * Note: This script requires manual execution or can be used as reference
 * for creating favicons using online tools or image editing software.
 */

const fs = require('fs');
const path = require('path');

// Favicon sizes needed for comprehensive browser support
const FAVICON_SIZES = [
  { size: 16, name: 'favicon-16x16.png', description: 'Standard favicon' },
  { size: 32, name: 'favicon-32x32.png', description: 'High-DPI favicon' },
  { size: 48, name: 'favicon-48x48.png', description: 'Windows taskbar' },
  { size: 96, name: 'favicon-96x96.png', description: 'Android Chrome' },
  { size: 144, name: 'favicon-144x144.png', description: 'Windows Metro tile' },
  { size: 192, name: 'android-chrome-192x192.png', description: 'Android Chrome large' },
  { size: 512, name: 'android-chrome-512x512.png', description: 'Android Chrome extra large' },
  { size: 180, name: 'apple-touch-icon.png', description: 'Apple touch icon' }
];

// Paths
const SOURCE_LOGO = path.join(__dirname, '../public/assets/images/zekaj.png');
const FAVICON_DIR = path.join(__dirname, '../public');

console.log('🎨 Favicon Generation Guide');
console.log('============================');
console.log('');
console.log('Source logo:', SOURCE_LOGO);
console.log('Output directory:', FAVICON_DIR);
console.log('');

// Check if source logo exists
if (!fs.existsSync(SOURCE_LOGO)) {
  console.error('❌ Source logo not found:', SOURCE_LOGO);
  process.exit(1);
}

console.log('✅ Source logo found');
console.log('');
console.log('📋 Required favicon files to generate:');
console.log('');

FAVICON_SIZES.forEach(({ size, name, description }) => {
  console.log(`  ${size}x${size}px → ${name} (${description})`);
});

console.log('');
console.log('🛠️  Manual Generation Instructions:');
console.log('');
console.log('1. Use an online favicon generator like:');
console.log('   - https://realfavicongenerator.net/');
console.log('   - https://favicon.io/');
console.log('   - https://www.favicon-generator.org/');
console.log('');
console.log('2. Upload the zekaj.png file');
console.log('3. Generate all required sizes');
console.log('4. Download and place files in the public/ directory');
console.log('');
console.log('🔧 Alternative: Use ImageMagick (if installed):');
console.log('');

FAVICON_SIZES.forEach(({ size, name }) => {
  console.log(`   magick convert "${SOURCE_LOGO}" -resize ${size}x${size} "${path.join(FAVICON_DIR, name)}"`);
});

console.log('');
console.log('📝 The HTML head tags will be automatically added to index.html');
console.log('');

// Generate web app manifest content
const manifest = {
  name: "Z.E Digital Systems - Elvi Zekaj Portfolio",
  short_name: "Z.E Digital",
  description: "Professional portfolio of Elvi Zekaj - Z.E Digital Systems",
  start_url: "/",
  display: "standalone",
  background_color: "#1a202c",
  theme_color: "#4299e1",
  icons: [
    {
      src: "android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png"
    },
    {
      src: "android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png"
    }
  ]
};

const manifestPath = path.join(FAVICON_DIR, 'site.webmanifest');
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
console.log('✅ Generated site.webmanifest');

// Generate browserconfig.xml for Windows tiles
const browserconfig = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
    <msapplication>
        <tile>
            <square150x150logo src="favicon-144x144.png"/>
            <TileColor>#1a202c</TileColor>
        </tile>
    </msapplication>
</browserconfig>`;

const browserconfigPath = path.join(FAVICON_DIR, 'browserconfig.xml');
fs.writeFileSync(browserconfigPath, browserconfig);
console.log('✅ Generated browserconfig.xml');

console.log('');
console.log('🎯 Next steps:');
console.log('1. Generate the favicon images using one of the methods above');
console.log('2. Run the HTML update script to add favicon links');
console.log('3. Test the favicon in both development and production');
