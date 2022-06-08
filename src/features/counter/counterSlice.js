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
            },
            resetState : (state) => {
                state.count = 0;
            },
            incrementByAmount : (state,action) => {
                state.count += action.payload;
            }



    }
});

export const {increment, decrement, resetState, incrementByAmount} = counterSlice.actions;
//actions are things that are on reducers

export default counterSlice.reducer;

