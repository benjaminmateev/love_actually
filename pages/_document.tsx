import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html lang="en" data-theme="acid">
      <Head />
      <body className="h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
