import React, { useEffect, useState } from 'react'
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";

const Topbar = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(()=>{
    if(theme==="dark"){
      document.documentElement.classList.add("dark");
    } else document.documentElement.classList.remove("dark");
  })

  const handleTheme = ()=>{
    setTheme(theme==="dark" ? "light" : "dark");
  }

  return (
    <div className='sticky flex justify-end items-center ml-auto w-[80vw] h-[10vh] bg-white dark:bg-black dark:text-white'>

      <button className='mr-4 text-2xl border-2 p-1 rounded-xl border-black dark:border-white' onClick={handleTheme}>{theme==="light" ? <CiLight /> : <CiDark/>}</button>
    </div>
  )
}

export default Topbar
