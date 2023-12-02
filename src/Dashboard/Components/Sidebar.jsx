import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Sidebar = () => {
  return (
    <aside className='fixed top-0 left-0 z-40 w-[20vw] h-screen bg-white dark:bg-black dark:text-white'>

      <div className='flex items-center justify-center my-6'>
        <img src={logo} alt='logo' className='h-10'></img>
        <h1 className='relative right-3 text-2xl font-head max-sm:text-2xl'>otencia.AI</h1>
      </div>


      <div className="h-full px-3 pb-4 text-xl mt-20">
        <ul className="space-y-3 font-medium">
          <li>
            <a href="#" className="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <span className="pl-3">Track Progress</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <span className="pl-3">Diet Planner</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <span className="pl-3">Exercise Planner</span>
            </a>
          </li>
        </ul>
        <div className='mt-[400px]'>
          <Link className="mt-auto w-full flex items-center p-2 bg-red-600 rounded-lg dark:text-white hover:bg-red-700 dark:hover:bg-red-700 group">
            <span className="pl-3">Log out</span>
          </Link>
        </div>


      </div>


    </aside>
  )
}

export default Sidebar;
