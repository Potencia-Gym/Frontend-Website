import React, { useCallback, useEffect, useRef, useState } from 'react'
import { MdDoubleArrow } from "react-icons/md";
import Sidebar from './Components/Sidebar'
import Topbar from './Components/Topbar'
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Auth/firebaseconfig';
import { authActions } from '../store/auth-slice';
import useFetch from '../hooks/useFetch';
import { userDetailsActions } from '../store/userdetails-slice';

function MainDash() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [showSidebar, setShowSidebar] = useState(true);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  const navigate = useNavigate();
  const { sendRequest } = useFetch();  // useFetch is a customized hook.

  const responseFunction = useCallback((res, status) => {
    if (status === 200) {
      console.log("INFO HAI");
      dispatch(userDetailsActions.updateUserDetails(res));
      // console.log('res from firebase: ', res);
    }
    else if (status === 201) {
      console.log("INFO NAHI HAI");
    }
    setLoading(false);
  }, [dispatch])

  const fetchData = useCallback(async () => {
    // send
    let body = { name: auth.currentUser.displayName, email: auth.currentUser.email, uid: auth.currentUser.uid };
    sendRequest('user', 'POST', body, responseFunction); //to fetch data from backend using customized useFetch hook
  }, [ auth, responseFunction, sendRequest])

  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
        dispatch(authActions.loginWithDetails({ name: data.displayName, email: data.email }));
        fetchData();
      }
      else {
        dispatch(authActions.logout());
        setLoading(false);
      }
    })
  }, [dispatch, auth, fetchData])

  return (
    <div className='h-screen w-screen relative font-font1'>

      {!loading && isLoggedIn && (<div>
        <div className='absolute text-2xl -left-1 z-50 xl:hidden'>
          <button onClick={() => { setShowSidebar(!showSidebar) }} className='bg-black text-white border-y-2 border-r-2 border-green p-1 rounded-lg'>
            <MdDoubleArrow />
          </button>
        </div>

        <div className='font-font1 dark:text-white'>
          <Topbar />
          <Sidebar show={showSidebar} />
        </div>

        <div className='bg-lightgrey dark:bg-grey dark:text-white ml-[20vw] h-[100vh] max-xl:ml-0 overflow-y-scroll scrollbar'>
          <Outlet />
        </div>
      </div>)}

      {!loading && !isLoggedIn && (
        <div className='h-screen w-screen flex justify-center items-center text-white bg-black font-font1'>
          <div className={`flex flex-col gap-5 items-center justify-center`}>
            <h1 className='text-3xl'>You are not Signed in.....</h1>
            <Link to={`../signup`} className='w-[100px] py-2 text-center bg-green rounded-xl'>Sign Up</Link>
          </div>

        </div>
      )}

      {loading && (
        <div className='h-screen w-screen bg-black text-white flex justify-center items-center'>
          <div role="status" className='flex justify-center items-center'>
            <svg aria-hidden="true" className="inline w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-green" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
            <span className="sr-only">Loading...</span>
            <span className='text-4xl px-3 dark:text-white tracking-wide'>Loading...</span>
          </div>
        </div>
      )}


    </div>
  )
}

export default MainDash

