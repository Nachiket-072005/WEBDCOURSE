// This file is used to create a Person object with a name and age property and a talk method that logs a message to the console.
// The Person object is created using a factory function called PersonMaker.
// The Person object is then used to create two Person objects, person1 and person2.
// The talk method of person1 is called.
// The output of the talk method is logged to the console.

function PersonMaker(name, age) {
  const Person = {
    name: name,
    age: age,
    talk() {
      console.log(`Hello, my name is ${this.name}`);
    },
  };
  return Person;
}

let person1 = PersonMaker("John", 30);
let person2 = PersonMaker("Jane", 25);

person1.talk(); // Hello, my name is John
person2.talk(); // Hello, my name is Jane

// Constructor function example for creating objects in JavaScript.
// Do not use arrow functions for constructor functions.
// Dosen't return anything. & Starts with a capital letter.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.talk = function () {
  console.log(`Hello, my name is ${this.name}`);
};

let person3 = new Person("Alice", 35);
let person4 = new Person("Bob", 40);

// Class example for creating objects in JavaScript. (ES6)
// Class is a syntactic sugar for constructor functions.
// Use class keyword to define a class.
// Use constructor method to initialize an object.
// Use this keyword to refer to the current object.
// Use methods to define functions inside a class.
// Use new keyword to create an object from a class.
// Use extends keyword to create a subclass. (Inheritance)
// Use super method to call the constructor of the parent class.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  talk() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

let person5 = new Person("Eve", 45);
let person6 = new Person("Frank", 50);

class Student extends Person {
  constructor(name, age, marks) {
    super(name, age);
    this.marks = marks;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and my marks are ${this.marks}`
    );
  }
}

let student1 = new Student("Grace", 55, 90);
let student2 = new Student("Henry", 60, 95);

student1.talk(); // Hello, my name is Grace
student1.greet(); // Hello, my name is Grace and my marks are 90
student2.talk(); // Hello, my name is Henry
student2.greet(); // Hello, my name is Henry and my marks are 95
