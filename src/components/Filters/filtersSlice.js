const initalState = {
    search: '',
    status: 'All',
    priorites: []
}

const filterSlice = (state = initalState, action) => {
    switch (action.type) {
        case 'filters/searchChange':
            return {
                ...state,
                search: action.payload
            }
        case 'filters/statusChange':
            return {
                ...state,
                status: action.payload
            }
        case 'filters/prioritesChange':
            return {
                ...state,
                priorites: action.payload
            }
        default:
            return state
    }
}

export default filterSlice