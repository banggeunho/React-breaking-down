import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from './counter';
import todoSlice from './todos';
import thunkSlice from './thunk';

const rootReducer = combineReducers({
    counter : counterSlice.reducer,
    todos : todoSlice.reducer,
    thunk : thunkSlice.reducer,
});


export default rootReducer;