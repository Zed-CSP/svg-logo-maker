// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'text',
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
        name: 'textColor',
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
        name: 'shapeColor',
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
        validate: (input) => input.trim() !== '' || 'Filename cannot be empty',
        filter: (input) => `${input.trim()}.svg`,
    },
];

module.exports = questions;