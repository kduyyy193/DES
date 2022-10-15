import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feartures/User/userSlice";
import modalReducer from "../feartures/Modal/modalSlice"
import todosReducer from "../feartures/Todos/todosSlice"
export const store = configureStore({
    reducer: {
        user: userReducer,
        modal: modalReducer,
        todos: todosReducer
    }
})

export type AppDisatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>