import React, { useRef, useState } from 'react'
import { MdDoubleArrow } from "react-icons/md";
import Sidebar from './Components/Sidebar'
import Topbar from './Components/Topbar'
import { Outlet } from 'react-router-dom'

function MainDash() {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div className='h-screen w-screen relative'>

      <div className='absolute text-2xl top-[13vh] -left-1 z-10 xl:hidden'>
        <button onClick={()=>{setShowSidebar(!showSidebar)}} className='bg-black text-white border-y-2 border-r-2 border-green p-1 rounded-lg'>
          <MdDoubleArrow />
        </button>
      </div>

      <div className='font-font1 dark:text-white'>
        <Topbar />
        <Sidebar show={showSidebar}/>
      </div>

      <div className='bg-lightgrey dark:bg-grey dark:text-white ml-[20vw] h-[90vh] max-xl:ml-0'>
        <Outlet />
      </div>

    </div>
  )
}

export default MainDash

