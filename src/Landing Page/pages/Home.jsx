import React from 'react'
import manimg from '../../assets/landingPage/ManPunch.png'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='max-w-full bg-black h-[89vh] flex justify-evenly items-center text-white relative'>

      <div className='absolute left-32 max-2xl:left-2'>
        <img src={manimg} alt='man' className='h-[89vh] object-cover'></img>
      </div>

      <div className='relative ml-auto mr-5 max-md:m-auto max-md:top-24'>
        <div className='w-96 h-96 absolute right-12 max-lg:w-60 max-lg:h-60 max-md:hidden rounded-full bg-gradient-to-r from-black from-30% to-green'></div>
        <div className='font-head text-6xl relative z-10 max-lg:text-5xl max-sm:text-4xl'>
          <p>Witness</p>
          <p>The</p>
          <p className='text-9xl text-black max-lg:text-7xl max-sm:text-5xl' style={{ "textShadow": "2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff" }}>Fitness</p>
        </div>
        <div>
          <div className={`flex gap-5 font-font1 text-2xl items-center mt-10 max-sm:text-xl`}>
            <Link to={`dashboard`} className='w-fit px-6 py-2 text-center bg-green rounded-xl z-10'>Dashboard</Link>
            <Link to={`signup`} className='w-fit px-6 py-2 text-center bg-black border-2 border-green rounded-xl z-10'>Sign Up</Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
