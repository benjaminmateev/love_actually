import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Signup from '../components/Signup'

const SignupPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Love Actually Signup</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ccd5ae"/>
      </Head>

      <main className="text-lg">
        <Signup/>
      </main>
    </>
  )
}

export default SignupPage
