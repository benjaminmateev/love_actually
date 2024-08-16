/* eslint-disable react/no-unknown-property */
import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Lobster, Oswald } from 'next/font/google'

const lobster = Lobster({
  weight: '400',
  subsets: ['latin']
})

const oswald = Oswald({
  weight: '300',
  subsets: ['latin']
})

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        header h1 {
          font-family: ${lobster.style.fontFamily};
        }
        main {
          font-family: ${oswald.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
