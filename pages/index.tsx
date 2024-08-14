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
        <div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className='card'>
              <div className='card-body items-center'>
                <HeartImage width={50}/>
                <h2 className='flex justify-center items-center py-4'>Welcome to Love Actually! 🫰🏻</h2>
                <p className='flex justify-center items-center text-center'>Love Actually is an invite-only event series for singles. We organise dinners, parties, and more all focussed on meeting interesting single people, vetted and chosen by our ambassadors. To join, you will need an invite from get one. As cureate both the people who join and the events, there is currently no way to join without getting an invitatio.</p>
              </div>
            </div>
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

export default HomePage
