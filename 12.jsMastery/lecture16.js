// function runInDelay(callback, seconds) {
//   if (0 <= seconds) {
//     setTimeout(callback, seconds);
//   } else {
//     throw new Error("oops!");
//   }
// }

// try {
//   runInDelay(() => {
//     console.log("test3");
//   }, -3);
// } catch (error) {
//   console.log("catched error!");
// }

// // function runInDelay(seconds) {
// //   if (0 <= seconds) {
// //     setTimeout(() => {
// //       console.log("test1");
// //     }, seconds);
// //   } else {
// //     throw new Error("oops!");
// //   }
// // }

// // runInDelay(1);

// function fetchEgg(chicken) {
//   return Promise.resolve(`${chicken} => π₯`);
// }

// function fryEgg(egg) {
//   return Promise.resolve(`${egg} => π³`);
// }

// function getChicken() {
//   //return Promise.reject(new Error("μΉν¨μ κ°μ§κ³  μ¬ μ μμ!"));
//   return Promise.resolve(`πͺ΄ => π`);
// }

// // getChicken()
// //   .catch(() => "π")
// //   .then(fetchEgg)
// //   .then(fryEgg)
// //   .then(console.log);

// getChicken()
//   .catch((error) => {
//     console.log(error.name);
//     return "π";
//   })
//   .then((chicken) => {
//     return fetchEgg(chicken);
//   })
//   .then((egg) => fryEgg(egg))
//   .then((friedEgg) => console.log(friedEgg));

// //
// //
// //

// function getBanana() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("π");
//     }, 1000);
//   });
// }

// function getApple() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("π");
//     }, 3000);
//   });
// }

// function getOrange() {
//   return Promise.reject(new Error("no orange"));
// }

// //λ°λλκ³Ό μ¬κ³Όλ₯Ό κ°μ΄ κ°μ§κ³  μ€κΈ°
// //1μ΄ + 3μ΄λ‘ μ΄ 4μ΄ ν ν¨κ» μ€νλλ€
// getBanana() //
//   .then((banana) =>
//     getApple() //
//       .then((apple) => [banana, apple])
//   )
//   .then(console.log);

// // Promise.all λ³λ ¬μ μΌλ‘ νλ²μ λͺ¨λ  Promiseλ€μ μ€ν!
// Promise.all([getBanana(), getApple()]) //
//   .then((fruits) => console.log("all", fruits));

// // Promise.race μ£Όμ΄μ§ Promiseμ€μ μ μΌ λΉ¨λ¦¬ μνλκ²μ΄ μ΄κΉ!
// Promise.race([getBanana(), getApple()]) //
//   .then((fruit) => console.log("race", fruit));

// Promise.all([getBanana(), getApple(), getOrange()]) //
//   .then((fruits) => console.log("all-error", fruits))
//   .catch(console.log);

// Promise.allSettled([getBanana(), getApple(), getOrange()]) //
//   .then((fruits) => console.log("all-settle", fruits))
//   .catch(console.log);

// function fetchEgg(chicken) {
//   return Promise.resolve(`${chicken} => π₯`);
// }

// function fryEgg(egg) {
//   return Promise.resolve(`${egg} => π³`);
// }

// function getChicken() {
//   //return Promise.reject(new Error("μΉν¨μ κ°μ§κ³  μ¬ μ μμ!"));
//   return Promise.resolve(`πͺ΄ => π`);
// }

// const gender = "f";
// const name3 = "jane";
// const isAdult = true;

// if (gender === "M" || (name3 === "mike" && isAdult)) {
//   console.log("ν΅κ³Ό");
// } else {
//   console.log("λμκ°");
// }
