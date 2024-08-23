import React, { useState, useEffect, FormEvent } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/navigation'
import Head from 'next/head'

const HomePage: NextPage = () => {
  const [code, setCode] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    router.push('/signup?code=' + code)
  }

  useEffect(() => {
    const url = new URL(window.location.toString())
    setMessage(url.searchParams.get('message'))
  }, [])

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

      <main className='text-lg'>
        <div className="mt-5 px-8">
          <div className="mb-10">
            <div className="">
              <h1 className="text-5xl mb-3 font-bold flex justify-center">Welcome to</h1>
              <h2 className="mb-10 text-5xl font-bold flex justify-center">Love Actually!</h2>
              <p className="mb-5 flex text-center">
                Love Actually is an invite-only event series for singles. We organise events focussed on meeting interesting people, vetted and chosen by our community.
              </p>
              <p className='mb-5 flex justify-center text-center'>
                To join, you will need an invitation.
              </p>
            </div>
          </div>

          <div className=''>
            <div className="my-8 px-8card bg-base-100 shadow-xl">
              <div className="card-body px-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <label className="form-control w-full max-w-xs">
                    <input id='code' value={code} onChange={(e) => setCode(e.target.value)} required type="text" placeholder="Invite Code" className="input input-bordered w-full max-w-xs" />
                  </label>

                  <div className='flex justify-center'>
                    <button type="submit" className="btn-wide btn btn-primary">Enter</button>
                  </div>
                  {message && <p className="mt-2 text-sm text-center text-error">{message}</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default HomePage
