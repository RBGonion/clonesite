const word = document.createElement("div");
word.innerText = `초기값`;
word.style.fontSize = `30px`;
document.body.append(word);
const form = document.createElement("form");
document.body.append(form);
const input = document.createElement("input");
form.append(input);
const input2 = document.createElement("input");
form.append(input2);
input2.id = input2;
input2.type = "submit";
const result = document.createElement("div");
document.body.append(result);

function texttrain(event) {
  event.preventDefault();
  const inputvalue = input.value;
  word.innerText = `${inputvalue}`;
  input.value = "";
  if (inputvalue[0] === word.innerText[word.innerText.length - 1]) {
    result.innerText = `딩동댕`;
  } else {
    result.innerText = `땡`;
  }
}

form.addEventListener("submit", texttrain);
