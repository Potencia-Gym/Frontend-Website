
import logo from '../imgs/logo.png'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'

function Navbar() {
  return (
    <div className='sticky top-0 z-50 min-w-full'>
      <div className='flex justify-between max-sm:justify-center items-center bg-black min-h-[11vh] w-full py-4 px-[5%] text-white '>
        <div className='flex justify-center items-end max-sm:items-center max-sm:justify-between'>
          <div className='flex items-center'>
            <img src={logo} alt='logo' className='h-10'></img>
            <Link to={`/`} className='relative right-3 text-3xl font-head'>otencia.AI</Link>
          </div>
          <div className='hidden max-sm:block w-4 h-4'><GiHamburgerMenu /></div>
        </div>
        <div className='flex gap-5 font-font1 font-semibold max-lg:hidden'>
          <Link to={'/'} className='underline underline-offset-8 decoration-green'>Home</Link>
          <p>Features</p>
          <p>Pricing</p>
          <p>Contact</p>
        </div>
        <div className='flex gap-5 font-font1 justify-center items-center font-semibold max-sm:hidden'>
          <Link to={`login`} className='w-[100px] py-2 text-center bg-green rounded-xl'>Login</Link>
          <Link to={`signup`} className='w-[100px] py-2 text-center bg-green rounded-xl'>Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
