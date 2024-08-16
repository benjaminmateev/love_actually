import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import HeartImage from '../components/images/Heart'

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Love Actually - A curated community</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="A curated community and an in-person event series for people who are tired of online dating" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Love Actually - A curated community" />
        <meta
          property="og:description"
          content="A curated community and an in-person event series for people who are tired of online dating"
        />
        <meta
          property="og:image"
          content="https://loveactually.co/og-image.png"
        />
      </Head>

      <main className='flex-col grow mb-auto text-lg'>
        <div className="mt-5 px-8 flex justify-center">
          <div className="text-center">
            <div className="max-w-md">
              <div className="flex justify-center items-center mb-5"><HeartImage className='items-center' width={50}></HeartImage></div>
              <h1 className="text-5xl mb-3 font-bold">Welcome to</h1>
              <h2 className="mb-10 text-5xl font-bold">Love Actually!</h2>
              <p className="mb-5">
                Love Actually is an invite-only event series for singles. We organise dinners, parties, and more all focussed on meeting interesting people, vetted and chosen by our ambassadors.
              </p>
              <p className='mb-5'>
              To join, you will need an invitation. As we curate both the members and the events, we slowly allow people join so we can focus on the right fit of people for the events.
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
