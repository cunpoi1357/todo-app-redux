import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const todoListSlice = createSlice({
    name: 'todoList',
    initialState: [],
    reducers: {
        addTodo(state, action) {
            state.push(action.payload)
        },
        toggleTodo(state, action) {
            const currentTodo = state.find(todo => todo.id === action.payload)
            if (currentTodo)
                currentTodo.completed = !currentTodo.completed
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state = action.payload
            })
            .addCase(addNewTodo.fulfilled, (state, action) => {
                state.push(action.payload)
            })
            .addCase(updateTodo.fulfilled, (state, action) => {
                const currentTodo = state.find(todo => todo.id === action.payload.id)
                currentTodo.completed = !action.payload.completed
            })
    }
})

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const res = await fetch('/api/todos')
    const data = await res.json()
    return data.todos
})

export const addNewTodo = createAsyncThunk('todos/addNewTodo', async (newTodo) => {
    const res = await fetch('/api/todos', {
        method: 'POST',
        body: JSON.stringify(newTodo)
    })
    const data = await res.json()
    return data.todos
})

export const updateTodo = createAsyncThunk('todos/updateTodo', async (id) => {
    const res = await fetch('/api/updateTodo', {
        method: 'POST',
        body: JSON.stringify(id)
    })
    const data = await res.json()
    return data.todos
})

export default todoListSlice
