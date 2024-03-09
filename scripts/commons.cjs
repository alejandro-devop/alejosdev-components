const fs = require('fs');
const { exec } = require('child_process');

const readJsonFile = (path) => {
    const file = fs.readFileSync(path, { encoding: 'utf-8', flag: 'r' });
    return JSON.parse(file);
}

const writeJSONFile = (path, content) => {
    fs.writeFileSync(path, content, { encoding: 'utf-8', flag: 'w' })
};

const getPackage = () => {
    return readJsonFile('package.json');
}

const overritePackage = (content) => {
    writeJSONFile('package.json', JSON.stringify(content, null, 2) + '\n')
}

const resetDeps = () => {
    console.log("Reseting dependencies...");
    exec('bash ./scripts/reset_deps.bash', (err, stdout, stderror) => {
        if (err) {
            console.log("Error!");
            console.log(stderror);
            return;
        }

        console.log(`Output: ${stdout}`);
    });
}

module.exports = {
    resetDeps,
    readJsonFile,
    writeJSONFile,
    getPackage,
    overritePackage
};
