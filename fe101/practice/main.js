function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(randomNumber(3, 5));
