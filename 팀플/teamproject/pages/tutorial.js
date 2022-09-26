import React from 'react'
import Head from 'next/head'
import Link from 'next/link';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css'
import ImageCard from '../components/imageCard';
import { Box } from '@mui/system';
import VideoCard from '../components/videoCard';

function Tutorial() {
  return (
    <Layout>
        <Head>
        <title>튜토리얼</title>
        </Head>
        <div className={styles.main}>
          <h1 className={styles.title}>Tutorial</h1>
          <p className={styles.description}>튜토리얼입니다.</p>
          <Box
              component="ul"
              sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
            >
            <ImageCard
              title="인터뷰 설문"
              desc ="정확한 설문을 웅냥냥"
             url="/images/일반.png"/>
            <ImageCard 
              title="듀오 설문"
              desc ="생생한 감동을 느껴보세요"
              // /images/듀오.png
              url="/images/듀오.png"/>
            <VideoCard
                    title="웅냐얀"
                    desc="앙냐얀"
                     poster="https://assets.codepen.io/6093409/river.jpg"
                      videoSrc="https://assets.codepen.io/6093409/river.mp4"
            />
          </Box>
        </div>
        
      </Layout>
  )
}

export default Tutorial