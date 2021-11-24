"use strict";
// objects is one of the javascript's data types.
// 자바스크립트의 object는 파이썬의 dictionary 이다.

const madie = { name: "madie kang", age: 3 };

// 1. Literanls and Properties

// 2. Computed Properties

function printValue(obj, key) {
  console.log(obj[key]);
}

printValue(madie, "age");

// 3. Property value shorthand
// 4. Constructor Function

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person4 = new Person("madie", 3);
console.clear();
console.log(person4.name);

// 5. in operator: property existence check (key in obj)
console.log("name" in person4);

// 6. for..in vs for..of
// for (key in obj)
console.clear();

for (let key in person4) {
  console.log(key);
}

// for (value of iterable)
const arry = [1, 2, 3, 4, 5];

for (let value of arry) {
  console.log(value);
}
