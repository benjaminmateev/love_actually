import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import HeartImage from '../components/images/Heart'

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Love Actually</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ccd5ae"/>
      </Head>

      <main className='h-screen flex-col grow'>
        <div className="hero h-screen">
        <div className="h-screen hero-overlay bg-opacity-100"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <div className="flex justify-center items-center"><HeartImage className='items-center' width={40}></HeartImage></div>
              <h1 className="mb-5 text-5xl font-bold">Welcome to</h1>
              <h2 className="mb-5 text-5xl font-bold">Love Actually!</h2>
              <p className="mb-5">
                Love Actually is an invite-only event series for singles. We organise dinners, parties, and more all focussed on meeting interesting people, vetted and chosen by our ambassadors.
                To join, you will need an invite from get one. As cureate both the people who join and the events, there is currently no way to join without getting an invitation. So go get your invitiation.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default HomePage
