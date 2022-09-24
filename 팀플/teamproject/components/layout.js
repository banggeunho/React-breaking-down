import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import HomeContainer from '../pages/home';
import PrimarySearchAppBar from './appbar';
import HeaderContainer from '../pages/topbottom/header';
import FooteContainer from '../pages/topbottom/footer';

const name = 'geunho Bang';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
      </Head>
      
      <HeaderContainer/>

      <main>{children}</main>
      
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}

      <FooteContainer/>
    </div>
  );
}