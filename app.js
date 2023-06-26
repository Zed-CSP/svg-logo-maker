// Headers:
const inquirer = require('inquirer');
const fs = require('fs');
const constructors = require('./assets/constructors.js');
const questions = require('./lib/constants.js');





// function to write svg file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        // variable construction
        const logoName = answers.logoname;
        const textColor = answers['text-color'];
        const backgroundColor = answers['background-color'];
        const font = answers.font;
        const shape = answers.shape;
        const shapeColor = answers['shape-color'];


        // create svg
        writeToFile('logo.svg', svg);
    });
}
