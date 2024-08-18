import React, { useState, FormEvent } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/navigation'
import Head from 'next/head'
import HeartImage from '../components/images/Heart'

const HomePage: NextPage = () => {
  const [code, setCode] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    router.push('/signup?code=' + code)
  }

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

      <main className='main flex justify-center mb-auto text-lg'>
        <div className="mt-5 px-8 justify-center">
          <div className="text-center mb-10">
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

          <div className='flex justify-center'>
            <div className="my-8 px-8 justify-center card bg-base-100 w-96 shadow-xl">
              <div className="card-body px-8 justify-center">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <label className="form-control w-full max-w-xs">
                    <input id='code' value={code} onChange={(e) => setCode(e.target.value)} required type="text" placeholder="Invite Code" className="input input-bordered w-full max-w-xs" />
                  </label>

                  <div className='flex justify-center'>
                    <button type="submit" className="btn-wide btn btn-primary">Enter</button>
                  </div>
                  {/* {message && <p className="mt-2 text-sm text-center">{message}</p>} */}
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
