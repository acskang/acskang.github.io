"use strict";
// Javascript is synchronous.
// Execute the code block by order after hoisting.
// Hoisting: var, function declaration

console.log(1);
setTimeout(() => console.log(2), 2000);
console.log(3);

function immediately(print) {
  print();
}

immediately(() => console.log("나는 왕이다!"));

function withDelay(print, time) {
  setTimeout(print, time);
}

withDelay(() => console.log("async callback"), 2000);
