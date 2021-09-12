import { configureStore } from '@reduxjs/toolkit'
import bicycleReducer from "../features/bicyclesSlice";

export const store = configureStore({
    reducer: {
        bicycle: bicycleReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch