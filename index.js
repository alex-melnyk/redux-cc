const createComponent = require('./src/createComponent');
const createStructure = require('./src/createStructure');
const ucc = require('uppercamelcase');
const commandLineArgs = require('command-line-args');

const DEFAULT_DIR = '.gen';

const options = commandLineArgs([
    {name: 'comp', alias: 'c', type: String},
    {name: 'recomp', alias: 'r', type: String},
    {name: 'struct', alias: 's', type: String},
    {name: 'example', alias: 'e', type: Boolean},
    {name: 'directory', alias: 'd', type: String, defaultOption: true}
]);

// ACTION -> REDUCER -> CONTAINER -> COMPONENT
if (options.struct || options.struct === null) {
    createStructure(options.struct || DEFAULT_DIR);
}

if (options.comp || options.recomp) {
    const component_name = ucc(options.comp || options.recomp);

    const target = options.struct || options.directory || DEFAULT_DIR;

    createStructure(target, Boolean(options.recomp)).then(() => {
        createComponent(target, component_name, Boolean(options.recomp));
    });
}

if (options.example) {
    createComponent(options.struct || DEFAULT_DIR, 'example', true);
}