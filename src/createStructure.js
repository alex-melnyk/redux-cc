'use strict';

const fs = require('fs');
const path = require('path');

const STRUCTURE_DIRS = [
    'actions', 'reducers', 'containers'
];

function createStructure(dest, full = false) {
    const destination  = path.resolve(dest);

    fs.stat(destination, (err, stats) => {
        if (!stats && err.code === 'ENOENT') {
            fs.mkdirSync(destination);
        }
    });

    const components = path.join(destination, 'components');

    fs.stat(components, (err, stats) => {
        if (!stats && err.code === 'ENOENT') {
            fs.mkdirSync(components);
        }
    });

    STRUCTURE_DIRS.forEach((dir) => {
        const location = path.join(destination, dir);

        fs.stat(location, (err, stats) => {
            if (!stats && err.code === 'ENOENT') {
                fs.mkdirSync(location);
            }
        });
    });

    return new Promise((resolve) => {
        return resolve();
    })
}

module.exports = createStructure;