import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    count: 0
}
export const CountSlice = createSlice({
    name: "count",
    initialState,
    reducers: {
        increment: (state) => {
            if (state.count < 12) {
                state.count = state.count + 1;
            }
        },
        decrement: (state) => {
            if (state.count > 0) {
                state.count = state.count - 1;
            }
        }
    }
})
export const { increment, decrement } = CountSlice.actions;
export default CountSlice.reducer;