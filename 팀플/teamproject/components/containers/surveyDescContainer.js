import React from 'react'
import { Box, Button, TextareaAutosize, TextField, Typography } from '@mui/material';
import {TextareaDecorators, TextBasic} from '../textarea';

const boxStyle = {
    position: 'relative',
    margin: '2rm',
    padding: '3rm',
    border: '1px solid #eaeaea',
    borderRadius: '10px',
    lineHeight: '1.15',
    fontSize: '2rem',
  }

function SurveyDescContainer() {
  return (
    <Box
              sx={boxStyle}>
            <Typography variant="h6" component="h2">
                설문 제목
              </Typography>
              <TextareaDecorators type="title" />
              <Typography  variant="h6" component="h2">
                설문 내용
              </Typography>
              <TextareaDecorators />
         </Box>
  );
}

export default SurveyDescContainer