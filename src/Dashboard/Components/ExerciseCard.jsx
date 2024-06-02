import React from 'react'
import { MdDone } from "react-icons/md";

const ExerciseCard = ({exerciseData, updateExerciseDone}) => {
  // if(exerciseData.completed) console.log("done bhai");
  return (
    <div className=' w-full bg-grey rounded-xl p-6 flex gap-6 max-sm:gap-4 flex-col border-2 border-green hover:bg-gray-900 transition-all duration-300'>
      <h1 className='text-3xl max-sm:text-lg'>{exerciseData.name}</h1>
      <div className='w-full flex gap-3 max-sm:gap-2 text-xs text-green max-sm:text-[9px]'>
        <h6 className='bg-black p-2 rounded-2xl'>{exerciseData.level}</h6>
        <h6 className='bg-black p-2 rounded-2xl'>{exerciseData.type}</h6>
        <h6 className='bg-black p-2 rounded-2xl'>{exerciseData.target_muscle}</h6>
      </div>
      <p className='text-sm text-justify max-sm:text-xs'>{exerciseData.desc}</p>
    
      <div className='flex justify-between items-center mt-2'>
        <div className='flex gap-3 items-end text-yellow-500'>
          <h2 className='text-xs mb-1'>Reps</h2>
          <h2 className='text-3xl max-sm:text-xl'>3 x 15</h2>
        </div>
        {
          !exerciseData?.completed ?
          <button onClick={()=>{updateExerciseDone(exerciseData.id)}} className='px-4 py-2 rounded-lg text-xl border-2 border-white  max-sm:text-lg max-sm:px-3 max-sm:py-1 transition-all duration-300'><MdDone /></button>
          :
          <button onClick={()=>{updateExerciseDone(exerciseData.id)}} className='bg-green px-4 py-2 rounded-lg text-xl hover:bg-[rgb(98,192,112)] max-sm:text-lg max-sm:px-3 max-sm:py-1 transition-all duration-300'><MdDone /></button>
        }
      </div>

    </div>
  )
}

export default ExerciseCard
