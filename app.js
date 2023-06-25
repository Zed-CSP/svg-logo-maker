// Headers:
const inquirer = require('inquirer');
const fs = require('fs');
const constructors = require('./assets/constructors.js');



// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'logoname',
        message: 'enter 3 Logo Letters',
        validate: function (answer) {
            if (answer.length > 3) {
                return console.log("Please enter a maximum of 3 characters.");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'text-color',
        message: 'enter text color',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a color.");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'background-color',
        message: 'enter background color',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a color.");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'font',
        message: 'enter font',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a font.");
            }
            return true;
        }
    },
    {
        type: 'list',
        name: 'shape',
        message: 'enter shape',
        choices: ['square', 'circle', 'triangle'],
    },
    {
        type: 'input',
        name: 'shape-color',
        message: 'enter shape color',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a color.");
            }
            return true;
        }
    },
];

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
