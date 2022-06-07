import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    count : 0
}

export const counterSlice = createSlice({

    name : 'counter',

    initialState,

    reducers : {

            increment : (state) => {
                state.count += 1;
            },
            decrement : (state) => {
                state.count -= 1;
            }


    }
});

export const {increment, decrement} = counterSlice.actions;
//actions are things that are on reducers

export default counterSlice.reducer;

