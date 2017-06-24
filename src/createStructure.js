'use strict';

const fs = require('fs');
const path = require('path');

const STRUCTURE_DIRS = [
    'actions', 'reducers', 'containers', 'components'
];

function createStructure(dest) {
    const destination  = path.resolve(dest);
    fs.stat(destination, (err, stats) => {
        if (!stats && err.code === 'ENOENT') {
            fs.mkdirSync(destination);
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
}

module.exports = createStructure;