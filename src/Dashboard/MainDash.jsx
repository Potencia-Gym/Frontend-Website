import React, { useEffect, useRef, useState } from 'react'
import { MdDoubleArrow } from "react-icons/md";
import Sidebar from './Components/Sidebar'
import Topbar from './Components/Topbar'
import { Link, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Auth/firebaseconfig';
import { authActions } from '../store/auth-slice';

function MainDash() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [showSidebar, setShowSidebar] = useState(true);
  //const session = localStorage.getItem("session");
  //const [sessionCheck, setSessionCheck] = useState(false)

  useEffect(() => {
    //ADD LOADING SCREEN BEFORE AND AFTER FETCH
    onAuthStateChanged(auth, (data) => {
      if (data) {
        dispatch(authActions.loginWithDetails({ name: data.displayName, email: data.email }));
        // console.log((new Date().getTime()), (Number(data.metadata.lastLoginAt) + 1500000));
        // console.log((new Date().getTime()) > (Number(data.metadata.lastLoginAt) + 1500000));
        // if((new Date().getTime()) > (Number(data.metadata.lastLoginAt) + 1500000)){
        //   dispatch(authActions.logout())
        // }
      }
      else {
        dispatch(authActions.logout())
      }
    })
  }, [dispatch])

  // useEffect(()=>{
  //   if(isLoggedIn) setSessionCheck(true);
  // }, [isLoggedIn])

  // useEffect(() => {
  //   if ((new Date().getTime()) > (session + 1500000)) {
  //     dispatch(authActions.logout())

  //   }
  // }, [dispatch, session])

  return (
    <div className='h-screen w-screen relative'>

      {isLoggedIn && (<div>
        <div className='absolute text-2xl top-[13vh] -left-1 z-10 xl:hidden'>
          <button onClick={() => { setShowSidebar(!showSidebar) }} className='bg-black text-white border-y-2 border-r-2 border-green p-1 rounded-lg'>
            <MdDoubleArrow />
          </button>
        </div>

        <div className='font-font1 dark:text-white'>
          <Topbar />
          <Sidebar show={showSidebar} />
        </div>

        <div className='bg-lightgrey dark:bg-grey dark:text-white ml-[20vw] h-[90vh] max-xl:ml-0'>
          <Outlet />
        </div>
      </div>)}

      {!isLoggedIn && (
        <div className='h-screen w-screen flex justify-center items-center text-white bg-black font-font1'>
          <div className={`flex flex-col gap-5 items-center justify-center`}>
            <h1 className='text-3xl'>You are not Signed in.....</h1>
            <Link to={`../signup`} className='w-[100px] py-2 text-center bg-green rounded-xl'>Sign Up</Link>
          </div>

        </div>
      )}

    </div>
  )
}

export default MainDash

