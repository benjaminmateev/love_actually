import React from 'react'
import HeartImage from './images/Heart'

export default function Signup () {
  return (
    <>
      <header className='bg-base-100 p-5'>
        <div className="navbar">
          <div className="navbar-start"></div>
          <div className="navbar-center">
            <a className="btn btn-ghost text-xl">
              <HeartImage width={20}/>
              <h1>Love Actually</h1>
            </a>
          </div>
          <div className="navbar-end"></div>
        </div>
      </header>
    </>
  )
}
