import React, { useState, useReducer  } from 'react';
// import logo from './logo.svg';
// import './App.css';

// const a:number = 5;
// const b:string = "ozizizi";

// function sum(a:number, b:string){
//   return a + b;
// }

const ACTION_TYPES = {
  deposit : 'deposit',
  withdraw : 'withdraw',
}

const reducer = (state:number, action:{type:string, payload:number}):number =>
{
  switch(action.type)
  {
    case ACTION_TYPES.deposit:
      console.log(action.payload + "예금");
      return state + action.payload;
    
    case ACTION_TYPES.withdraw:
      console.log(action.payload + "출금");
      return state - action.payload;

    default:
      return state;
  }
};

function App() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2> useReducer 은행</h2>
      <p>잔고 : {money} 원</p>
      <input
        type = "number"
        value = {number}
        onChange = {(e) => setNumber(parseInt(e.target.value))}
        step = "1000"
        >
      </input>
      <button onClick={()=>{
        setNumber(0);
        dispatch({type: ACTION_TYPES.deposit, payload:number})}}>예금</button>
      <button onClick={()=>
        {
          setNumber(0);
          dispatch({type: ACTION_TYPES.withdraw, payload:number})}}>출금</button>
    </div>
  );
}

export default App;
