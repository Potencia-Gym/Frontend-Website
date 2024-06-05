import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import logo from '../../assets/logo.png'
import { CgProfile } from "react-icons/cg";
import { auth } from '../../Auth/firebaseconfig'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FiLogOut } from "react-icons/fi";
import { GoGoal } from "react-icons/go";
import { BiDumbbell } from "react-icons/bi";

const Sidebar = (prop) => {
  const [activeTab, setActiveTab] = useState("trackprogress");
  const navigate = useNavigate();
  const name = useSelector((state)=>(state.auth.name));

  const signOut1 = () => {
    signOut(auth).then(() => {
      navigate('../../')
    })
  }

  return (
    <>
      <aside style={{ "transition": "transform 0.3s ease-in" }} className={`${prop.show ? "max-xl:translate-x-[-100vw]" : "max-xl:left-0"} fixed left-0 w-[20vw] h-full bg-white dark:bg-black dark:text-white max-lg:w-[30vw] max-md:w-[50vw] max-sm:w-screen z-10`}>

        <div className='flex items-center justify-center mt-8'>
          <img src={logo} alt='logo' className='h-10'></img>
          <h1 className='relative right-3 text-2xl font-head max-sm:text-xl'>otencia.AI</h1>
        </div>

        <div className="h-full px-3 pb-[150px] text-[22px] mt-12 flex flex-col">
          <ul className="space-y-3 font-medium">
            <li>
              <NavLink to={'daily-goal'}
                className={({ isActive }) =>
                  isActive ? "flex items-center p-2 rounded-lg bg-gray-100 text-green dark:text-green dark:bg-gray-700 group" : "flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 hover:text-green dark:hover:text-green dark:hover:bg-gray-700 group"
                }>
                <GoGoal className='mr-3 text-3xl'/>
                <span className="pl-3">Daily Goal</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={'workout-plan'}
                className={({ isActive }) =>
                  isActive ? "flex items-center p-2 rounded-lg bg-gray-100 text-green dark:text-green dark:bg-gray-700 group" : "flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 hover:text-green dark:hover:text-green dark:hover:bg-gray-700 group"
                }
              // className="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 hover:text-green dark:hover:text-green dark:hover:bg-gray-700 group"
              >
                <BiDumbbell className='mr-3 text-3xl'/>
                <span className="pl-3">Workout Plan</span>
              </NavLink>
            </li>
          </ul>
          <div className='mt-auto flex flex-col gap-6'>
            <div>
              <button onClick={() => { navigate('profile') }} className="w-full flex items-center p-2 bg-green rounded-lg dark:text-white hover:bg-[rgb(63,143,62)] group">
                <CgProfile className='mx-3 text-3xl' />
                <span className="pl-3">{name}</span>
              </button>
            </div>
            <div>
              <button onClick={signOut1} className="w-full flex items-center p-2 bg-red-600 rounded-lg dark:text-white hover:bg-red-700 dark:hover:bg-red-700 group">
                <FiLogOut className='mx-3 text-3xl'/>
                <span className="pl-3">Log out</span>
              </button>
            </div>
          </div>
        </div>

      </aside>
    </>
  )
}

export default Sidebar;
