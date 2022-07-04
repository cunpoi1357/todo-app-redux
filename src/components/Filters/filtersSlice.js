const initalState = {
    search: '',
    status: 'All',
    priorities: []
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
        case 'filters/prioritiesChange':
            return {
                ...state,
                priorities: action.payload
            }
        default:
            return state
    }
}

export default filterSlice
