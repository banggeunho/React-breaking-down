import React from 'react'
import PrimarySearchAppBar from '../../components/appbar'
import styles from '../../styles/Home.module.css';

function HeaderContainer() {
  return (
    <div className={styles.header}>
    <PrimarySearchAppBar/>
    </div>
  )
}

export default HeaderContainer