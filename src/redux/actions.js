export const addTodo = todo => ({
    type: 'todoList/addToDo',
    payload: todo
})

export const toggleTodo = id => ({
    type: 'todoList/toggleTodo',
    payload: id
})

export const searchChange = value => ({
    type: 'filters/searchChange',
    payload: value
})

export const statusChange = value => ({
    type: 'filters/statusChange',
    payload: value
})

export const prioritiesChange = value => ({
    type: 'filters/prioritiesChange',
    payload: value
})
