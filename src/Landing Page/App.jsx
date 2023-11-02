import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <h1 className='text-3xl text-red-600'>Hello App</h1>  
    </>
  )
}

export default App
