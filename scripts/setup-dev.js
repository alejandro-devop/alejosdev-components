//!/usr/bin/env node

const fs = require('fs');
const file = fs.readFileSync('../package.json');
console.log(file);