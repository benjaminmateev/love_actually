import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Document () {
  return (
    <Html lang="en" data-theme="love">
      <Head />
      <body>
        <div className="flex flex-col h-screen relative">
          <Header />
          <Main />
          <NextScript />
          <Footer />
        </div>
      </body>
    </Html>
  )
}
