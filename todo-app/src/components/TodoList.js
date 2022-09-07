import React, {useCallback} from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
  // console.log({todos})

  // useCallback을 사용 -> dependency array에 todos를 넣어주어,
  // todos의 값이 변경 됐을 시에만 FreshJson 초기화
  // 즉, todos의 내용이 바꼈을 시에만 함수를 초기화 시켜줘서, 링크 업데이트~

  // todos => json => 링크생성
  const FreshJson = useCallback( () => {
    let jsonData = JSON.stringify(todos);
    console.log(jsonData);
    let filename = "data.json";
    let text = jsonData.content;
    let blob = new Blob([text], {type:'text/plain', charset : "utf-8"});
    let link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    return (
      <a href= {link.href} download = {filename}> Download JSON</a>
    )
  }, [todos]
  )
  
  return (
    <div className="TodoList">
      <FreshJson />
      {/* todos 배열의 항목을 todolistitem의 props로 넣어서 호출 */}
      {todos.map(todo => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
