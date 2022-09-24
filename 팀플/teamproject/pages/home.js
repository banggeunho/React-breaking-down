import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {useRouter} from 'next/router'
import { Button } from '@mui/material'
import SurveyPopup from '../components/surveyPopup'


function HomeContainer() {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
      console.log("끄기!")
      setOpen(false)};

  return (
    <>

    <h1 className={styles.title}>
          안녕하세요. <a href="https://pond-front-241.notion.site/0720ff930d644ddb80388400628c89d7">폼듀</a>입니다.
        </h1>
    <div className={styles.main}>
        <p className={styles.description}>
          트렌디한 차별화된 설문 플랫폼
        </p>
        
        <div className={styles.grid}>
          
          <SurveyPopup open={open} handleClose={handleClose}/>

            <Button onClick={() => {handleOpen()}}>
              <a className={styles.card}>
                <h2>[메뉴1] 텍스트설문 &rarr;</h2>
                <p>당신만의 설문을 만들어보세요.</p>
              </a>
            </Button>

            <Link href="/menu/menu2" >
            <a className={styles.card}>
              <h2>[메뉴2] 캬캬캬캬캬 &rarr;</h2>
              <p>당신의 감동을 직접 전하세요.</p>
            </a>
          </Link>

          <Link href="/menu/menu3" >
            <a className={styles.card}>
              <h2>[메뉴3] 서비스 소개 &rarr;</h2>
              <p>폼듀만의 특별한 솔루션</p>
            </a>
          </Link>

          <Link href="/menu/menu4" >
            <a className={styles.card}>
              <h2>[메뉴4] 마이페이지 &rarr;</h2>
              <p>당신의 발자취를 확인하세요.</p>
            </a>
          </Link>

        </div>
    </div>
    </>
  )
}

export default HomeContainer