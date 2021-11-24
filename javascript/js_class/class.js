"use strict";
// Object-oriented programming
// class: template
// object: instance of a class
// Javascript classed
// - intrroduced in ES6
// - syntactical sugar over prototype-based inheritance

class Person {
  // constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

// create objects
const madie = new Person("madie kang", 3);
console.log(madie.name);
console.log(madie.age);
madie.speak();

// 2. getter and setter
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get age() {
    return this._age;
  }
  set age(value) {
    // if (value < 0) {
    //   throw Error("age can not be negative");
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Steve", "Job", -3);
console.log(user1.age);

// 3. Fields (public, private)

class Experiment {
  publicField = 2;
  #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
class Article {
  static publisher = "dream coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }
  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);

console.log(article1.articleNumber);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log("🔺");
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
  toString() {
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
const triangle = new Triangle(20, 20, "red");

console.log(rectangle.getArea());
console.log(triangle.getArea());
triangle.draw();

// 6. Class checking: instanceof
console.log(rectangle instanceof Rectangle);
console.log(rectangle instanceof Object);
console.log(triangle.toString());
