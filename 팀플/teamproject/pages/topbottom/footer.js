import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image'
import HomeContainer from '../home';
import HeaderContainer from './header';
import styles from '../../styles/Home.module.css';


export default function FooteContainer() {
  return (
    <footer className={styles.footer}>

      Powered by {'Form Duo'}
      <span className={styles.logo}>
        <Image src="/formduo.png" alt="Vercel Logo" width={150} height={60} />
      </span>
  </footer>
  )
}
