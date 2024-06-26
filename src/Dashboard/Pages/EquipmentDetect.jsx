import React, { useRef, useState } from 'react'

const EquipmentDetect = () => {
  const photoUploadRef = useRef();
  const [photo, setPhoto] = useState();

  const handleChange = (e) =>{
    const file = e.target.files[0];
    setPhoto(URL.createObjectURL(file));
  }

  return (
    <div className='p-12'>
      <button onClick={() => photoUploadRef.current.click()} className='bg-green text-black p-2 rounded-lg'>Upload equipment photo</button>
      <input onChange={handleChange} multiple={false} ref={photoUploadRef} type='file' hidden />
      {(photo) ? (<img src={photo} className='w-[200px] h-[200px] mt-5' />) : ""}
    </div>
  )
}

export default EquipmentDetect
