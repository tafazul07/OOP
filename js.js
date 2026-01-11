// Abstract Product: Defines the structure of the object we want to create
class classing{
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
}

// Concrete Product: A specific implementation of the product (unused in this specific run but available)
class classing1 extends classing{}

// Abstract Factory: Declares the interface for creating products
class AbstarctFactory{
    createPerson(name, age){
        throw new Error("not implemented")
    }
}

// Concrete Factory: Implements the creation method to produce a specific product
class PersonFactory extends AbstarctFactory{
    createPerson(name, age){
        // Returns a new instance of 'classing'
        return new classing(name, age)
    }
}

// Client Code: Uses the factory to create objects instead of using 'new' directly on the product class
const factory =  new PersonFactory();
const person = factory.createPerson("hasnain", 20);

// Verifying the created object
console.log(person.name);
console.log(person.age);