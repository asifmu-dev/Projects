const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");

const addList = () => {
  const taskText = todoInput.value;
  if (taskText !== "") {
    const todoItem = document.createElement("li");
    todoItem.innerHTML = `
        <span class="task-text">${taskText}</span>
        <span class="edit-button"><i class="fas fa-edit"></i></span>
        <span class="delete-button"><i class="fas fa-trash"></i></span>
    `;
    todoList.appendChild(todoItem);
    todoInput.value = "";
  }
};

addButton.addEventListener("click", addList);
todoList.addEventListener("click", handleClick);

function handleClick(event) {
  const clicked = event.target;
  if (clicked.classList.contains("fa-trash")) {
    const todoItem = clicked.closest("li");
    todoItem.remove();
  }
  if (clicked.classList.contains("fa-edit")) {
    const taskText = clicked.parentElement.previousElementSibling;
    const updatedText = prompt("Enter new Content text:", taskText.textContent);
    if (updatedText !== null && updatedText !== "") {
      taskText.textContent = updatedText;
    }
  }
}

addList();
