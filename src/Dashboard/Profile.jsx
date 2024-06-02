import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const name = useSelector((state) => (state.userDetails.name));
  const email = useSelector((state) => (state.userDetails.email));
  const [file1, setFile1] = useState();
  const [file2, setFile2] = useState();
  const fileInputRef1 = useRef();
  const fileInputRef2 = useRef();

  const handleChange1 = (e) => {  //convert uploaded img to base64
    const reader = new FileReader();
    reader.onloadend = () => {
      setFile1(reader.result);
    };
    reader.readAsDataURL((e.target.files[0]));
  }

  useEffect(() => {   //upload to FIREBASE from here
    if (file1) {
      console.log("Base64 Image:", file1);
    }
  }, [file1]);

  const handleChange2 = (e) => {  //convert uploaded img to base64
    const reader = new FileReader();
    reader.onloadend = () => {
      setFile2(reader.result);
    };
    reader.readAsDataURL((e.target.files[0]));
  }

  useEffect(() => {   //upload to FIREBASE from here
    if (file2) {
      console.log("Base64 Image:", file2);
    }
  }, [file2]);

  return (
    <div className="p-8 flex justify-center items-center">

      <div className='w-[1100px] h-[300px] bg-black rounded-2xl p-6'>

        <div className='w-full h-[200px] bg-gray-700 rounded-xl relative'>
          <button onClick={() => fileInputRef1.current.click()} className='w-full h-full absolute'></button>
          <input onChange={handleChange1} multiple={false} ref={fileInputRef1} type='file' hidden />
          {(file1) ? (<img src={file1} className='h-full w-full' />) : ""}
        </div>

        <div className='flex gap-6'>
          <div className='ml-6 w-[110px] h-[110px] rounded-full bg-gray-900 relative bottom-11'>
            <button onClick={() => fileInputRef2.current.click()} className='w-full h-full absolute'></button>
            <input onChange={handleChange2} multiple={false} ref={fileInputRef2} type='file' hidden />
            {(file2) ? (<img src={file2} className='h-full w-full rounded-full' />) : ""}
          </div>
          <div>
            <h1 className='text-3xl mt-1'>{name}</h1>
            <h1 className='text-sm'>{email}</h1>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Profile
