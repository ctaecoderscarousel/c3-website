import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'

const Home: NextPage = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [])

  return (
    <div className="col-span-6 flex flex-col">
      <div className='px-10 py-8 grid grid-cols-5 gap-3 items-center'>
        <span className="col-span-3 flex items-center justify-center font-bold text-5xl bg-gradient-to-r from-primary-light via-primary to-secondary bg-clip-text text-transparent p-2">
          Programming Club of CTAE
        </span>
        <lottie-player
          className="col-span-2"
          background="transparent"
          speed="1"
          loop
          autoplay
          style={{ width: "460px", height: "460px", padding: "0.5rem" }}
          src="https://assets2.lottiefiles.com/packages/lf20_fg8zotvy.json"
        >
        </lottie-player>
      </div>
      <hr className='border-primary/70 m-10 border-10' />
      <div className="flex p-10 flex-col items-center">
        <h2 className='text-5xl font-bold text-primary-light'>Events</h2>
      </div>
    </div>
  )
}

export default Home
