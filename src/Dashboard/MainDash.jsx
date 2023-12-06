import React from 'react'
import Sidebar from './Components/Sidebar'
import Topbar from './Components/Topbar'
import { Outlet } from 'react-router-dom'

function MainDash() {
  return (
    <div className='h-screen w-screen'>
      <div className='font-font1  dark:text-white'>
        <Topbar />
        <Sidebar />
      </div>
      <div className='bg-lightgrey dark:bg-grey dark:text-white ml-[20vw] h-[90vh]'>
        <Outlet />
      </div>
    </div>
  )
}

export default MainDash

