import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    status: 'Welcome'
};

const asyncUpFetch = createAsyncThunk(
    'thunkSlice/asyncUpFetch',
    async () => {
        const resp = await fetch('https://api.countapi.xyz/hit/namespace/key');
        const data = await resp.json();
        return data.value;
    }
)


const thunkSlice =  createSlice({
    name : 'thunkSlice',
    initialState : initialState,
    reducers:{
        up:(state, action) => {
            // console.log(state.value, action.payload);
            state.value = state.value + action.payload;
        }
    },
    extraReducers : (builder) => { // 비동기 작업은 action creator를 자동으로 만들지 못해서 extra 사용
                                    // reducers는 aciton creator를 자동으로 만들어 줌.
        builder.addCase(asyncUpFetch.pending, (state,action) => {
            state.status = 'Loading';
        })
        builder.addCase(asyncUpFetch.fulfilled, (state,action) => {
            state.value = action.payload; // payload는 약속된 값
            state.status = 'complete';
        })
        builder.addCase(asyncUpFetch.rejected, (state,action) => {
            state.status = 'fail';
        })
    }
});

export default thunkSlice;
export const {up} = thunkSlice.actions;
export {asyncUpFetch}

