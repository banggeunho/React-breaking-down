import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from '../styles/Home.module.css';
import { Button } from '@mui/material';
import {useRouter} from 'next/router'
import Link from 'next/link';

const style = {
    // display: 'flex',
    // align-items: center,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

// const router = useRouter();

// const onTextSurvey = () => {
//     props.handleClose();
//     router.push('/menu/menu1');
    
// }

const SurveyPopup = (props) => {
    console.log(props)
  return (
    <Modal
    open={props.open}
    onClose={props.handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    
    <div className={styles.grid}>
    <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
        설문 형식을 선택해주세요
      </Typography>

    <Link href="/menu/textSurvey">
        <Button className={styles.card}> <p className={styles.title}> 일반 설문 </p> </Button>
    </Link>

    <Link href="/menu/interviewSurvey">
        <Button className={styles.card}><p className={styles.title}> 인터뷰 설문 </p> </Button>
    </Link>

      
    </Box>
    </div>
  </Modal>
  )
}

export default SurveyPopup