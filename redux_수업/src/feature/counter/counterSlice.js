import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count : 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increament: (state) =>{
            state.count += 1;
        },
        decreament: (state) =>{
            state.count -= 1;
        },
        reset: (state) =>{
            state.count = 0;
        },
        incrementByAmount:(state, action)=>{
            state.count += action.payload;
        }

    }
});

export const {increament, decreament, reset, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;