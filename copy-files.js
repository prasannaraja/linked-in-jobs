const ncp = require('ncp').ncp;
const path = require('path');

const files =
    [
        ["manifest", "manifest.json"],
        ["images", "icon128.png"],
        ["images", "icon48.png"],
        ["images", "icon16.png"]
    ];

const getPath = (paths) => {
    return path.join(__dirname, ...paths)
}

const copyFile = (sourcePath, destinationPath) => {
    nodeCopy(getPath(['src', ...sourcePath]), getPath(['dist', ...destinationPath]));
};

const nodeCopy = (source, destination) => {
    return ncp(source, destination, (err) => {
        if (err) {
            console.error(`Error copying ${sourcePath}`, err);
        }
    });
}

files.map((f) => {
    copyFile(f, f.slice(1));
});