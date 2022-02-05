const fs = require('fs')
fs.copyFile('./config/package-cjs.json', './lib/cjs/package.json', () => {})
fs.copyFile('./config/package-mjs.json', './lib/mjs/package.json', () => {})
