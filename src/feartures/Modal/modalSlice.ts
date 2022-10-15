import {createSlice, PayloadAction }from '@reduxjs/toolkit';

interface ModalStatus {
    Open: boolean
}

const initialState: ModalStatus = { 
    Open: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        OpenModal: (state, action: PayloadAction<boolean>) => {
            state.Open = action.payload
        }
    }
})

export const { OpenModal } = modalSlice.actions
export default modalSlice.reducer