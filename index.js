'use strict';

const createComponent = require('./src/createComponent');
const ucc = require('uppercamelcase');
const commandLineArgs = require('command-line-args');

const options = commandLineArgs([
    {name: 'comp', alias: 'c', type: String},
    {name: 'recomp', alias: 'r', type: String}
]);

// ACTION -> REDUCER -> CONTAINER -> COMPONENT
const component_name = ucc(options.comp || options.recomp);

if (options.comp || options.recomp) {
    createComponent(component_name, Boolean(options.recomp));
}