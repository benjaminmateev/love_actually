import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import HeartImage from '../components/images/Heart'
import styles from './index.module.css'

const HomePage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Love Actually</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ccd5ae"/>
      </Head>

      <main className={styles.main}>
        <HeartImage width={75}/>
        Welcome you dont have an invite code yet
      </main>
      <footer className={styles.footer}>
        <p>
          Built with ♥️ in Berlin
        </p>
      </footer>
    </div>
  )
}

export default HomePage
