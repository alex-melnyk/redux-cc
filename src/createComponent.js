'use strict';

const fs = require('fs');
const path = require('path');
const lcc = require('camelcase');

const TEMPLATES_DIR = './templates';
const GEN_DIR = '.gen';

const ACTIONS_DIR = 'actions';
const REDUCERS_DIR = 'reducers';
const CONTAINERS_DIR = 'containers';
const COMPONENTS_DIR = 'components';

const R_ACTION = /ACTION_NAME/g;
const R_REDUCER = /REDUCER_NAME/g;
const R_COMPONENT = /COMPONENT_NAME/g;
const R_COMPONENT_FILE = /COMPONENT_FILE_NAME/g;

/**
 * Creates action.
 * @param component_name name of component.
 */
function makeAction(component_name) {
    fs.readFile(path.join(TEMPLATES_DIR, 'action.js'), (err, data) => {
        if (err) throw err;

        const content = data.toString('utf-8');

        fs.writeFile(path.join(GEN_DIR, 'actions', component_name.toLowerCase() + '.js'), content, (err) => {
            if (err) throw err;

            console.log('Action file has been saved!');
        });
    });
}

/**
 * Creates reducer.
 *
 * @param component_name name of component.
 */
function makeReducer(component_name) {
    fs.readFile(path.join(TEMPLATES_DIR, 'reducer.js'), (err, data) => {
        if (err) throw err;

        const content = data.toString('utf-8')
            .replace(R_ACTION, component_name.toLowerCase())
            .replace(R_REDUCER, lcc(component_name));

        fs.writeFile(path.join(GEN_DIR, 'reducers', component_name.toLowerCase() + '.js'), content, (err) => {
            if (err) throw err;

            console.log('Reducer file has been saved!');
        });
    });
}

/**
 * Creates container.
 *
 * @param component_name name of component.
 */
function makeContainer(component_name) {
    fs.readFile(path.join(TEMPLATES_DIR, 'container.js'), (err, data) => {
        if (err) throw err;

        const content = data.toString('utf-8')
            .replace(R_ACTION, component_name.toLowerCase())
            .replace(R_REDUCER, component_name.toLowerCase())
            .replace(R_COMPONENT, component_name)
            .replace(R_COMPONENT_FILE, component_name.toLowerCase());

        fs.writeFile(path.join(GEN_DIR, 'containers', component_name.toLowerCase() + '.js'), content, (err) => {
            if (err) throw err;

            console.log('Container file has been saved!');
        });
    });
}

/**
 * Creates component.
 *
 * @param component_name name of component.
 */
function makeComponent(component_name) {
    fs.readFile(path.join(TEMPLATES_DIR, 'component.jsx'), (err, data) => {
        if (err) throw err;

        const content = data.toString('utf-8')
            .replace(R_COMPONENT, component_name);

        fs.writeFile(path.join(GEN_DIR, 'components', component_name.toLowerCase() + '.jsx'), content, (err) => {
            if (err) throw err;

            console.log('Component file has been saved!');
        });
    });
}

function createComponent(name, wrapped) {
    try {
        if (wrapped) {
            fs.mkdirSync(path.join(GEN_DIR, ACTIONS_DIR));
            fs.mkdirSync(path.join(GEN_DIR, REDUCERS_DIR));
            fs.mkdirSync(path.join(GEN_DIR, CONTAINERS_DIR));
        }

        fs.mkdirSync(path.join(GEN_DIR, COMPONENTS_DIR));
    } catch (ex) {
        // console.log(err);
    }

    if (wrapped) {
        makeAction(name);
        makeReducer(name);
        makeContainer(name);
    }

    makeComponent(name);
}

module.exports = createComponent;