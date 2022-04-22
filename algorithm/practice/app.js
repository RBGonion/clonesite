const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let entireArray = [];
let constructorArray = [];
let nonConstArray = [];

for (let n = 1; n <= 10000; n++) {
  entireArray.push(n);
  const StringN = String(n);
  let temporaryN = n;

  for (let i = 0; i < StringN.length; i++) {
    temporaryN += Number(StringN[i]); // n + Number(String[0] + Number(String[1] + Number(String[2]... 값을 구함
  }
  constructorArray.push(temporaryN); // constructorArray에 중복인 값을 제외하고 넣어야함 그리고 배열에서 1~10000 중 없는 수를 찾아야 한다

  if (constructorArray.indexOf(entireArray[n - 1]) === -1) {
    nonConstArray.push(n);
  }
}

for (let i = 0; i < nonConstArray.length; i++) {
  console.log(nonConstArray[i]);
}
//지금 해야되는건 생성자가 있는 수랑 없는 수를 찾는 것이다
