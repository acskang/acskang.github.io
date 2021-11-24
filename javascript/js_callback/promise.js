"use strict";

// Promise is a javascript object for asynchronous operation.
// state: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
const promise = new Promise((resolve, reject) => {
  // doing some heavy work...
  console.log("doing something...");
  setTimeout(() => {
    resolve("Madie madie");
    // reject(new Error("no network"));
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// 3. Callback chain
// 4. catch for error in the chain
