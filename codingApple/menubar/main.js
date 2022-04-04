const Xbutton = document.querySelector("header span:last-child");

const idnavdisplay = document.querySelector("#idnav");

const targetElm = document.getElementById("idnav");

const targetDisplay =
  targetElm && window.getComputedStyle(targetElm).getPropertyValue("display");

function navAppear() {
  if (targetDisplay === "flex" || "") {
    idnavdisplay.style.display = "none";
  } else {
    idnavdisplay.style.display = "flex";
  }
}
Xbutton.addEventListener("click", navAppear);
