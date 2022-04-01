const Xbutton = document.querySelector("header span:last-child");

const idnavdisplay = document.querySelector("#idnav");

function navAppear() {
  if (idnavdisplay.style.display === "flex") {
    console.log("true");
  } else {
    console.log("false");
  }
}
Xbutton.addEventListener("click", navAppear);
