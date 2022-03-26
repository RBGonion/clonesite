const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const inputValue = loginInput.value;
const h1InnerText = greeting.innertext;

loginForm.classList.remove("hidden");
greeting.classList.remove("hidden");
greeting.innerText = `hello`;

const date = new Date();
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
