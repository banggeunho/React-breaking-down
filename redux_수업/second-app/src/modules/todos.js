
import { createSlice } from "@reduxjs/toolkit";

const ADD_TODO = 'todos/ADD_TODO';
const DEL_TODO = 'todos/DEL_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

let nextId = 1;

export const addTodo = text => (
    {
        type: ADD_TODO,
        todo: {
            id: nextId++,
            text: text,
            done: false,
        }
    }
);

export const toggleTodo = id => (
    {
        type:TOGGLE_TODO,
        id: id,
    }
);

export const delTodo = id => (
    {
        type:DEL_TODO,
        id: id,
    }
)

// const initialState = [];

// export default function todos(state = initialState, action){
//     switch (action.type){
//         case ADD_TODO:
//             if (state.find((todo) => todo.text === action.todo.text)) {
//                 alert(action.todo.text+'와 같은 이름이 존재합니다.')
//                 return state;
//             }

//             return state.concat(action.todo);
//         case TOGGLE_TODO:
//             console.log(state)
//             return state.map(todo => todo.id === action.id ? {...todo, done: !todo.done}: todo);

//         case DEL_TODO:
//             return state.filter(
//                 todo => todo.id !== action.id
//             );
//         default:
//             return state;
//     }
// }

const todoSlice = createSlice({
    name:'todos',
    initialState: [],
    reducers:{
        ADD_TODO:(state, action) => {
            if (state.find((todo) => todo.text === action.todo.text)) {
                alert(action.todo.text+'와 같은 이름이 존재합니다.')
                return state;
            }
            return state.concat(action.todo);
        },
        TOGGLE_TODO:(state, action) => {
            return state.map(todo => todo.id === action.id ? {...todo, done: !todo.done}: todo);
        },
        DEL_TODO:(state, action) => {
            return state.filter(todo => todo.id !== action.id)
        }
    }
})

export default todoSlice;