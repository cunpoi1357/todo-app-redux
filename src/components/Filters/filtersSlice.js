import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        search: '',
        status: 'All',
        priorites: []
    },
    reducers: {
        searchChange(state, action) {
            state.search = action.payload
        },
        statusChange(state, action) {
            state.status = action.payload
        },
        prioritesChange(state, action) {
            state.priorites = action.payload
        }
    }
})

export default filterSlice