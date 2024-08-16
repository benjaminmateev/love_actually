import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

const SuccessPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Love Actually</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ccd5ae"/>
      </Head>

      <main className='flex-col grow mb-auto'>
        <div className="mt-10 px-8 flex justify-center">
          <div className="text-center">
          <div className="max-w-md">
              <h1 className="mb-1 text-5xl font-bold">Thank you</h1>
              <h2 className="mb-10 text-5xl font-bold">for signing up!</h2>
              <p className="mb-5">
              You have successfully signed up. If you are accepted, you will receive information about next steps and the next events you can join.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default SuccessPage
