import { useAppSelector } from './../../app/hooks';
import { baseURL } from './../../shared/baseURL';
import axios from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todos } from '../../shared/interface';

const initialState: Todos[] = []

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        postTodo: (state, action: PayloadAction<Todos>) => {
            state.push(action.payload)
        }
    }
})

export const { postTodo } = todosSlice.actions
export default todosSlice.reducer