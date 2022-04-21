import { createSelector } from 'reselect'

const todoListSeletor = state => state.todoList
const filterSearchSeletor = state => state.filters.search
const filterStatusSeletor = state => state.filters.status
const filterPrioritesSeletor = state => state.filters.priorites


export const todoListRemaining = createSelector(
    todoListSeletor,
    filterSearchSeletor,
    filterStatusSeletor,
    filterPrioritesSeletor,
    (todoList, filterSearch, filterStatus, filterPriorites) => todoList.filter(todo => {
        if (filterStatus === 'All') {
            return (
                filterPriorites.length > 0
                    ? todo.name.includes(filterSearch) && filterPriorites.includes(todo.priority)
                    : todo.name.includes(filterSearch)
            )
        }

        return (
            todo.name.includes(filterSearch) &&
            (filterStatus === 'Completed' ? todo.completed : !todo.completed)
            && (filterPriorites.length > 0 ? filterPriorites.includes(todo.priority) : true)
        )
    })
)
