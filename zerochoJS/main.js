const peopleNumber = prompt("몇 명이 참가하나요?");
const form = document.querySelector("#form");
const input = document.querySelector("#form input");
const word = document.querySelector("#word span:last-child");
const orderNumber = document.querySelector("#order span:first-child");

function addword(event) {
  event.preventDefault();
  const inputValue = input.value;
  input.value = "";
  word.innerText = inputValue;
  if (word.innerText !== "") {
  } else {
    if (true) {
      console.log("dds");
    }
  }
}

form.addEventListener("submit", addword);
