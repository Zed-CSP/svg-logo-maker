// array of questions for user
const questions = [
    {
        type: 'input', // text input prompt type
        name: 'text',   // this is the key that will be used to access the user's input value
        message: 'enter 3 Logo Letters', // ask user for text
        validate: function (answer) { // validate that the input is not empty
            if (answer.length > 3) { // if the input is greater than 3 characters
                return console.log("Please enter a maximum of 3 characters."); // return an error message
            }
            return true; // otherwise, return true
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'enter text color',
        validate: function (answer) { // validate that the input is not empty
            if (answer.length < 1) { // if the input is empty
                return console.log("Please enter a color."); // return an error message
            }
            return true; // otherwise, return true
        }
    },
    {
        type: 'list', // list input prompt type
        name: 'shape', // this is the key that will be used to access the user's input value
        message: 'enter shape', // ask user for shape
        choices: ['Square', 'Circle', 'Triangle'], // array of choices
    },
    {
        type: 'input', // text input
        name: 'shapeColor', // this is the key that will be used to access the user's input value
        message: 'enter shape color', // ask user for shape color
        validate: function (answer) { // validate that the input is not empty
            if (answer.length < 1) { // if the input is empty
                return console.log("Please enter a color."); // return an error message
            }
            return true; // otherwise, return true
        }
    },
    {
        type: 'input', // text input    
        name: 'fileName', // this is the key that will be used to access the user's input value
        message: 'enter filename', // ask user for filename
        validate: (input) => input.trim() !== '' || 'Filename cannot be empty', // validate that the input is not empty
        filter: (input) => `${input.trim()}.svg`, // add .svg extension to filename
    },
];

module.exports = questions; // export questions array