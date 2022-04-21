import filtersSlice from "../components/Filters/filtersSlice"
import todoListSlice from "../components/TodoList/todoListSlice"
import { combineReducers } from 'redux'


// const rootReducer = (state = {}, action) => ({
//     filters: filtersSlice(state.filters, action),
//     todoList: todoListSlice(state.todoList, action)
// })


const rootReducer = combineReducers({
    filters: filtersSlice,
    todoList: todoListSlice
})


export default rootReducer