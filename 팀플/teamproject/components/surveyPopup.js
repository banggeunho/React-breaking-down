import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from '../styles/Home.module.css';
import { Button } from '@mui/material';
import {useRouter} from 'next/router'
import Link from 'next/link';
import { borderRadius } from '@mui/system';

const style = {
    // display: 'flex',
    // align-items: center,
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const buttonStyle = {
  display: 'flex',
  position: 'absolute',
  top: '50%',
  left: '15%',
  transform: 'color 0.15s ease, border-color 0.15s ease',
  margin: '2rm',
  padding: '1.5rm',
  border: '1px solid #eaeaea',
  borderRadius: '10px',
  lineHeight: '1.15',
  fontSize: '2rem',
}

// const router = useRouter();

// const onTextSurvey = () => {
//     props.handleClose();
//     router.push('/menu/menu1');
    
// }

const SurveyPopup = (props) => {
    // console.log(props)
  return (
    <Modal
    open={props.open}
    onClose={props.handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    
    <div>
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
          설문 형식을 선택해주세요
        </Typography>

      <Link href="/survey/textSurvey">
          <Button sx={{...buttonStyle, color:'black'}} > <p> 일반 설문 </p> </Button>
      </Link>

      <Link href="/survey/interviewSurvey">
          <Button sx={{...buttonStyle, color:'black', left:'50%'}} ><p> 인터뷰 설문 </p> </Button>
      </Link>
    </Box>
    </div>
  </Modal>
  )
}

export default SurveyPopup