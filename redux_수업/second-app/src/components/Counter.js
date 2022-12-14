import React from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
  const onChange = e => {
    // e.target.value 의 타입은 문자열이기 때문에 숫자로 변환해주어야 합니다.
    onSetDiff(parseInt(e.target.value, 10));
  };
  return (
    <div>
      <h1>{number}</h1>
      <div>
      <TextField
          id="filled-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value = {diff}
          onChange = {onChange}
        />
        <Button variant="contained" size="small" onClick={onIncrease}>+</Button>
        <Button variant="contained" size="small"  onClick={onDecrease}>-</Button>
      </div>
    </div>
  );
}

export default Counter;