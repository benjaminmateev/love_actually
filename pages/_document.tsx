import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Document () {
  return (
    <Html lang="en" data-theme="love">
      <Head />
      <body>
        <Header />
        <div className='md:w-96 md:flex md:justify-center md:items-center md:mx-auto'>
          <Main />
        </div>
        <NextScript />
        <Footer />
      </body>
    </Html>
  )
}
