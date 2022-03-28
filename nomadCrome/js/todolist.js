const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "👻";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault(); // 기본동작 제어
  const newTodo = toDoInput.value; // 변수를 지정해 줌으로써 값을 메모리에 저장한다
  toDoInput.value = ""; // input의 입력칸을 비운다
  const newTodoOBJ = {
    text: newTodo,
    id: Date.now(),
  }; // 앞서 저장한 입력값에 고유ID를 부여하고 객체로 묶어서 저장한다
  toDos.push(newTodoOBJ); // 객체로 묶은 값을 빈 배열에 저장
  paintToDo(newTodoOBJ); //인자가 newTodoOB인 paintToDo함수 실행
  saveToDos(); // 함수 실행
}

toDoForm.addEventListener("submit", handleToDoSubmit); // submit시 이벤트 발동

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
