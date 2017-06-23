'use strict';
const fs = require('fs');

const commandLineArgs = require('command-line-args');

const options = commandLineArgs([
    {name: 'component', alias: 'c', type: String}
]);

console.log('options: %s', JSON.stringify(options));

// ACTION -> REDUCER -> CONTAINER -> COMPONENT
try {
    // fs.mkdirSync('./src/actions');
    // fs.mkdirSync('./src/reducers');
    // fs.mkdirSync('./src/containers');
    fs.mkdirSync('./src/components');
} catch (ex) {
    // console.log(err);
}

fs.readFile('./templates/component.jsx', (err, data) => {
    if (err) throw err;

    const content = data.toString('utf-8').replace(/COMPONENT_NAME/g, options.component);

    fs.writeFile('./src/components/' + options.component.toLowerCase() + '.jsx', content, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
});


console.log("THAT'S ALL")