import React, { useState } from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';



function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name[0]}`,
  };
}

// // 컴포넌트 최적화를 위하여 React.memo를 사용합니다
// const TodoItem = React.memo(function TodoItem({ todo, onToggle, onRemove }) {
//   if (!todo) return null;
//   else {
//   return (
//     <>

//   </>
//   )};
// });

// 컴포넌트 최적화를 위하여 React.memo를 사용합니다
const TodoList = React.memo(function TodoList({ todos, onToggle, onRemove }) {
  return (
    <Box sx = {{width:'100%'}}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell width={10}>Icon</TableCell>
            <TableCell width={10}align="right">ID</TableCell>
            <TableCell width={40}align="right">Name</TableCell>
            <TableCell width={10}align="right">Toggle</TableCell>
            <TableCell width={10}align="right">Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((todo) => (
            <TableRow
              key={todo.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              // onClick = {() => onToggle(todo)}
              style = {{textDecoration: todo.done ? 'line-through': 'none',
                        color: todo.done ? 'red': 'black'}}
            >
              <TableCell component="th" scope="row">
                <Avatar {...stringAvatar(todo.text)}/>
              </TableCell>
              <TableCell align="right"> <Typography variant="h6" gutterBottom>{todo.id}</Typography> </TableCell>
              <TableCell align="right"><Typography variant="h6" gutterBottom>{todo.text}</Typography></TableCell>
              <TableCell align="right">
                <Button variant="contained" size="small" onClick={() => (onToggle(todo.id))}>토글</Button>
              </TableCell>
              <TableCell align="right">
                <Button variant="contained" size="small" onClick={() => (onRemove(todo.id))}>삭제</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
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

          <TextField
            required
            id="filled-required"
            label="Name"
            value ={text}
            placeholder = "이름을 입력하세요."
            onChange = {onChange}
            variant="standard"
          />


            <Button variant="contained" size="small" type="submit">등록</Button>
            
        </form>
        <TodoList todos={todos} onToggle={onToggle} onRemove = {onRemove} />
        </div>
    );
}

export default Todos;