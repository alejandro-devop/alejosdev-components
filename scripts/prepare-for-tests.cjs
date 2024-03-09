//!/usr/bin/env node
const {getPackage, overritePackage, resetDeps} = require('./commons.cjs');

const packageOriginal = getPackage()
const reactDep = packageOriginal.peerDependencies.react;
const reactDomDep = packageOriginal.peerDependencies['react-dom'];
const newPackage = {
    ...packageOriginal,
};

newPackage.devDependencies.react = reactDep;
newPackage.devDependencies['react-dom'] = reactDomDep;

overritePackage(newPackage);
resetDeps();