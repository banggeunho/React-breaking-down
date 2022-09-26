import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import TodoList from './TodoList';



function App() {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}


export default App;
