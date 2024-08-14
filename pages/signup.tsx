import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Signup from '../components/Signup'
import styles from './index.module.css'

const SignupPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Love Actually Signup</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ccd5ae"/>
      </Head>

      <main className={styles.main}>
        <Signup/>
      </main>
      <footer className={styles.footer}>
        <p>
          Built with ♥️ in Berlin
        </p>
      </footer>
    </div>
  )
}

export default SignupPage
