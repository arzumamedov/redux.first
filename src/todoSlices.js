import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        value: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.value.push(action.payload)
        },
        removeTodo: (state, action) => {
            const index = state.value.findIndex((todo) => todo.id === action.payload)
            if (index !== -1) {
                state.value.splice(index, 1)
            }
        }


    },
})

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer