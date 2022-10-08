import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({ 
    reducer: {
        
    }
})

export type AppDisatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>