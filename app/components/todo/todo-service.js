import Todo from "../../models/Todo.js"

const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/madisonabegglen/todos/',
	timeout: 3000
});

function logError(e) {
	console.log(e)
}


let todoList = []

export default class TodoService {

	getTodos(draw) {
		console.log("Getting the Todo List")
		todoApi.get('')
			.then((res) => {
				todoList = res.data.data
				draw(res.data.data)
			})
			.catch(logError)
	}

	addTodo(todo, getTodos) {
		// WHAT IS THIS FOR???
		todoApi.post('', todo)
			.then(function (res) {
				console.log(res)
				getTodos()
				// <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
			})
			.catch(logError)
	}

	toggleTodoStatus(todoId, getTodos) {
		var todo = todoList.find(t => t._id == todoId)
		todo.completed = !todo.completed
		todoApi.put(todoId, todo)
			.then(function (res) {
				getTodos()
			})
			.catch(logError)
	}

	removeTodo(todoId, getTodos) {
		// Umm this one is on you to write.... The method is a DELETE
		console.log("remove todo")
		todoApi.delete(todoId)
			.then(res => {
				getTodos()
			})

	}

}
