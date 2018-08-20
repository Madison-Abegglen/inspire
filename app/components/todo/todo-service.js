import Todo from "../../models/Todo.js"

const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/madisonabegglen/todos/',
	timeout: 3000
});

function logError(e) {
	console.log(e)
}


let todoList = ''

export default class TodoService {

	getTodos(getTodos) {
		console.log("Getting the Todo List")
		todoApi.get('')
			.then((res) => { // <-- WHY IS THIS IMPORTANT???
				getTodos(res.data.data)
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

	toggleTodoStatus(todoId, status, getTodos) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList

		var todo = {
		} ///MODIFY THIS LINE
		if (status == 'false') {
			todo.completed = true
		} else {
			todo.completed = false
		}
		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
		todoApi.put(todoId, todo)
			.then(function (res) {
				//DO YOU WANT TO DO ANYTHING WITH THIS?
			})
			.catch(logError)

		let timeout = setTimeout(getTodos, 750)
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
