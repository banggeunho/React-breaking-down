import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components";
import {inputUser, okClick, resetUser} from './userSlice';

const Layout = styled.div`
margin-top : 10px;
padding: 20px;
`;

const User = (props) => {
     
    const username = useSelector(state=>state.user);
    const isClick = useSelector(state=>state.isClick);
    console.log('userselect',username);
    const dispatch = useDispatch();
   
  
   const handleOnUser = (e) => {
        e.preventDefault();
        dispatch(inputUser(e.target.value));
        console.log("onUser", props.value);
        
    }
    const handleOnBtclick = (e) => {
      dispatch(okClick());       
     };
    const handleOnReset = (e) =>{
        e.preventDefault();
        dispatch(resetUser());
    }
    
  return (
      <Layout >
      <h2> Redux Toolkit </h2>
        <input type="text" value={username} onChange= {handleOnUser} /> 
        <button onClick = {handleOnBtclick} value = "onClick">OK</button>
        <button onClick = {handleOnReset} value = "reset">Reset</button>
        <br /> 
        {isClick && <label > {username} </label> }
              
       </Layout>    
     );
  }
export default User

