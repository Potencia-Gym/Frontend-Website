import React, { useState } from 'react'
import { AiOutlineFire } from "react-icons/ai";
import { AiFillFire } from "react-icons/ai";
import { AiFillCamera } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from 'antd';
import LiveStream from './LiveStream';

const DailyGoal = () => {
  const [streakStatus, setStreakStatus] = useState(true);
  const [open, setOpen] = useState(0);
  const [bicepCount, setBicepCount] = useState(0);
  const [jackCount, setJackCount] = useState(0);
  const [deadCount, setDeadCount] = useState(0);
  const navigate = useNavigate();

  const updateBicepCount = (a) => {
    setBicepCount(a);
  }

  const updateJackCount = (a) => {
    setJackCount(a);
  }

  const updateDeadCount = (a) => {
    setDeadCount(a);
  }

  const sendCount = () => {
    setOpen(0);
  }

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
          <h2 className=''>Bicep Curls</h2>
          <div className='flex justify-center items-center gap-8 max-sm:gap-4'>
            <p className={`${(bicepCount > 10) ? "text-yellow-500" : ""}`}>{bicepCount} / 10</p>
            <Button type="primary" onClick={() => setOpen(1)} className='bg-gray-500 flex justify-center items-center rounded-full py-5 px-3 text-white max-sm:p-2'>
              <AiFillCamera className='text-3xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl' />
            </Button>
            <Modal
              centered
              open={open === 1}
              onOk={sendCount}
              okText={"Close"}
              onClose={sendCount}
              width={1000}
            >
              <LiveStream updateCount={updateBicepCount} />
            </Modal>
            {/* <button onClick={() => { navigate("../../stream") }} ></button> */}
          </div>
        </div>

        <div className='flex justify-between items-center border-2 border-green rounded-xl p-3 gap-3 max-sm:gap-2 text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-lg'>
          <h2 className=''>Jumping Jacks</h2>
          <div className='flex justify-center items-center gap-8 max-sm:gap-4'>
            <p className={`${(jackCount > 10) ? "text-yellow-500" : ""}`}>{jackCount} / 10</p>
            <Button type="primary" onClick={() => setOpen(2)} className='bg-gray-500 flex justify-center items-center rounded-full py-5 px-3 text-white max-sm:p-2'>
              <AiFillCamera className='text-3xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl' />
            </Button>
            <Modal
              centered
              open={open === 2}
              onOk={() => setOpen(0)}
              okText={"Close"}
              onCancel={() => setOpen(0)}
              width={1000}
            >
              <LiveStream updateCount={updateJackCount} />
            </Modal>
          </div>
        </div>

        <div className='flex justify-between items-center border-2 border-green rounded-xl p-3 gap-3 max-sm:gap-2 text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-lg'>
          <h2 className=''>Deadlift</h2>
          <div className='flex justify-center items-center gap-8 max-sm:gap-4'>
            <p className={`${(deadCount > 10) ? "text-yellow-500" : ""}`}>{deadCount} / 10</p>
            <Button type="primary" onClick={() => setOpen(3)} className='bg-gray-500 flex justify-center items-center rounded-full py-5 px-3 text-white max-sm:p-2'>
              <AiFillCamera className='text-3xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl' />
            </Button>
            <Modal
              centered
              open={open === 3}
              onOk={() => setOpen(0)}
              okText={"Close"}
              onCancel={() => setOpen(0)}
              width={1000}
            >
              <LiveStream updateCount={updateDeadCount} />
            </Modal>
          </div>
        </div>

      </div>


    </div>
  )
}

export default DailyGoal;
