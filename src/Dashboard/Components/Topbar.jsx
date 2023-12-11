import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";

const Topbar = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else document.documentElement.classList.remove("dark");
  })

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className='sticky flex items-center h-[10vh] bg-white dark:bg-black dark:text-white'>

      <div className='flex items-center justify-center ml-6'>
        <img src={logo} alt='logo' className='h-10'></img>
        <h1 className='relative right-3 text-2xl font-head max-sm:text-xl'>otencia.AI</h1>
      </div>

      <button className='ml-auto mr-4 text-2xl border-2 p-1 rounded-xl border-green' onClick={handleTheme}>
        {theme === "light" ? <CiLight /> : <CiDark />}
      </button>

    </div>
  )
}

export default Topbar
