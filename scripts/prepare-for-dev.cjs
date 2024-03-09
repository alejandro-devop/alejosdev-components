//!/usr/bin/env node

const {getPackage, overritePackage, resetDeps} = require('./commons.cjs');

const orgPackage = getPackage();
delete orgPackage.devDependencies.react;
delete orgPackage.devDependencies['react-dom'];

overritePackage(orgPackage);

console.log("Env restored! > ");
resetDeps();