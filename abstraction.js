// Abstraction: Hiding complex implementation details and showing only the necessary features of an object.
class Shape {
    constructor(name) {
        // Simulating an Abstract Class: Prevents direct instantiation
        if (this.constructor === Shape) {
            throw new Error("Abstract class 'Shape' cannot be instantiated directly.");
        }
        this.name = name;
    }

    // Abstract method: must be implemented by subclasses
    calculateArea() {
        throw new Error("Method 'calculateArea()' must be implemented.");
    }

    // Common method for all shapes
    describe() {
        console.log(`I am a ${this.name}.`);
    }
}

// Concrete Class: Implements the abstract details
class Circle extends Shape {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }

    // Implementation of the abstract method
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

const myCircle = new Circle(5);
myCircle.describe();
console.log(`Area: ${myCircle.calculateArea().toFixed(2)}`);

// const genericShape = new Shape("Generic"); // This would throw an Error