const formtag = document.querySelector("#inputValueTest");
const inputtag = document.querySelector("#inputValueTest input");

function getvalue(event) {
  event.preventDefault();

  const inputvalue = inputtag.value;
  inputtag.value = "";

  const li = document.createElement("li");
  const span = document.createElement("span");
  const ul = document.querySelector(".formUL");

  ul.appendChild(li);
  ul.appendChild(span);

  span.innerText = `${inputvalue}`;
}

formtag.addEventListener("submit", getvalue);
