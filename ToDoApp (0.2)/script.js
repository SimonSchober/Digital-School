


// Register the service worker
if ('serviceWorker' in navigator) {
  // Wait for the 'load' event to not block other work
  window.addEventListener('load', async () => {
    // Try to register the service worker.
    try {
      const reg = await navigator.serviceWorker.register(swURL);
      console.log('Service worker registered! 😎', reg);
    } catch (err) {
      console.log('😥 Service worker registration failed: ', err);
    }
  });
}



const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");


let todos = getTodos();
drawTodosList();


//Füge alle todos in die Liste ein
for (let todo of todos) {
    let li = document.createElement("li");
    li.innerHTML = `<li><input type="checkbox"/>${todo}</li>`;
    todoList.appendChild(li);
}

//Fügt ein neues Todo zur Liste hinzu
function addTodo() {
    let newTodo = todoInput.value;

    //Füge nur Todos mit Text hinzu
    if (newTodo !== "") {

        //Füge neues Todo zur List hinzu
        todos.push(newTodo);

        //Lösche Text aus Eingabefeld
        todoInput.value = "";

        drawTodosList();
    }

}

//Löschen eines todos aus der todos liste
function deleteTodo(position) {
    todos.splice(position, 1);
    saveTodos();

    drawTodosList();
}

function deleteAll() {
 todos = [];
 saveTodos();
 drawTodosList();
}

function drawTodosList() {
    //Lösche alles aus ul liste
    todoList.innerHTML = "";

    //Füge alle todos in die Liste ein
    let position = 0;
    for (let todo of todos) {
        let li = document.createElement("li");
        li.innerHTML = `<input type="checkbox"/>
                        ${todo}
                        <button class="delete-button" onclick="deleteTodo(${position})">X</button>
                        `;
        todoList.appendChild(li);
        position++;
    }
    
}


function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  let savedTodos = localStorage.getItem("todos");
  if (savedTodos !== null) {
      console.log(JSON.parse(savedTodos))
      return JSON.parse(savedTodos);
  } else {
      return [];
  }
} 

// Execute a function when the user presses a key on the keyboard
todoInput.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        addTodo();
    }
});