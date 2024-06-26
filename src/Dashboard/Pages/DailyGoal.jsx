import React, { useState } from 'react'
import { AiOutlineFire } from "react-icons/ai";
import { AiFillFire } from "react-icons/ai";
import { AiFillCamera } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from 'antd';
import LiveStream from './LiveStream';

const DailyGoal = () => {
  const [streakStatus, setStreakStatus] = useState(true);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className='m-8 max-sm:m-5'>

      <div className='flex flex-1 justify-center items-center max-sm:gap-12 max-sm:flex-col-reverse'>
        <div className='flex justify-center items-center text-6xl ml-auto text-green max-lg:text-5xl max-md:text-3xl max-sm:text-2xl max-sm:ml-0'>
          <h1>Exercise of the day</h1>
        </div>

        <div className={`ml-auto p-4 flex gap-3 justify-end border-2 rounded-3xl w-fit ${(streakStatus) ? "border-yellow-500 text-yellow-500" : ""} max-sm:p-3`}>
          <div>
            {(streakStatus) ? <AiFillFire className='text-7xl max-lg:text-6xl max-md:text-4xl max-sm:text-3xl' /> : <AiOutlineFire className='text-7xl max-lg:text-6xl max-md:text-4xl max-sm:text-2xl' />}
          </div>
          <div className='max-sm:flex max-sm:justify-center max-sm:gap-1 max-sm:items-center'>
            <h1 className='text-5xl max-lg:text-4xl max-md:text-2xl max-sm:text-xl'>19</h1>
            <p>day streak</p>
          </div>
        </div>
      </div>

      <div className='mt-12 flex flex-col gap-12 bg-black p-6 rounded-lg max-sm:p-3 max-sm:gap-8'>

        <div className='flex justify-between items-center border-2 border-green rounded-xl p-3 gap-3 max-sm:gap-2 text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-lg'>
          <h2 className=''>Jumping Jacks</h2>
          <div className='flex justify-center items-center gap-8 max-sm:gap-4'>
            <p>2 / 30</p>
            <Button type="primary" onClick={() => setOpen(true)} className='bg-gray-500 flex justify-center items-center rounded-full py-5 px-3 text-white max-sm:p-2'>
              <AiFillCamera className='text-3xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl' />
            </Button>
            <Modal
              centered
              open={open}
              onOk={() => setOpen(false)}
              okText={"Close"}
              onCancel={() => setOpen(false)}
              width={1000}
            >
              <LiveStream />
            </Modal>
            {/* <button onClick={() => { navigate("../../stream") }} ></button> */}
          </div>
        </div>

        <div className='flex justify-between items-center border-2 border-green rounded-xl p-3 gap-3 max-sm:gap-2 text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-lg'>
          <h2 className=''>Jumping Jacks</h2>
          <div className='flex justify-center items-center gap-8 max-sm:gap-4'>
            <p>2 / 30</p>
            <button className='bg-gray-500 flex justify-center items-center rounded-full p-3 text-white max-sm:p-2'><AiFillCamera className='text-3xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl' /></button>
          </div>
        </div>

        <div className='flex justify-between items-center border-2 border-green rounded-xl p-3 gap-3 max-sm:gap-2 text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-lg'>
          <h2 className=''>Jumping Jacks</h2>
          <div className='flex justify-center items-center gap-8 max-sm:gap-4'>
            <p>2 / 30</p>
            <button className='bg-gray-500 flex justify-center items-center rounded-full p-3 text-white max-sm:p-2'><AiFillCamera className='text-3xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl' /></button>
          </div>
        </div>

        <div className='flex justify-between items-center border-2 border-green rounded-xl p-3 gap-3 max-sm:gap-2 text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-lg'>
          <h2 className=''>Jumping Jacks</h2>
          <div className='flex justify-center items-center gap-8 max-sm:gap-4'>
            <p>2 / 30</p>
            <button className='bg-gray-500 flex justify-center items-center rounded-full p-3 text-white max-sm:p-2'><AiFillCamera className='text-3xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl' /></button>
          </div>
        </div>

      </div>


    </div>
  )
}

export default DailyGoal;
