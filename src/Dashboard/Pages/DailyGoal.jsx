import React, { useState } from 'react'
import { AiOutlineFire } from "react-icons/ai";
import { AiFillFire } from "react-icons/ai";
import { AiFillCamera } from "react-icons/ai";

const DailyGoal = () => {
  const [streakStatus, setStreakStatus] = useState(true);

  return (
    <div className='m-8'>

      <div className='flex flex-1'>
        <div className='flex justify-center items-center text-6xl ml-auto text-green'>
          <h1>Exercise of the day</h1>
        </div>

        <div className={`ml-auto p-4 flex gap-3 justify-end border-2  rounded-3xl w-fit ${(streakStatus) ? "border-yellow-500 text-yellow-500" : ""} `}>
          <div>
            {(streakStatus) ? <AiFillFire className='text-7xl ' /> : <AiOutlineFire className='text-7xl' />}
          </div>
          <div>
            <h1 className='text-5xl'>19</h1>
            <p>day streak</p>
          </div>
        </div>
      </div>

      <div className='mt-12 flex flex-col gap-12 bg-black p-6 rounded-lg'>

        <div className='flex justify-between items-center border-2 border-green rounded-xl p-3 gap-3 text-4xl'>
          <h2 className=''>Jumping Jacks</h2>
          <div className='flex justify-center items-center gap-8'>
            <p>2 / 30</p>
            <button className='bg-gray-500 flex justify-center items-center rounded-full p-3 text-white'><AiFillCamera className='text-3xl' /></button>
          </div>
        </div>

        <div className='flex justify-between items-center border-2 border-green rounded-xl p-4 gap-3 text-4xl'>
          <h2 className=''>Jumping Jacks</h2>
          <div className='flex justify-center items-center gap-8'>
            <p>2 / 30</p>
            <button className='bg-gray-500 flex justify-center items-center rounded-full p-3 text-white'><AiFillCamera className='text-3xl' /></button>
          </div>
        </div>

        <div className='flex justify-between items-center border-2 border-green rounded-xl p-4 gap-3 text-4xl'>
          <h2 className=''>Jumping Jacks</h2>
          <div className='flex justify-center items-center gap-8'>
            <p>2 / 30</p>
            <button className='bg-gray-500 flex justify-center items-center rounded-full p-3 text-white'><AiFillCamera className='text-3xl' /></button>
          </div>
        </div>

        <div className='flex justify-between items-center border-2 border-green rounded-xl p-4 gap-3 text-4xl'>
          <h2 className=''>Jumping Jacks</h2>
          <div className='flex justify-center items-center gap-8'>
            <p>2 / 30</p>
            <button className='bg-gray-500 flex justify-center items-center rounded-full p-3 text-white'><AiFillCamera className='text-3xl' /></button>
          </div>
        </div>

      </div>


    </div>
  )
}

export default DailyGoal;
