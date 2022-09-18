import React from 'react'
import {asyncUpFetch, up} from '../modules/thunk'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function ThunkContainer() {
    const dispatch = useDispatch();

    const {status, value} = useSelector(state => ({
        status : state.thunk.status,
        value : state.thunk.value,
    }));
    

  return (
    <>
        <p>{value} | {status}</p>
        <button onClick={()=> {
            console.log(up)
            dispatch(up(2))
        }}>sync add</button>
        <button onClick={() => {
            dispatch(asyncUpFetch());
        }}>async fetch</button>
    </>
  )
}

export default ThunkContainer

