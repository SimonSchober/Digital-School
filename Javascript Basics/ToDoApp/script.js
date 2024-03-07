
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");


let todos = [];

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

        //Lösche alles aus ul liste
        todoList.innerHTML = "";

        //Füge alle todos in die Liste ein
        for (let todo of todos) {
            let li = document.createElement("li");
            li.innerHTML = `<li><input type="checkbox"/>${todo}</li>`;
            todoList.appendChild(li);
        }

    }



} 