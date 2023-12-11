import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'

import { auth } from '../../Auth/firebaseconfig'
import { useNavigate } from 'react-router-dom';

const Sidebar = (prop) => {
  const navigate = useNavigate();

  const signOut1 = () => {
    signOut(auth).then(() => {
      navigate('../../')
    })
  }

  return (
    <>
      <aside style={{"transition":"transform 0.3s ease-in"}} className={`${prop.show ? "max-xl:translate-x-[-100vw]" : "max-xl:left-0"} fixed top-[10vh] left-0 w-[20vw] h-full bg-white dark:bg-black dark:text-white max-lg:w-[30vw] max-md:w-[50vw] max-sm:w-screen`}>

        <div className="h-full px-3 pb-[150px] text-xl mt-12 flex flex-col">
          <ul className="space-y-3 font-medium">
            <li>
              <Link to={'track-progress'} className="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 hover:text-green dark:hover:text-green dark:hover:bg-gray-700 group">
                <span className="pl-3">Track Progress</span>
              </Link>
            </li>
            <li>
              <Link to={'diet-planner'} className="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 hover:text-green dark:hover:text-green dark:hover:bg-gray-700 group">
                <span className="pl-3">Diet Planner</span>
              </Link>
            </li>
            <li>
              <Link to={'exercise-planner'} className="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 hover:text-green dark:hover:text-green dark:hover:bg-gray-700 group">
                <span className="pl-3">Exercise Planner</span>
              </Link>
            </li>
          </ul>
          <div className='mt-auto'>
            <button onClick={signOut1} className="w-full flex items-center p-2 bg-red-600 rounded-lg dark:text-white hover:bg-red-700 dark:hover:bg-red-700 group">
              <span className="pl-3">Log out</span>
            </button>
          </div>
        </div>

      </aside>
    </>
  )
}

export default Sidebar;
