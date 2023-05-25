class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.metaData = '';
        }
  
        setColor(shapeColor) {
            this.shapeColor = shapeColor;
        }
  
        setText(text) {
            this.text = text;
        }
    }

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
        this.shape = 'square';
    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
        this.shape = 'circle';
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
        this.shape = 'triangle';
    }
}

module.exports = {
    Square,
    Circle,
    Triangle
}

