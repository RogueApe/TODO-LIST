// SELECTORS
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
const todoButton = document.querySelector(".todo-button");

const checkedBtn = document.querySelector(".check-mark");
const deleteBtn = document.querySelector(".trash-mark");

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

const deleteItem = function (event) {
  // Declare variable which is an event target
  const item = event.target;

  // DELETE
  if (item.className === "trash-mark") {
    // Target the event's parent to be delete as well
    const todo = item.parentElement;
    // add fall animation
    todo.classList.add("fall");

    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  // CHECK
  if (item.className === "check-mark") {
    const todo = item.parentElement;
    // TOGGLE the class 'completed' declare in CSS
    todo.classList.toggle("completed");
  }
};

// function deleteItem(e) {
//   e.target.remove();
//   e.stopPropagation();
// }

// EVENT LISTENERS
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteItem);
