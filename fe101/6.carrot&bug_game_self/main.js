const body = document.querySelector("body");
const start_stop = document.querySelector("#start_stop");
const startBtn = document.querySelector(".start");
const itemSection = document.querySelector("#itemSection");
const alertWindow = document.querySelector("#alertWindow");
const time = document.querySelector("time");

const bodyRect = body.getBoundingClientRect();
const bodyRectHeight = bodyRect.height;
const bodyRectWidth = bodyRect.width;
const bodyHalfWidth = bodyRect.width / 2;
const bodyHalfHeight = bodyRect.height / 2;

function startTimer() {}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function createItem() {
  for (let i = 0; i < 10; i++) {
    const carrot = document.createElement("img");
    carrot.setAttribute("src", "img/carrot.png");
    carrot.style.position = "absolute";
    let carrotRect = carrot.getBoundingClientRect();
    let randomCarrotTop = randomIntFromInterval(
      bodyHalfHeight,
      bodyRectHeight - 80
    );
    let randomCrrotLeft = randomIntFromInterval(0, bodyRectWidth - 80);
    carrot.style.top = `${randomCarrotTop}px`;
    carrot.style.left = `${randomCrrotLeft}px`;
    itemSection.append(carrot);

    const bug = document.createElement("img");
    bug.setAttribute("src", "img/bug.png");
    bug.style.position = "absolute";
    let bugRect = bug.getBoundingClientRect();
    let randomBugTop = randomIntFromInterval(
      bodyHalfHeight,
      bodyRectHeight - 80
    );
    let randomBugLeft = randomIntFromInterval(0, bodyRectWidth - 80);
    bug.style.top = randomBugTop + "px";
    bug.style.left = randomBugLeft + "px";
    itemSection.append(bug);
  }
}

function clickStopBtn() {
  alertWindow.style.display = "flex";
}

function creatStopBtn() {
  const stopButton = document.createElement("button");
  stopButton.setAttribute("class", "start");
  start_stop.append(stopButton);
  stopButton.innerHTML = `
  <i class="fa-solid fa-stop"></i>
  `;
  stopButton.addEventListener("click", clickStopBtn);
}

function start() {
  startBtn.remove();
  creatStopBtn();
  createItem();
  // startTimer();
  // startCounter();
}

startBtn.addEventListener("click", start);

// const main = document.querySelector("main");
// const startButton = document.querySelector("#start");
// const carrotbug = document.querySelector(".carrotbug");
// startButton.innerText = "start";

// function Delete() {
//   console.log("dd");
// }

// function onStart() {
//   startButton.remove();

//   for (let i = 1; i < 10; i++) {
//     const carrotImg = document.createElement("div");
//     carrotImg.innerHTML = `
//     <img class="carrotbug" id="carrot" src="img/carrot.png" alt="carrot" />`;
//     main.append(carrotImg);

//     const bugImg = document.createElement("div");
//     bugImg.innerHTML = `
//     <img class="carrotbug" id="bug" src="img/bug.png" alt="bug" />`;
//     main.append(bugImg);
//   }
//   carrotbug.addEventListener("click", Delete);
// }

// startButton.addEventListener("click", onStart);
