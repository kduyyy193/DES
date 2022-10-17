
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todos } from '../../shared/interface';

const initialState: Todos[] = []

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        postTodo: (state, action: PayloadAction<Todos>) => {
            state.unshift(action.payload)
        },
        getAllTodo: (state, action: PayloadAction<Todos[]>) => {

            return [...action.payload]
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            const todo = state.find((todo) => todo.id === action.payload);
            state.splice(state.indexOf(todo as Todos), 1)
        }
    }
})

export const { postTodo, getAllTodo, deleteTodo } = todosSlice.actions
export default todosSlice.reducer