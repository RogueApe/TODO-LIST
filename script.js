// SELECTORS
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
const todoButton = document.querySelector(".todo-button");

// FUNCTIONS
const addTodo = function (event) {
  // prevent FORM from submitting
  event.preventDefault();
  // Create DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // Create li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  // New checked mark button
  const checkMarkedBtn = document.createElement("button");
  checkMarkedBtn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
  checkMarkedBtn.classList.add("check-mark");
  todoDiv.appendChild(checkMarkedBtn);
  // New trash button
  const trashBtn = document.createElement("button");
  trashBtn.innerHTML = '<i class="fa fa-minus" aria-hidden="true"></i>';
  trashBtn.classList.add("trash-mark");
  todoDiv.appendChild(trashBtn);

  // Parent of these li
  todoList.appendChild(todoDiv);

  // Clear input value
  todoInput.value = "";
};

// EVENT LISTENERS
todoButton.addEventListener("click", addTodo);
