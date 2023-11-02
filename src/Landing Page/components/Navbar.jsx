import React from 'react'
import logo from '../imgs/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className='flex justify-between items-center bg-black min-h-[70px] w-full py-4 px-[5%] text-white'>
        <div className='flex justify-center items-end'>
            <img src={logo} alt='logo' className='h-10'></img>
            <Link to={`/`} className='relative right-3 text-3xl font-head'>otencia.AI</Link>
        </div>
        <div className='flex gap-5 font-font1 font-semibold'>
            <p className='underline underline-offset-8 decoration-green'>Home</p>
            <p>Features</p>
            <p>Pricing</p>
            <p>Contact</p>
        </div>
        <div className='flex gap-5 font-font1 justify-center items-center font-semibold'>
            <Link to={`login`} className='w-[100px] py-2 text-center bg-green rounded-xl'>Login</Link>
            <Link to={`signup`} className='w-[100px] py-2 text-center bg-green rounded-xl'>Sign Up</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
