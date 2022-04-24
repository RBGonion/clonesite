const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const testString = input[0].toLowerCase(); // 대소문자 통일한 입력값을 변수 선언
const splitTestString = testString.split(""); // 대소문자 통일한 입력값을 문자별로 분할시킴
let countArray = new Array(26).fill(0); // 문자 사용 빈도를 담을 배열 생성
let smallLetter = []; // 알파벳을 담을 배열 생성

//알파벳 문자열을 만드는 반복문
for (let i = 97; i <= 122; i++) {
  smallLetter.push(String.fromCharCode(i));
}

//countArray배열에 입력값의 알파벳 사용 수를 입력해주는 반복문
for (let i = 0; i < testString.length; i++) {
  for (let j = 0; j < smallLetter.length; j++) {
    if (testString[i] === smallLetter[j]) {
      countArray[j] += 1;
    }
  }
}

//배열에서 가장 큰 수를 찾는 반복문
//포기

let maxValue = Math.max(...countArray);

//배열에서 특정 값의 개수를 구하는 반복문
let count = 0;
for (let i = 0; i < countArray.length; i++) {
  if (countArray[i] === maxValue) {
    count++;
  }
}

//가장 큰 값이 하나인지 확인하고 하나인 경우와 둘 이상인 경우의 출력을 만드는 조건문
if (count === 1) {
  let lastIndex = smallLetter[countArray.indexOf(maxValue)];
  console.log(lastIndex.toUpperCase());
} else {
  console.log("?");
}
//countArray에서 가장 큰 수가 하나라면 해당 순서에 맞는 알파벳을 출력, 둘 이상이라면 ?를 출력

/*
for (let i = 0; i < 26; i++) {
  //smallLetterTestResult.push(smallLetter.indexOf(splitTestString[i])); // M i s s i s s i p i가 smallLetter에서 몇 번째인지 출력
  //capitalTestResult.push(capital.indexOf(splitTestString[i])); //  M i s s i s s i p i capital에서 몇 번째인지 출력
  smallLetterTestResult.push(splitTestString.indexOf(smallLetter[i])); // smallLetter에서 M i s s i s s i p i가 몇 번째인지 출력
  capitalTestResult.push(splitTestString.indexOf(capital[i])); // capital에서 M i s s i s s i p i가 몇 번째인지 출력
}
*/
