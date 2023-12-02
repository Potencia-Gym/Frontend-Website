import React from 'react'
import Sidebar from './Components/Sidebar'
import Topbar from './Components/Topbar'

function MainDash() {
  return (
    <div className='font-font1 bg-lightgrey dark:bg-grey dark:text-white w-screen h-screen'>
      <Topbar />
      <Sidebar />
    </div>
  )
}

export default MainDash

