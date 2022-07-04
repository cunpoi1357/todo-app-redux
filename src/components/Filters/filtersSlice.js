import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        search: '',
        status: 'All',
        priorities: []
    },
    reducers: {
        searchChange(state, action) {
            state.search = action.payload
        },
        statusChange(state, action) {
            state.status = action.payload
        },
        prioritiesChange(state, action) {
            state.priorities = action.payload
        }
    }
})

export default filterSlice
