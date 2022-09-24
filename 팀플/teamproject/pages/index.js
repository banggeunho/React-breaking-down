import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomeContainer from './home';
import HeaderContainer from './topbottom/header';
import FooterContainer from './topbottom/footer';
import PrimarySearchAppBar from '../components/appbar';
import Layout from '../components/layout';


export default function Home() {
  return (
    <div className={styles.container}>
      <Layout home>
      <Head>
        <title>폼듀</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <HomeContainer/>
      </Layout>
    </div>
  )
}
