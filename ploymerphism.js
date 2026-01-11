// Polymorphism: The ability of different classes to respond to the same message (method call)
// in their own unique way.
class Animal {
  speak() { return "generic noise"; }
}

class Dog extends Animal {
  // Method Overriding: Replacing the parent method with a specific implementation
  speak() { return "woof"; }
}

class Cat extends Animal {
  speak() { return "meow"; }
}

// We can treat Dogs and Cats simply as "Animals"
const zoo = [new Animal(), new Dog(), new Cat()];

// The same method call 'speak()' produces different results depending on the object type
zoo.forEach(a => console.log(a.speak()));
// generic noise
// woof
// meow