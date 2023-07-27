import { configureStore } from "@reduxjs/toolkit";
import CountReducer from './CounterSlice.jsx';
export const store = configureStore({
    reducer: {
        count: CountReducer
    }
})