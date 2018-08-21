import TodoService from "./todo-service.js";

var todoService = new TodoService

function getTodos() {
	todoService.getTodos(draw)
}

function draw(todos) {
	console.log(todos)
	let template = `
	<div>
	totalTodos: ${todos.length}
	</div>
	`
	for (let i = 0; i < todos.length; i++) {
		const todo = todos[i]
		if (todo.completed == false) {
			template += `
				<div>
				<input type="checkbox" id="todo-check" onclick="app.controllers.todoController.toggleTodoStatus('${todo._id}')" />
				<p>${todo.description}</p>
				<button type="button" onclick="app.controllers.todoController.removeTodo('${todo._id}')">Delete</button>
				</div>
				`
		} else {
			template += `
				<div>
				<input type="checkbox" checked id="todo-check" onclick="app.controllers.todoController.toggleTodoStatus('${todo._id}')"/>
				<p>${todo.description}</p>
				<button type="button" onclick="app.controllers.todoController.removeTodo('${todo._id}')">Delete</button>
				</div>
				`

		}
	}

	document.getElementById("todo-list").innerHTML = template;

	//WHAT IS MY PURPOSE?
	//BUILD YOUR TODO TEMPLATE HERE
	//DONT FORGET TO LOOP
}


export default class TodoController {
	constructor() {
		getTodos()
	}


	addTodoFromForm(e) {
		e.preventDefault()
		var form = e.target
		var todo = {
			description: form.description.value
		}
		todoService.addTodo(todo, getTodos)
	}

	toggleTodoStatus(todoId) {
		console.log('Trigger')
		todoService.toggleTodoStatus(todoId, getTodos)
	}

	removeTodo(todoId) {
		todoService.removeTodo(todoId, getTodos)
	}



}
