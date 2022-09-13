import React, { useState } from 'react';

// 컴포넌트 최적화를 위하여 React.memo를 사용합니다
const TodoItem = React.memo(function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <li
      style={{ textDecoration: todo.done ? 'line-through' : 'none'
                , color : todo.done ? 'grey' : 'black' }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
      <button onClick={()=> (onRemove(todo.id))}> 삭제 </button>
    </li>
  );
});

// 컴포넌트 최적화를 위하여 React.memo를 사용합니다
const TodoList = React.memo(function TodoList({ todos, onToggle, onRemove }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove}/>
      ))}
    </ul>
  );
});

function Todos({ todos, onCreate, onRemove, onToggle }) {
    // 리덕스를 사용한다고 해서 모든 상태를 리덕스에서 관리해야하는 것은 아닙니다.
    const [text, setText] = useState('');
    const onChange = e => setText(e.target.value);
    const onSubmit = e => {
        e.preventDefault(); // Submit 이벤트 발생했을 때 새로고침 방지
        onCreate(text);
        setText(''); // 인풋 초기화
    };

    return (
        <div>
        <form onSubmit={onSubmit}>
            <input
            value={text}
            placeholder="이름을 입력하세요."
            onChange={onChange}
            />
            <button type="submit">등록</button>
        </form>
        <TodoList todos={todos} onToggle={onToggle} onRemove = {onRemove} />
        </div>
    );
}

export default Todos;