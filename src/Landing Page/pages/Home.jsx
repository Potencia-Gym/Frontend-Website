import React from 'react'
import manimg from '../imgs/ManPunch.png'

function Home() {
  return (
    <div className='max-w-full bg-black h-[89vh] flex justify-evenly items-center text-white '>
      <div>
        <img src={manimg} alt='man' className='h-[89vh]'></img>
      </div>
      <div className='relative'>
        <div className=' w-96 h-96 absolute rounded-full bg-gradient-to-r from-black from-30% to-green right-6'></div>
        <p className='font-head text-6xl relative z-10'>Witness</p>
        <p className='font-head text-6xl relative z-10'>The</p>
        <p className='font-head text-9xl text-black relative z-10' style={{"textShadow":"2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff"}}>Fitness</p>
      </div>
    </div>
  )
}

export default Home
