const inquirer = require('inquirer'); // import inquirer npm package
const fs = require('fs'); // import fs npm package
const { Square, Circle, Triangle } = require('./lib/shapes');  // import classes
const questions = require('./lib/promps');  // import questions


async () => { // this is an async function, inquirer.prompt() returns a promise, and is aggressive
    const answers = await inquirer.prompt(questions);
    const { shape, text, textColor, shapeColor, fileName } = answers;

    let logo; 
    switch(shape) {
        case 'Square':
            logo = new Square(text, textColor, shapeColor);
            break;
        case 'Circle':
            logo = new Circle(text, textColor, shapeColor);
            break;
        case 'Triangle':
            logo = new Triangle(text, textColor, shapeColor);
            break;
    }

    const svgContent = logo.generateSVG();

    fs.writeFile(`./assets/images/${answers.fileName}`, svgContent, (err) => {
        if (err) throw err;
        console.log('SVG logo has been saved!');
    });
};