const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const distDir = path.join(__dirname, 'dist');

// Create dist directory if it doesn't exist
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

// Copy index.js to dist directory
fs.copyFileSync(path.join(__dirname, 'app.js'), path.join(distDir, 'app.js'));

console.log('Build complete. Files copied to dist directory.');
