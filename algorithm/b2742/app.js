const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

a = parseInt(input[0]);

for (let i = a; i >= 1; i--) {
  console.log(i);
}
