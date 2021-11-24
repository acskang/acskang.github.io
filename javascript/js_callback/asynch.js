"use strict";

// asynch & await

// 1. asynch
async function fetchUser() {
  // do network request in 10 secs...
  return "madie";
}

const user = fetchUser();
user.then(console.log);

// 2. await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(5000);
  return "🍎";
}

async function getBanana() {
  await delay(3000);
  return "🍌";
}

// async function pickFruits() {
//   const applePromise = getApple();
//   const bananaPromise = getBanana();
//   const apple = await applePromise;
//   const banana = await bananaPromise;
//   let time = new Date();
//   return `${apple} + ${banana} + ${time}`;
// }

// console.log(new Date());
// pickFruits().then(console.log);

// 3. useful promise APIs: Promise.All(), Promise.race()
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then(fruits =>
    fruits.join("+")
  );
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
