const nameSpan = document.querySelector("#infoBox span:first-child");
const orderSpan = document.querySelector("#infoBox span:last-child");
const oxBoxJs = document.querySelector("#oxBox");
const oxSpan = document.querySelector("#oxBox span");

const inputBoxInputJs = document.querySelector("#inputBox button");
const inputValue = inputBoxInputJs.value;

const name = prompt("이름을 입력하세요");
const order = prompt("몇 명인지 입력하세요");

nameSpan.innerText = name + "님";
orderSpan.innerText = order + "명";
inputValue = "test";

console.dir(inputBoxInputJs);
