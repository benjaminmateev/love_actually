/* eslint-disable react/no-unknown-property */
import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Laila, Nunito } from 'next/font/google'

const laila = Laila({
  weight: '700',
  subsets: ['latin']
})

const nunito = Nunito({
  weight: '400',
  subsets: ['latin']
})

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        header h1 {
          font-family: ${laila.style.fontFamily};
        }
        main {
          font-family: ${nunito.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
