const computerHand = document.querySelector("#computerHand span");
const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
const paper = document.querySelector("#paper");
const state = document.querySelector("#state");
const scroe = document.querySelector("#scroe");

computerHand.innerText = "π";
computerHand.style.fontSize = "60px";
let count = 0;

function result(event) {
  if (computerHand.innerText === event.target.innerText) {
    state.innerText = "λ¬΄μΉλΆ";
  } else if (
    (computerHand.innerText === "π" && event.target.innerText === "π") ||
    (computerHand.innerText === "π" && event.target.innerText === "π") ||
    (computerHand.innerText === "π" && event.target.innerText === "π")
  ) {
    state.innerText = "μΉλ¦¬";
    count++;
  } else if (
    (computerHand.innerText === "π" && event.target.innerText === "π") ||
    (computerHand.innerText === "π" && event.target.innerText === "π") ||
    (computerHand.innerText === "π" && event.target.innerText === "π")
  ) {
    state.innerText = "ν¨λ°°";
    count--;
    //μ elseλ₯Ό μ°λ©΄ λμνμ§ μλκ±ΈκΉ??
  }
  score.innerText = `${count}μ `;
}

function computerHandFunc() {
  if (computerHand.innerText === "π") {
    computerHand.innerText = "π";
  } else if (computerHand.innerText === "π") {
    computerHand.innerText = "π";
  } else if (computerHand.innerText === "π") {
    computerHand.innerText = "π";
  }
}

let setIntervalConst = setInterval(computerHandFunc, 50);
const intervalConstArr = [setIntervalConst];

function btnClick(event) {
  while (intervalConstArr.length !== 0) {
    clearInterval(intervalConstArr[0]);
    intervalConstArr.splice(0, 1);
    console.log(intervalConstArr);
  }
  setTimeout(() => {
    setIntervalConst = setInterval(computerHandFunc, 50);
    intervalConstArr.push(setIntervalConst);
  }, 1000);

  result(event);
}

paper.addEventListener("click", btnClick);
scissors.addEventListener("click", btnClick);
rock.addEventListener("click", btnClick);
