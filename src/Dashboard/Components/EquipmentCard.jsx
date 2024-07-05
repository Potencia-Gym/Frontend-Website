const EquipmentCard = ({exerciseData}) => {
  return (
    <div className='w-full h-full bg-grey rounded-xl p-6 flex gap-3 max-sm:gap-4 flex-col justify-around border-2 border-green hover:bg-gray-900 transition-all duration-300'>
      <h1 className='text-2xl max-sm:text-xl'>{exerciseData.exercise}</h1>
      <div className='w-full flex flex-wrap gap-3 max-sm:gap-2 text-xs text-green max-sm:text-[10px]'>
        <h6 className="mt-2">Target: <span className='bg-black p-2 rounded-2xl ml-2'>{exerciseData.target_muscles}</span></h6>
      </div>

      <div className='flex items-center mt-2 ml-auto gap-3'>
        <p>Reps:</p>
        <div className='flex gap-2 items-end text-yellow-500'>
          <h2 className='text-2xl'>({exerciseData.reps}) x</h2>
          <h2 className='text-2xl max-sm:text-2xl'>{exerciseData.cycles}</h2>
        </div>
      </div>

    </div>
  )
}

export default EquipmentCard
