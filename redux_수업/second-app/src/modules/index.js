import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from './counter';
import todoSlice from './todos';

const rootReducer = combineReducers({
    counter : counterSlice.reducer,
    todos : todoSlice.reducer,
});


export default rootReducer;