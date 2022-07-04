import { createSelector } from '@reduxjs/toolkit'

const todoListSeletor = state => state.todoList
const filterSearchSeletor = state => state.filters.search
const filterStatusSeletor = state => state.filters.status
const filterPrioritiesSeletor = state => state.filters.priorities

export const todoListRemaining = createSelector(
    todoListSeletor,
    filterSearchSeletor,
    filterStatusSeletor,
    filterPrioritiesSeletor,
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
