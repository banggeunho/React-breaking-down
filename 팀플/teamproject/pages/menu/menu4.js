import React from 'react'
import Head from 'next/head'
import Link from 'next/link';
import Layout from '../../components/layout';
import styles from '../../styles/Home.module.css'

function menu4() {
  return (
    <Layout>
        <Head>
        <title>Menu4</title>
        </Head>
        <div className={styles.main}>
          <h1 className={styles.title}>Menu4</h1>
        </div>
      </Layout>
  )
}

export default menu4