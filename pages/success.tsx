import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import HeartImage from '../components/images/Heart'
import styles from './index.module.css'

const SuccessPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Love Actually</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ccd5ae"/>
      </Head>

      <main className={styles.main}>
        <HeartImage width={75}/>
        <div className="card alert-success w-96 shadow-xl">
          <div className="card-body">
            <p className='text-center'>
            🥳 Success 🥳
            </p>
            <p>
            You have successfully signed up. If you are accepted, you will receive information about next steps and the next event you can join.
            </p>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>
          Built with ♥️ in Berlin
        </p>
      </footer>
    </div>
  )
}

export default SuccessPage
