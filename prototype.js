// Prototype Pattern: Creating new objects by cloning an existing object (prototype)
// instead of creating new instances from scratch.

class Car {
    constructor(model, color) {
        this.model = model;
        this.color = color;
    }

    // The clone method returns a new instance with the same values
    clone() {
        return new Car(this.model, this.color);
    }

    details() {
        console.log(`Car: ${this.model}, Color: ${this.color}`);
    }
}

// 1. Create a prototype object
const originalCar = new Car("Tesla Model S", "Red");
originalCar.details();

// 2. Clone the prototype to create a new object
const clonedCar = originalCar.clone();
// 3. Modify the clone without affecting the original
clonedCar.color = "Black"; 

clonedCar.details();
originalCar.details(); // Original remains unchanged