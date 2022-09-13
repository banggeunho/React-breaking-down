import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addTodo, toggleTodo, delTodo} from '../modules/todos'
import Todos from '../components/Todos';


function TodosContianer(){

    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const onCreate = text => dispatch(addTodo(text));
    const onRemove = id => dispatch(delTodo(id));
    const onToggle = useCallback(id => dispatch(toggleTodo(id)), [dispatch]);


    return <Todos todos = {todos}
                    onCreate = {onCreate}
                    onRemove = {onRemove}
                    onToggle = {onToggle} />;
}

export default TodosContianer;