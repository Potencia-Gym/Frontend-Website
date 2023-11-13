import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'

function Navbar() {
  const [drop, setDrop] = useState(false);
  return (
    <div className='sticky top-0 z-50 min-w-full'>
      <div className={`flex justify-between max-sm:justify-center items-center bg-black min-h-[11vh] w-full py-4 px-[5%] text-white max-sm:h-fit max-sm:flex-col`}>
      
        <div className='flex justify-center items-end max-sm:items-center max-sm:justify-between max-sm:w-full'>
          <div className='flex items-center'>
            <img src={logo} alt='logo' className='h-10'></img>
            <Link to={`/`} className='relative right-3 text-3xl font-head max-sm:text-2xl'>otencia.AI</Link>
          </div>
          <button onClick={()=>setDrop(!drop)} className='hidden max-sm:block max-sm:ml-auto w-5 h-5'><GiHamburgerMenu /></button>
        </div>

        <div className={`${drop ? "":"max-sm:hidden"} flex gap-5 font-font1 font-semibold max-lg:hidden max-sm:flex max-sm:flex-col max-sm:mt-2 max-sm:mr-auto max-sm:pl-2`}>
          <Link to={'/'} className='underline underline-offset-8 decoration-green'>Home</Link>
          <p>Features</p>
          <p>Pricing</p>
          <p>Contact</p>
        </div>

        <div className={`${drop ? "":"max-sm:hidden"} flex gap-5 font-font1 justify-center items-center font-semibold max-sm:flex-col max-sm:mt-2 max-sm:mr-auto`}>
          <Link to={`../login`} className='w-[100px] py-2 text-center bg-green rounded-xl'>Login</Link>
          <Link to={`../signup`} className='w-[100px] py-2 text-center bg-green rounded-xl'>Sign Up</Link>
        </div>

      </div>
    </div>
  )
}

export default Navbar
