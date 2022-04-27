const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

/*
input = +input;

for (let i = 0; i < input; i++) {
  let answer = "";
  for (let j = 0; j <= i; j++) {
    answer += "*";
  }
  console.log(answer);
}
*/
