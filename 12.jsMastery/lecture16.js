function runInDelay(callback, seconds) {
  if (0 <= seconds) {
    setTimeout(callback, seconds);
  } else {
    throw new Error("oops!");
  }
}

try {
  runInDelay(() => {
    console.log("test3");
  }, -3);
} catch (error) {
  console.log("catched error!");
}

// function runInDelay(seconds) {
//   if (0 <= seconds) {
//     setTimeout(() => {
//       console.log("test1");
//     }, seconds);
//   } else {
//     throw new Error("oops!");
//   }
// }

// runInDelay(1);

function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  //return Promise.reject(new Error("치킨을 가지고 올 수 없음!"));
  return Promise.resolve(`🪴 => 🐓`);
}

// getChicken()
//   .catch(() => "🐔")
//   .then(fetchEgg)
//   .then(fryEgg)
//   .then(console.log);

getChicken()
  .catch((error) => {
    console.log(error.name);
    return "🐔";
  })
  .then((chicken) => {
    return fetchEgg(chicken);
  })
  .then((egg) => fryEgg(egg))
  .then((friedEgg) => console.log(friedEgg));

//
//
//

function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🍌");
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🍎");
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error("no orange"));
}

//바나나과 사과를 같이 가지고 오기
//1초 + 3초로 총 4초 후 함께 실행된다
getBanana() //
  .then((banana) =>
    getApple() //
      .then((apple) => [banana, apple])
  )
  .then(console.log);

// Promise.all 병렬적으로 한번에 모든 Promise들을 실행!
Promise.all([getBanana(), getApple()]) //
  .then((fruits) => console.log("all", fruits));

// Promise.race 주어진 Promise중에 제일 빨리 수행된것이 이김!
Promise.race([getBanana(), getApple()]) //
  .then((fruit) => console.log("race", fruit));

Promise.all([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log("all-error", fruits))
  .catch(console.log);

Promise.allSettled([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log("all-settle", fruits))
  .catch(console.log);
