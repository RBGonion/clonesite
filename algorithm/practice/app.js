const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const T = parseInt(input[0]);
const newArray = [];
let answer = "";

for (let i = 1; i <= T; i++) {
  newArray.push(input[i].split(" ").map((item) => +item));
  const newArrayElement = newArray[i];
  console.log(newArrayElement);
  /*
  const A = newArrayElement[0];
  const B = newArrayElement[1];
  answer += A + B;
  */
}

console.log(answer);
