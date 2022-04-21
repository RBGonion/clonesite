const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const entireTestCase = parseInt(input[0]);

solution();

function solution() {
  for (let i = 1; i < input.length; i++) {
    let inputArray = input[i].split(" ").map((x) => +x);
    let partTestCase = inputArray[0];
    let addNumber = 0;
    let everageRecord;
    let count = 0;
    let SuperiorEverage = 0;

    for (let j = 1; j < inputArray.length; j++) {
      addNumber += inputArray[j];
      everageRecord = addNumber / (inputArray.length - 1);
    }

    for (let k = 1; k < inputArray.length; k++) {
      if (inputArray[k] > everageRecord) {
        count++;
      }
      SuperiorEverage = count / (inputArray.length - 1);
    }
    console.log((SuperiorEverage * 100).toFixed(3) + "%");
  }
}
/*
let entireTestCase = Number(input[0]);

for (let i = 1; i <= entireTestCase; i++) {
  let cases = input[i].split(" ");
  let scoreCaseCount = Number(cases[0]);
  let sum = 0;
  console.log(scoreCaseCount);

  for (let j = 1; j <= scoreCaseCount; j++) {
    sum += Number(cases[j]);
  }
  let reverage = sum / scoreCaseCount;

  let highScoreStudent = 0;
  for (let k = 1; k <= scoreCaseCount; k++) {
    if (reverage < cases[k]) {
      highScoreStudent++;
    }
  }

  result = ((highScoreStudent / scoreCaseCount) * 100).toFixed(3);
  console.log(result + "%");
}
*/
