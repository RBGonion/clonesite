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
