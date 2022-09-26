import React from 'react'
import Head from 'next/head'
import Link from 'next/link';
import Layout from '../../components/layout';
import styles from '../../styles/Home.module.css'

function DuoSurvey() {
  return (
    <Layout>
        <Head>
        <title>듀오설문</title>
        </Head>
        <div className={styles.main}>
          <h1 className={styles.title}>Duo Survey</h1>
          <p className={styles.description}>듀오설문입니다.</p>
        </div>
      </Layout>
  )
}

export default DuoSurvey