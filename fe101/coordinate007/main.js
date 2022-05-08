const circle = document.querySelector(".circle");
const heightLine = document.querySelector(".heightLine");
const widthLine = document.querySelector(".widthLine");
const coordinate = document.querySelector(".coordinate");

const imgDiv = document.querySelector(".targetImg");
const targetImg = document.createElement("img");
imgDiv.append(targetImg);
targetImg.src = "img/target.png";

document.addEventListener("mousemove", (e) => {
  circle.classList.add("makecircle");
  circle.style.left = e.clientX + "px";
  circle.style.top = e.clientY + "px";

  heightLine.classList.add("makeHeightLine");
  heightLine.style.left = e.clientX + "px";

  widthLine.classList.add("makeWidthLine");
  widthLine.style.top = e.clientY + "px";

  coordinate.classList.add("inputCoordinate");
  coordinate.innerText = `${e.clientX}, ${e.clientY}`;
  coordinate.style.left = e.clientX + "px";
  coordinate.style.top = e.clientY + "px";

  targetImg.style.left = e.clientX + "px";
  targetImg.style.top = e.clientY + "px";
});
