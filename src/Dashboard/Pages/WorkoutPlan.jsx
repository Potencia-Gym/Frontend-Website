
import { useState } from 'react';
import optionsList from '../../constants';
import { Select, Space } from 'antd';
import { getAuth } from 'firebase/auth';
import url from '../../url';
import { useDispatch, useSelector } from 'react-redux';
import { userDetailsActions } from '../../store/userdetails-slice';
import ExerciseCard from '../Components/ExerciseCard';

const WorkoutPlan = () => {
  const [basicInfo, setBasicInfo] = useState({});
  const [type, setType] = useState([]);
  const [bodypart, setBodyPart] = useState([]);
  const [level, setLevel] = useState([]);
  const Info = useSelector(state => state.userDetails);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setBasicInfo(prev => ({ ...prev, [name]: value, uid: auth.currentUser.uid }));
  }

  const auth = getAuth();
  const handleFormSubmit = async (e) => {
    setBasicInfo(prev => ({ ...prev, workoutGoal: type, targetMuscle: bodypart, workoutLevel: level }));
    e.preventDefault();
    console.log(basicInfo);
    const res = await fetch(url + 'user/details', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(basicInfo)
    });
    const json = await res.json();
    console.log(json);
    dispatch(userDetailsActions.updateUserDetails(json));
  }
  console.log(Info);

  return (
    <div className='p-4 w-full h-full flex justify-center items-center'>
      <div className='w-full flex justify-center items-center'>

        {/* <form onSubmit={handleFormSubmit} className="max-w-[1100px] mt-3 flex flex-col gap-10 justify-center items-center flex-1 border-4 rounded-xl border-green p-5">

          <h1 className='text-4xl max-sm:text-2xl mb-3'>Customize your plan</h1>

          <div className='flex gap-5 flex-1 flex-wrap justify-between items-center w-full'>
            <div className='flex gap-3 min-w-[280px] max-sm:w-full justify-center items-center'>
              <label className="text-gray-200 max-xl:min-w-[97px] max-[360px]:min-w-[70px]">Height (cm)</label>
              <input name='height' value={basicInfo.height || ""} onChange={handleChange} type='number' placeholder="Enter height" className=" px-2 py-1 rounded-lg bg-[#141414] mt-2 border-[0.5px] focus:border-green focus:bg-[#141414a9] focus:outline-none" />
            </div>
            <div className='flex gap-3 min-w-[280px] max-sm:w-full justify-center items-center'>
              <label className="text-gray-200 max-xl:min-w-[97px] max-[360px]:min-w-[70px]">Weight (kg)</label>
              <input name='weight' value={basicInfo.weight || ""} onChange={handleChange} type='number' placeholder="Enter weight" className=" px-2 py-1 rounded-lg bg-[#141414] mt-2 border focus:border-green focus:bg-[#141414a9] focus:outline-none" />
            </div>
            <div className='flex gap-3 min-w-[280px] max-sm:w-full justify-center items-center'>  
              <label className="text-gray-200 max-xl:min-w-[97px] max-[360px]:min-w-[70px]">Age</label>
              <input name='age' value={basicInfo.age || ""} onChange={handleChange} type='number' placeholder="Enter age" className=" px-2 py-1 rounded-lg bg-[#141414] mt-2 border focus:border-green focus:bg-[#141414a9] focus:outline-none" />
            </div>
          </div>

          <div className='flex gap-3 w-full flex-1 flex-wrap justify-between items-center'>
            <div className='min-w-[290px] max-sm:w-full flex gap-3 justify-center items-center'>
              <p>Type:</p>
              <Space className='w-full' direction="vertical">
                <Select
                  className='  w-full'
                  mode="multiple"
                  allowClear
                  placeholder="Please select Type"
                  //defaultValue={}
                  onChange={(e) => setType(e)}
                  options={optionsList.type}
                />
              </Space>
            </div>
            <div className='min-w-[290px] max-sm:w-full flex gap-3 justify-center items-center'>
              <p className='whitespace-nowrap' >Body Part:</p>
              <Space className='w-full' direction="vertical">
                <Select
                  className='  w-full'
                  mode="multiple"
                  allowClear
                  placeholder="Please select Body Part"
                  //defaultValue={}
                  onChange={(e) => setBodyPart(e)}
                  options={optionsList.body}
                />
              </Space>
            </div>
            <div className='min-w-[290px] max-sm:w-full flex gap-3 justify-center items-center'>
              <p>Level:</p>
              <Space className='w-full' direction="vertical">
                <Select
                  className='w-full'
                  mode="multiple"
                  allowClear
                  placeholder="Please select Level"
                  //defaultValue={}
                  onChange={(e) => setLevel(e)}
                  options={optionsList.level}
                />
              </Space>
            </div>
          </div>

          <div className='w-full flex justify-end'>
            <button type="submit" className=" w-1/3 bg-green hover:bg-green/70 focus:bg-indigo-400 text-white font-semibold rounded-lg px-3 py-2 mt-4">
              Submit
            </button>
          </div>
        </form> */}

        <div className='flex flex-wrap flex-1 gap-10 justify-center items-center p-12 max-sm:p-2 max-w-[60vw] max-sm:max-w-[95vw] max-h-[90vh] bg-black rounded-xl overflow-y-scroll scrollbar'>

          <div className='flex bg-grey rounded-xl shadow-md justify-start md:justify-center overflow-x-scroll mx-auto md:mx-12 scrollbar'>

            <div className='flex group hover:bg-green rounded-lg mx-1 transition-all duration-300	cursor-pointer justify-center w-16'>
              <div className='flex items-center px-4 py-4'>
                <div className='text-center'>
                  <p className='text-white group-hover:text-gray-100 text-sm transition-all	duration-300'> Sun </p>
                </div>
              </div>
            </div>

            <div className='flex group hover:bg-green rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center  w-16'>
              <div className='flex items-center px-4 py-4'>
                <div className='text-center'>
                  <p className='text-white group-hover:text-gray-100 text-sm transition-all	duration-300'> Mon </p>
                </div>
              </div>
            </div>

            <div className='flex group hover:bg-green rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center  w-16'>
              <div className='flex items-center px-4 py-4'>
                <div className='text-center'>
                  <p className='text-white group-hover:text-gray-100 text-sm transition-all	duration-300'> Tue </p>
                </div>
              </div>
            </div>

            <div className='flex group bg-green shadow-lg dark-shadow rounded-lg mx-1 cursor-pointer justify-center relative  w-16'>
              <div className='flex items-center px-4 py-4'>
                <div className='text-center'>
                  <p className='text-gray-100 text-sm'> Wed </p>
                </div>
              </div>
            </div>

            <div className='flex group hover:bg-green rounded-lg mx-1 transition-all	duration-300 cursor-pointer justify-center w-16'>
              <div className='flex items-center px-4 py-4'>
                <div className='text-center'>
                  <p className='text-white group-hover:text-gray-100 text-sm transition-all	duration-300'> Thu </p>
                </div>
              </div>
            </div>

            <div className='flex group hover:bg-green rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center  w-16'>
              <div className='flex items-center px-4 py-4'>
                <div className='text-center'>
                  <p className='text-white group-hover:text-gray-100 text-sm transition-all	duration-300'> Fri </p>
                </div>
              </div>
            </div>

            <div className='flex group hover:bg-green rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16'>
              <div className='flex items-center px-4 py-4'>
                <div className='text-center'>
                  <p className='text-white group-hover:text-gray-100 text-sm transition-all	duration-300'> Sat </p>
                </div>
              </div>
            </div>


          </div>

          <ExerciseCard />
          <ExerciseCard />
          <ExerciseCard />
        </div>


      </div>
    </div>
  )
}

export default WorkoutPlan
