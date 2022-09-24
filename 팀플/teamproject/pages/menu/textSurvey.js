import React from 'react'
import Head from 'next/head'
import Link from 'next/link';
import Layout from '../../components/layout';
import styles from '../../styles/Home.module.css'

function menu1() {
  return (
    <Layout>
        <Head>
        <title>텍스트설문</title>
        </Head>
        <div className={styles.main}>
          <h1 className={styles.title}>Text Survey</h1>
          <p className={styles.description}>일반설문입니다.</p>
        </div>
      </Layout>
  )
}

export default menu1