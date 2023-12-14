import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../src/counter/counterSlice'
import todoReducer from '../src/todoSlices'

export default configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer,

    },
})