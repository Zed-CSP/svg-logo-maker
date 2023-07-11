class Shape { // this is a parent class
    constructor(text, textColor, shapeColor) { // this is a constructor
        this.text = text; // this is a property
        this.textColor = textColor; // this is a property
        this.shapeColor = shapeColor; // this is a property
    }

    setColor(shapeColor) {
        this.shapeColor = shapeColor; // this is a setter
    }

    setText(text) {
        this.text = text; // this is a setter
    }

    generateSVG() { // this is a parent method, it will be overridden in a child class
        throw new Error('This method should be overridden in a child class'); // this is a safeguard
    }
}

class Square extends Shape { // this is a child class
    generateSVG() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200">
            <rect width="60" height="60" x="20" y="20" fill="${this.shapeColor}"/> 
            <text x="50" y="60" text-anchor="middle" font-size="50" fill="${this.textColor}">${this.text}</text>
        </svg>
    `;
    }
}

class Circle extends Shape { // this is a child class
    generateSVG() { // this is a method
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200">
            <circle cx="50" cy="50" r="40" fill="${this.shapeColor}" /> 
            <text x="50" y="60" text-anchor="middle" font-size="50" fill="${this.textColor}">${this.text}</text>
        </svg>
    `;
    }
}

class Triangle extends Shape { // this is a child class
    generateSVG() { // this is a method
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200">
            <polygon points="50,10 90,90 10,90" fill="${this.shapeColor}"/>
            <text x="50" y="60" text-anchor="middle" font-size="50" fill="${this.textColor}">${this.text}</text>
        </svg>
    `;
    } 
}

module.exports = { Square, Circle, Triangle }; // export classes
