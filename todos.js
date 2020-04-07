var listElement = document.getElementById('lista');
var inputElement = document.getElementById('entrada');
var buttonElement = document.getElementById('button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
    listElement.innerHTML = "";

    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo + ' ');

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href','#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onClick', 'deleteTodo('+ pos +')')
        var linktext = document.createTextNode('Excluir');

        linkElement.appendChild(linktext);
        
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value;
    console.log(todoText);

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveTostorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos,1);
    renderTodos();
    saveTostorage();
}

function saveTostorage(){
    localStorage.setItem('list_todos',JSON.stringify(todos));
}

