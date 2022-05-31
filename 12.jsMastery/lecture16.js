function runInDelay(seconds) {
  if (0 <= seconds) {
    setTimeout(() => {
      console.log("test1");
    }, seconds);
  } else {
    throw new Error("oops!");
  }
}

runInDelay(-1);
