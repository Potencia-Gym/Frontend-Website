import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { useSelector } from 'react-redux';

const Topbar = () => {
  const [theme, setTheme] = useState("dark");
  const name = useSelector((state=> state.auth.name));
  const email = useSelector((state=> state.auth.email));

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else document.documentElement.classList.remove("dark");
  },[theme]);

  // const handleTheme = () => {     // for tailwind light daRK  mode button
  //   setTheme(theme === "dark" ? "light" : "dark");
  // }

  return (
    <div className='sticky w-full flex items-center h-[10vh] bg-white dark:bg-black dark:text-white'>

      <div className='flex items-center justify-center ml-6'>
        <img src={logo} alt='logo' className='h-10'></img>
        <h1 className='relative right-3 text-2xl font-head max-sm:text-xl'>otencia.AI</h1>
      </div>
      <h1>{name}</h1>
      <h1>{email}</h1>

       {/*for tailwind light dark mode button */}
      {/* <button className='ml-auto mr-4 text-2xl border-2 p-1 rounded-xl border-green' onClick={handleTheme}>
        {theme === "light" ? <CiLight /> : <CiDark />}
      </button> */}

    </div>
  )
}

export default Topbar
