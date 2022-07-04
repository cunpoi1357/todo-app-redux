import { createSelector } from 'reselect'

const todoListSelector = state => state.todoList
const filterSearchSelector = state => state.filters.search
const filterStatusSelector = state => state.filters.status
const filterPrioritiesSelector = state => state.filters.priorities

export const todoListRemaining = createSelector(
    todoListSelector,
    filterSearchSelector,
    filterStatusSelector,
    filterPrioritiesSelector,
    (todoList, filterSearch, filterStatus, filterPriorities) =>
        todoList.filter(todo => {
            if (filterStatus === 'All') {
                return filterPriorities.length > 0
                    ? todo.name.includes(filterSearch) && filterPriorities.includes(todo.priority)
                    : todo.name.includes(filterSearch)
            }

            return (
                todo.name.includes(filterSearch) &&
                (filterStatus === 'Completed' ? todo.completed : !todo.completed) &&
                (filterPriorities.length > 0 ? filterPriorities.includes(todo.priority) : true)
            )
        })
)
