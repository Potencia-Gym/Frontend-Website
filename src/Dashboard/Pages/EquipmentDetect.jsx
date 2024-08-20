import { useRef, useState } from 'react'
import tmp from '../Pages/test'
import EquipmentCard from '../Components/EquipmentCard'

const EquipmentDetect = () => {
  const photoUploadRef = useRef();
  const [photo, setPhoto] = useState();
  const [equipmentData, setEquipmentData] = useState(null);  //change to null

  const handleChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setPhoto(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('http://172.20.10.3:8000/equipment', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      console.log(data);
      setEquipmentData(data.workout_plan);  //replace tmp to data
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div className='p-12 max-sm:p-4 max-md:p-8'>
      <button onClick={() => photoUploadRef.current.click()} className='bg-green text-black p-2 rounded-lg'>Upload equipment photo</button>
      <input onChange={handleChange} multiple={false} ref={photoUploadRef} type='file' hidden />
      {(photo) ? (<img src={photo} className='w-[200px] h-[200px] mt-5' />) : ""}

      {(equipmentData) ? (
        <div className='mt-8 flex-col gap-9 bg-black py-4 rounded-2xl px-6 max-sm:px-3'>

          <p className='text-lg text-green font-semibold'>Equipment Detected:</p>
          <h1 className='font-semibold text-4xl mb-4'>{equipmentData.name}</h1>

          <p className='text-lg text-green font-semibold'>Description: </p>
          <h1 className='mb-4'>{equipmentData.description}</h1>

          <p className='text-lg text-green font-semibold'>Warm Up: </p>
          <h1 className='mb-4'>{equipmentData.warm_up}</h1>

          <p className='text-lg text-green font-semibold'>Exercises: </p>
          <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2 mb-4'>
            {equipmentData.exercises.map((exercise, idx) => (
              <div key={idx} className=''>
                <EquipmentCard exerciseData={exercise} />
              </div>
            ))}
          </div>

          <p className='text-lg text-green font-semibold'>Cooldown: </p>
          <h1 className='mb-4'>{equipmentData.cooldown}</h1>

        </div>) : ""}
    </div>
  )
}

export default EquipmentDetect