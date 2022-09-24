import React from 'react'
import Head from 'next/head'
import Link from 'next/link';
import Layout from '../../components/layout';
import styles from '../../styles/Home.module.css'

function menu2() {
  return (
    <Layout>
        <Head>
        <title>인터뷰설문</title>
        </Head>
        <div className={styles.main}>
          <h1 className={styles.title}>interview Survey</h1>
          <p className={styles.description}>인터뷰설문입니다.</p>
        </div>
      </Layout>
  )
}

export default menu2