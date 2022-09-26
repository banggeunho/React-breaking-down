import * as React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Textarea from '@mui/joy/Textarea';
import Typography from '@mui/joy/Typography';
import { TextareaAutosize } from '@mui/material';

function TextareaDecorators(props) {
  const [text, setText] = React.useState('');
  const addEmoji = (emoji) => () => setText(`${text}${emoji}`);
  return (
    <Textarea
      placeholder="Type in here…"
      value={text}
      onChange={(event) => setText(event.target.value)}
      minRows= {props.type === 'title' ? 1 : 4}
      maxRows={4}
      startDecorator={
        <Box sx={{ display: 'flex', gap: 0.5 }}>
          <IconButton variant="outlined" color="neutral" onClick={addEmoji('👍')}>
            👍
          </IconButton>
          <IconButton variant="outlined" color="neutral" onClick={addEmoji('🏖')}>
            🏖
          </IconButton>
          <IconButton variant="outlined" color="neutral" onClick={addEmoji('😍')}>
            😍
          </IconButton>
        </Box>
      }
      endDecorator={
        <Typography level="body3" sx={{ ml: 'auto' }}>
          {text.length} character(s)
        </Typography>
      }
      sx={{ minWidth: 700 }}
    />
    );
}

function TextBasic(){
    const [text, setText] = React.useState('');
    return(
            <TextareaAutosize
                aria-label="minimum height"
                value={text}
                onChange={(event) => setText(event.target.value)}
                minRows={5}
                placeholder="Minimum 3 rows"
                style={{ width: 300 }}
                endDecorator={
                    <Typography level="body3" sx={{ ml: 'auto' }}>
                      {text.length} character(s)
                    </Typography>
                  }
                />
    );
}

export {TextBasic, TextareaDecorators};