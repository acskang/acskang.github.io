"use strict";

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];
const fruits = ["⚽", "🎉"];
console.log(fruits.length);

for (let fruit of fruits) {
  console.log(fruit);
}

// 3. forEach
fruits.forEach((물건, index) => console.log(물건, index));

// 4. Addition, Deletion, Copy
// add
fruits.push("🖼");

// delete
fruits.pop("");

// unshift: add an item to the beginning
fruits.unshift("🍓", "🍌");
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();

// splice
// combine two arrays: concat

// Useful array api
// join and split
// splice and slice

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

{
  const result = students.find(student => student.score === 90);
  console.log(result);
}

console.clear();
{
  const result = students.filter(student => student.enrolled);
  console.log(result);
}

{
  const result = students //
    .map(student => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
}

// some and every: check if there is a student with the score lower than 50
// compute student's average score: reduce
