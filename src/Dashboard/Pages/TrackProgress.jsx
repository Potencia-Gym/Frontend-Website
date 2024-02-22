
import { useState } from 'react';
import optionsList from '../../constants';
import { Select, Space } from 'antd';
import { getAuth } from 'firebase/auth';
import url from '../../url';

const TrackProgress = () => {
  const [basicInfo, setBasicInfo] = useState({}); 
  const [type, setType] = useState([]);
  const [bodypart, setBodyPart] = useState([]);
  const [level, setLevel] = useState([]);
  
  const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setBasicInfo(prev => ({...prev, [name]:value, uid:auth.currentUser.uid}));
  }
  
  const auth=getAuth();
  const handleFormSubmit = async (e) =>{
    setBasicInfo(prev => ({...prev, workoutGoal: type, targetMuscle: bodypart, workoutLevel: level}));
    e.preventDefault();
    console.log(basicInfo);
    const res = await fetch(url+'user/details', {
        method: "POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(basicInfo)
    });
    console.log(res);
    const json = res.json();
    console.log(json);
  }

  return (
    <div className='p-4'>
      <div className='w-full'>

        <form onSubmit={handleFormSubmit} className="w-full mt-3 flex flex-col gap-10 justify-center items-center flex-1">

          <div className='flex gap-5 flex-1 flex-wrap justify-between items-center w-full'>
            <div className='flex gap-3 justify-center items-center'>
              <label className="text-gray-200">Height (cm)</label>
              <input name='height'  value={basicInfo.height || ""} onChange={handleChange} type='number' placeholder="Enter height" className=" px-2 py-1 rounded-lg bg-[#141414] mt-2 border focus:border-green focus:bg-[#141414a9] focus:outline-none" />
            </div>
            <div className='flex gap-3 justify-center items-center'>
              <label className="text-gray-200">Weight (kg)</label>
              <input name='weight' value={basicInfo.weight || ""} onChange={handleChange} type='number' placeholder="Enter weight" className=" px-2 py-1 rounded-lg bg-[#141414] mt-2 border focus:border-green focus:bg-[#141414a9] focus:outline-none" />
            </div>
            <div className='flex gap-3 justify-center items-center'>
              <label className="text-gray-200">Age</label>
              <input name='age' value={basicInfo.age || ""} onChange={handleChange} type='number' placeholder="Enter age" className=" px-2 py-1 rounded-lg bg-[#141414] mt-2 border focus:border-green focus:bg-[#141414a9] focus:outline-none" />
            </div>
            <div className='flex gap-3 justify-center items-center'>
              <label className="text-gray-200">Gender</label>
              <input name='gender' value={basicInfo.gender || ""} onChange={handleChange} placeholder="Enter gender" className=" px-2 py-1 rounded-lg bg-[#141414] mt-2 border focus:border-green focus:bg-[#141414a9] focus:outline-none" />
            </div>
          </div>

          <div className='flex w-full gap-3 flex-1 flex-wrap justify-between items-center'>
            <div className='w-1/4 flex gap-3 justify-center items-center'>
              <p>Type:</p>
              <Space className='w-full' direction="vertical">
                <Select
                  className=' dark:bg-black w-full'
                  mode="multiple"
                  allowClear
                  placeholder="Please select Type"
                  //defaultValue={}
                  onChange={(e)=>setType(e)}
                  options={optionsList.type}
                />
              </Space>
            </div>
            <div className='w-1/4 flex gap-3 justify-center items-center'>
              <h1 className='w-32'>Body Part:</h1>
              <Space className='w-full' direction="vertical">
                <Select
                  className=' dark:bg-black w-full'
                  mode="multiple"
                  allowClear
                  placeholder="Please select Body Part"
                  //defaultValue={}
                  onChange={(e)=>setBodyPart(e)}
                  options={optionsList.body}
                />
              </Space>
            </div>
            <div className='w-1/4 flex gap-3 justify-center items-center'>
              <p>Level:</p>
              <Space className='w-full' direction="vertical">
                <Select
                  className=' dark:bg-black w-full'
                  mode="multiple"
                  allowClear
                  placeholder="Please select Level"
                  //defaultValue={}
                  onChange={(e)=>setLevel(e)}
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
        </form>


      </div>
    </div>
  )
}

export default TrackProgress
