// Headers:
const inquirer = require('inquirer');
const fs = require('fs');

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
