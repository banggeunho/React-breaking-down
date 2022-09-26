import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link';
import Layout from '../../components/layout';
import styles from '../../styles/Home.module.css'
import { Box, TextField, Typography } from '@mui/material';
import SurveyDescContainer from '../../components/containers/surveyDescContainer';
import Button from '@mui/joy/Button';

const 설문생성 = (boxCount) => {
  const boxes = [];
  for (let i = 0; i < boxCount; i++){
    boxes.push(<SurveyDescContainer key={i} />)
  }
  return boxes
}

function TextSurvey() {
  const [boxCount, setBoxCount] = useState(0);
  const boxes = [];
  return (
    <Layout>
        <Head>
        <title>텍스트설문</title>
        </Head>
        <div className={styles.main}>
          <h1 className={styles.title}>Text Survey</h1>
          <p className={styles.description}>일반설문입니다.</p>
          <Box sx={{display: 'flex', border: '1px solid #eaeaea', padding : '1rm'}}>
            <Button variant="solid" color="warning" onClick={() => {setBoxCount(boxCount+1)}} size="lg">설문 생성</Button>
            <Button variant="solid" color="warning" onClick={() => {setBoxCount(boxCount-1)}} size="lg">설문 삭제</Button>
          </Box>
          {설문생성(boxCount)}

        </div>

      </Layout>
  )
}

export default TextSurvey