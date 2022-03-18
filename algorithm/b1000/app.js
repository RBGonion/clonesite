const fs = require("fs");
const filepath = process.platform === "linux" ? "dex/stdin" : "./input.txt";
let input = fs.readfiledSync(filepath).toString().split("\n");

input = input[0];
input = input.split(" ");
console.log(input);

solution();

function solution() {}
