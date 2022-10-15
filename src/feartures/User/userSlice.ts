import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    name: string ,
    token: string ,

}

const initialState: UserState = {
    name: '',
    token: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload
        },
        removeToken: (state) => {
            state.token = ''
        },
        getNameUser: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        }
    }
})

export const { getToken, removeToken, getNameUser} = userSlice.actions
export default userSlice.reducer