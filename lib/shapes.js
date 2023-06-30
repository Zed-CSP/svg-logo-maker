class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    }

    setText(text) {
        this.text = text;
    }

    generateSVG() {
        throw new Error('This method should be overridden in a child class');
    }
}

class Square extends Shape {
    generateSVG() {
        return `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <rect width="60" height="60" x="20" y="20" stroke="none" stroke-width="4" fill="${this.shapeColor}"/>
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="20" fill="${this.textColor}">${this.text}</text>
            </svg>
        `;
    }
}

class Circle extends Shape {
    generateSVG() {
        return `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="none" stroke-width="4" fill="${this.shapeColor}" />
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="20" fill="${this.textColor}">${this.text}</text>
            </svg>
        `;
    }
}

class Triangle extends Shape {
    generateSVG() {
        return `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <polygon points="50,10 10,90 90,90" stroke="none" stroke-width="4" fill="${this.shapeColor}"/>
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="20" fill="${this.textColor}">${this.text}</text>
            </svg>
        `;
    }
}

module.exports = { Square, Circle, Triangle };
