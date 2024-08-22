/* eslint-disable camelcase */
import React, { useState, FormEvent } from 'react'
import useInvite from './hooks/useInvite'
import HeartImage from './images/Heart'
import { useRouter } from 'next/navigation'

interface SignupResponse {
  message: string;
  id?: string;
  error?: string;
}

export default function Signup () {
  const { inviteResponse, inviteError } = useInvite()
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [gender, setGender] = useState('')
  const [city, setCity] = useState('')
  const [instagram, setInstagram] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [website, setWebsite] = useState('')
  const [message, setMessage] = useState('')

  const router = useRouter()
  console.log('Signup component called')
  console.log(inviteResponse)

  if (inviteError) {
    console.log(inviteError)
    router.push('/?message=Invalid+code')
  }

  if (!inviteResponse) {
    return <HeartImage className="spin" width={75}/>
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMessage('')

    const referred_by: string[] = [inviteResponse.invite.code]

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstname, lastname, email, phone, gender, city, instagram, linkedin, website, referred_by })
      })

      const data: SignupResponse = await response.json()

      if (response.ok) {
        setMessage('Signup successful!')
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setGender('')
        setCity('')
        router.push('/success')
      } else {
        setMessage(`Error: ${data.message}`)
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.')
    }
  }

  return (
    <>
      <div className=''>
        <div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="my-5 text-center text-2xl font-bold leading-9 tracking-tight">Sign up and join the community</h2>
            <p className="text-justify mb-4">Congratulations, you have been invite by <b>{inviteResponse.invite.firstname}</b> to our exclusive <b>Love Actually</b> community.</p>
            <p className="text-justify mb-4">If you want to join us and participate in exciting events whre you can meet like-minded people and maybe find your next partner, then you should sign up now. We curate exclusive events like dinners, parties and drinks to create the perfect atmosphere to meet new people.</p>
            <p className="text-justify mb-4">We curate exclusive events like dinners, parties and drinks to create the perfect atmosphere to meet new people.</p>
            <p className='text-justify mb-4'>We just need a few details from you to consider you for our community.</p>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">What is your first name?</span>
              </div>
              <input id='firstname' value={firstname} onChange={(e) => setFirstName(e.target.value)} required type="text" placeholder="First Name" className="input input-bordered w-full max-w-xs" />
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">What is your last name?</span>
              </div>
              <input id='lastname' value={lastname} onChange={(e) => setLastName(e.target.value)} required type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">What is your email?</span>
              </div>
              <input id='email' value={email} onChange={(e) => setEmail(e.target.value)} required type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">What is your phone number?</span>
              </div>
              <input id='phone' value={phone} onChange={(e) => setPhone(e.target.value)} required type="tel" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </label>

            <label htmlFor="" className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">What is your gender?</span>
              </div>
              <select id='gender' value={gender} onChange={(e) => setGender(e.target.value)} required className="select select-bordered w-full max-w-xs">
                <option disabled selected></option>
                <option>female</option>
                <option>male</option>
                <option>diverse</option>
              </select>
            </label>

            <label htmlFor="" className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Which city is your primary residency?</span>
              </div>
              <select id='city' value={city} onChange={(e) => setCity(e.target.value)} required className="select select-bordered w-full max-w-xs">
                <option disabled selected></option>
                <option>Berlin</option>
                <option>London</option>
                <option>Barcelona</option>
                <option>San Francisco</option>
                <option>Other</option>
              </select>
            </label>

            <label htmlFor="" className="form-control w-full max-w-xs">We need one link so we can check out who you are, please give us either your Instagram, your LinkedIn or a link to a website about you</label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Do you want to share your Instagram profile with us?</span>
              </div>
              <input id='instagram' value={instagram} onChange={(e) => setInstagram(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Do you want to share your LinkedIn?</span>
              </div>
              <input id='linkedin' value={linkedin} onChange={(e) => setLinkedin(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Do you want to share a website with us that can tell us a little more about you?</span>
              </div>
              <input id='website' value={website} onChange={(e) => setWebsite(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </label>

            <div>
              <button type="submit" className="btn btn-secondary">Sign up</button>
            </div>
            {message && <p className="mt-2 text-sm text-center">{message}</p>}
          </form>
        </div>
      </div>
    </>
  )
}
