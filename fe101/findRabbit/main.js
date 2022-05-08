const rabbit = document.querySelector("#rabbit");
const findButton = document.querySelector("#findButton");

findButton.addEventListener("click", (e) => {
  e.preventDefault;
  let Y = rabbit.getBoundingClientRect().y;
  window.scrollTo(0, Y);
});
