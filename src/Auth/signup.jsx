import React from 'react'
import signUpImg from './imgs/signupImg.jpg'

function signup() {
  return (
    <div className="flex flex-col md:flex-row h-screen items-center bg-black font-font1">

      <div className="bg-green hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img src={signUpImg} alt="pic" className="w-full h-full object-cover" />
      </div>

      <div className="bg-black text-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
        <div className="w-full h-100">
          <h1 className="text-xl md:text-2xl font-bold mt-12">Create your new account</h1>

          <form className="mt-6" action="" method="">
            <div>
              <label className="block text-gray-200">Email Address</label>
              <input type="email" name="" id="" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-800 mt-2 border focus:border-green focus:bg-gray-900 focus:outline-none" />
            </div>

            <div className="mt-4">
              <label className="block text-gray-200">Password</label>
              <input type="password" name="" id="" placeholder="Enter Password" minLength="6" className="w-full px-4 py-3 rounded-lg bg-gray-800 mt-2 border focus:border-green focus:bg-gray-900 focus:outline-none"/>
            </div>

            <button type="submit" className="w-full block bg-green hover:bg-green/70 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">
              Sign Up
            </button>
          </form>

          <hr className="my-6 border-gray-700 w-full" />

          <button type="button" className="w-full block bg-black hover:bg-gray-900 text-gray-100 font-semibold rounded-lg px-4 py-3 border border-gray-300">
            <div className="flex items-center justify-center">
              <span className="ml-4">Log in with Google</span>
            </div>
          </button>
        </div>

      </div>

    </div>
  )
}

export default signup
