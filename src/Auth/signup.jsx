
import signUpImg from '../assets/auth/signupImg.jpg'
import { FcGoogle } from 'react-icons/fc'
import { auth, provider } from './firebaseconfig'
import { signInWithRedirect, getRedirectResult, getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/auth-slice';
import useFetch from '../hooks/useFetch';
import { userDetailsActions } from '../store/userdetails-slice';

function Signup() {
  const [loggingIn, setLoggingIn] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = getAuth();
  const {sendRequest } = useFetch();  // useFetch is a customized hook.

  const handleGoogleSignIn = async () => {
    try {
      signInWithRedirect(auth, provider);
    }
    catch (error) {
      console.error(error)
    }
  }

  const fetchData = useCallback(async () => {
    setLoggingIn(true);
    const result = await getRedirectResult(auth);

    if(result) navigate('/dashboard');
    setLoggingIn(false);
  }, [navigate, auth])

  useEffect(() => {
    fetchData();
  }, [fetchData])

  return (
    <div className="flex flex-col md:flex-row h-screen items-center bg-black font-font1">

      <div className="bg-green hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img src={signUpImg} alt="pic" className="w-full h-full object-cover" />
      </div>

      <div className="bg-black text-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
        <div className="w-full h-100">
          <h1 className="text-xl md:text-2xl font-bold mt-12 text-green">Sign in to your account</h1>

          {/* <form className="mt-6" action="" method="">
            <div>
              <label className="text-gray-200">Name</label>
              <input placeholder="Enter Name" className="w-full px-4 py-3 rounded-lg bg-gray-800 mt-2 border focus:border-green focus:bg-gray-900 focus:outline-none" />
            </div>

            <div className='mt-4'>
              <label className=" text-gray-200">Email Address</label>
              <input type="email" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-800 mt-2 border focus:border-green focus:bg-gray-900 focus:outline-none" />
            </div>

            <div className="mt-4">
              <label className=" text-gray-200">Password</label>
              <input type="password" placeholder="Enter Password" className="w-full px-4 py-3 rounded-lg bg-gray-800 mt-2 border focus:border-green focus:bg-gray-900 focus:outline-none" />
            </div>

            <div className="mt-4">
              <label className=" text-gray-200">Confirm Password</label>
              <input type="password" placeholder="Enter Password" className="w-full px-4 py-3 rounded-lg bg-gray-800 mt-2 border focus:border-green focus:bg-gray-900 focus:outline-none" />
            </div>

            <button type="submit" className="w-full block bg-green hover:bg-green/70 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">
              Sign Up
            </button>
          </form> */}

          <hr className="my-6 border-gray-700 w-full" />

          <button onClick={handleGoogleSignIn} type="button" className="w-full block bg-black hover:bg-gray-900 text-gray-100 font-semibold rounded-lg px-4 py-3 border border-green">
            <div className="flex items-center justify-center">

              {!loggingIn && (<span className="ml-4"><FcGoogle className='inline text-xl mr-2' />Sign Up with Google</span>)}

              {loggingIn && (<div role="status" className='flex justify-center items-center'>
                <svg aria-hidden="true" className="inline w-7 h-7 text-gray-200 animate-spin dark:text-gray-600 fill-green" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
                <span className='text-xl px-3 dark:text-white tracking-wide'>Loading...</span>
              </div>)}

            </div>
          </button>

        </div>

      </div>

    </div>
  )
}

export default Signup
