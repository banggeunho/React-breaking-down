import React, {useState} from 'react'
import styled from "styled-components";
    const Layout = styled.div`
margin-top : 10px;
padding: 20px;
`;

const User = () =>{
    const onBtclick = (event) =>{
        alert(user.concat("University"));
    }

    const[user, setUser] = useState("");

    return(
        <Layout>
            <h2> Redux Toolkit </h2>
            <input type="text" value={user}
                onChange={(e)=>{setUser(e.target.value)}} />
            <button onClick = {onBtclick} value="onClick" >
                OK
            </button>
            <br />
            <label>{user}</label>
        </Layout>
    )
    }
    export default User;