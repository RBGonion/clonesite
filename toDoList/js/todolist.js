const formtag = document.querySelector("#inputValueTest");
const inputtag = document.querySelector("#inputValueTest input");
const ul = document.querySelector(".formUL");

deletebutton() {
  
}

function getvalue(event) {
  event.preventDefault();

  const inputvalue = inputtag.value;
  inputtag.value = "";

  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  deletebutton();

  li.appendChild(span);
  li.appendChild(button);
  button.innerText = "X";
  ul.appendChild(li);
  span.innerText = `${inputvalue}`;
}

formtag.addEventListener("submit", getvalue);
