import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';


const App = () => {
  // useState를 사용하여 state 선언
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'VSCode의 환경체크하기',
      checked: true,
    },
    {
      id: 2,
      text: '도커이미지 생성 및 배포하기',
      checked: true,
    },
    {
      id: 3,
      text: '코드의 생산성 높이기 훈련',
      checked: false,
    },
  ]);

  // 고유 값으로 사용 될 id
  // ref 를 사용하여 변수 담기
  // rendering이 되어도 useRef는 초기화되지 않고 이전 값을 계속 유지한다.
  // useRef(this.current에 값을 저장해줍니다.) nextId.current를 이용하여 호출.
  const nextId = useRef(4);

  // 함수들을 선언 모든 함수들은 todos의 값이 변경됐을 시에만 함수를 초기화한다.
  // setTodos를 호출시킴 -> state를 변경하는 것이기 떄문에 -> 다시 렌더링 -> view udpate
  // todos가 바꼈을때만 onInsert함수를 선언한다.
  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      console.log('onInsert 호출');
      setTodos(todos.concat(todo));
      nextId.current += 1; // nextId 1 씩 더하기
    },
    [todos],
  );

  // todos가 바꼈을때만 onRemove함수 선언.
  const onRemove = useCallback(
    // prop으로 받은 id를 가지고 filter를 하여 해당 id를 가진 객체를 제외한 나머지만
    // setTodos를 활용하여 state를 변경해줍니다. 그리고 state를 변경했기 때문에
    // 다시 렌더링~
    id => {
      console.log('onRemove 호출');
      setTodos(todos.filter(todo => todo.id !== id));
      // console.log(JSON.stringify(todos));
    },
    [todos],
  );
  
  // todos가 바꼈을때만 onToggle함수 선언.
  const onToggle = useCallback(
    id => {
      // prop으로 받은 id를 이용하여 todos들을 살펴본다.
      // todos 중 같은 id를 발견하면 checked의 값을 뒤집어준다.
      // 그리고 다시 렌더링
      console.log('onToggle 호출');
      setTodos(
        todos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  // 사용자가 보게될 view
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
