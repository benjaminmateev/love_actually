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
      </Head>

      <main className='flex-col grow mb-auto'>
        <div className="mt-5 px-8 flex justify-center">
          <div className="text-center">
            <div className="max-w-md">
              <div className="flex justify-center items-center mb-5"><HeartImage className='items-center' width={50}></HeartImage></div>
              <h1 className="text-5xl font-bold">Welcome to</h1>
              <h2 className="mb-10 text-5xl font-bold">Love Actually!</h2>
              <p className="mb-5">
                Love Actually is an invite-only event series for singles. We organise dinners, parties, and more all focussed on meeting interesting people, vetted and chosen by our ambassadors.
              </p>
              <p className='mb-5'>
                To join, you will need an invite from get one. As cureate both the people who join and the events, there is currently no way to join without getting an invitation. So go get your invitiation.
              </p>
              <p className='mb-5'>
                We are looking forward to welcoming you into our community soon and hope you will be able to meet amazing new people through our events.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default HomePage
