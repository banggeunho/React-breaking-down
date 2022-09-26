import { getDefaultMiddleware } from '@reduxjs/toolkit';
import React, {useState} from 'react'
import { atom, useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil'
import {filteredTodoListState, todoListFilterState, todoListState, todoListStatsState} from './atoms';
import TodoItem from './TodoItem';


function TodoList() {
  const todoList = useRecoilValue(todoListState);
  const filteredTodoList = useRecoilValue(filteredTodoListState);
  console.log(filteredTodoList);
  return (
    <>
    <TodoListStats />
    <TodoListFilters />
    <TodoItemCreator />

    {filteredTodoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
    ))}
    </>
  )
}

function TodoListStats() {
    const {
        totalNum,
        totalCompletedNum,
        totalUncompletedNum,
        percentCompleted,
    } = useRecoilValue(todoListStatsState);

    const formattedPercentCompleted = Math.round(percentCompleted * 100);

    return (
        <ul>
            <li>Total items: {totalNum}</li>
            <li>Items completed: {totalCompletedNum}</li>
            <li>Items not completed:{totalUncompletedNum} {totalUncompletedNum}</li>
            <li>Percent completed: {formattedPercentCompleted}</li>
        </ul>
    );
}

function TodoListFilters() {
    const [filter, setFilter] = useRecoilState(todoListFilterState);

    const updateFilter = (e) => {
        setFilter(e.target.value);
    };

    return (
    <>
        Filter:
        <select value={filter} onChange={updateFilter}>
            <option value="Show All">All</option>
            <option value="Show Completed">Completed</option>
            <option value="Show Uncompleted">Uncompleted</option>
        </select>
    </>
    );
}

function TodoItemCreator() {
    const [inputValue, setInputValue] = useState('');
    const setTodoList = useSetRecoilState(todoListState);

    const addItem = () => {
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: getId(),
                text: inputValue,
                isComplete: false,
            },
        ]);
        setInputValue('');
    }

    const onChange = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <div>
            <input type="text" value={inputValue} onChange={onChange} />
            <button onClick={addItem}>Add</button>
        </div>
    )
}

let id = 0;
function getId(){
    return id++;
}

export default TodoList