
const initalState = [
    { id: 1, name: 'Learn React', priority: 'High', completed: false },
    { id: 2, name: 'Learn Redux', priority: 'Medium', completed: true },
    { id: 3, name: 'Learn JavaScript', priority: 'Low', completed: false }
]

const todoListSlice = (state = initalState, action) => {
    switch (action.type) {
        case 'todoList/addToDo':
            return [
                ...state,
                action.payload
            ]
        case 'todoList/toggleTodo':
            const newTodoList = [...state]
            const currentTodo = newTodoList.find(todo => todo.id === action.payload)
            currentTodo.completed = !currentTodo.completed
            return newTodoList
        default:
            return state
    }
}

export default todoListSlice