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
        type: 'list',
        name: 'shape',
        message: 'enter shape',
        choices: ['Square', 'Circle', 'Triangle'],
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
    {
        type: 'input',
        name: 'fileName',
        message: 'enter filename',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a filename.");
            }
            return true;
        }
    }
];

module.exports = questions;