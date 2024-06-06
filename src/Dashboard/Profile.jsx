import { Checkbox, Radio } from 'antd';
import  { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import optionsList from '../constants';
import useFetch from '../hooks/useFetch';
import { userDetailsActions } from '../store/userdetails-slice';
import { getAuth } from 'firebase/auth';

const Profile = () => {
  const name = useSelector((state) => (state.auth.name));
  const uid = useSelector((state)=>(state.userDetails.uid));
  const email = useSelector((state) => (state.auth.email));
  const info = useSelector((state) => (state.userDetails.information));
  const [basicInfo, setBasicInfo] = useState(info);
  const [type, setType] = useState(info.workoutGoal);
  const [bodyPart, setBodyPart] = useState(info.targetMuscle);
  const [level, setLevel] = useState(info.workoutLevel);
  const [file1, setFile1] = useState();
  const [file2, setFile2] = useState();
  const fileInputRef1 = useRef();
  const fileInputRef2 = useRef();
  const dispatch = useDispatch();
  const { sendRequest } = useFetch();  // useFetch is a customized hook.

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

  // const handleChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setBasicInfo(prev => ({ ...prev, [name]: value, uid: auth.currentUser.uid }));
  // }

  useEffect(() => {
    setBasicInfo(prev => ({ ...prev, workoutGoal: type, targetMuscle: bodyPart, workoutLevel: level, uid: uid }));
  }, [level, bodyPart, type, uid]);

  // for useFetch hook used in form submission.
  const responseFunction = useCallback((res, status) => {
    if (status === 200) {
      dispatch(userDetailsActions.updateUserDetails(res));
    }
    else if (status === 201) {
      console.log("INFO NAHI HAI");
    }
  }, [dispatch])

  const handleFormSubmit = async (e) => {
    setBasicInfo(prev => ({ ...prev, workoutGoal: type, targetMuscle: bodyPart, workoutLevel: level, uid: uid}));
    e.preventDefault();
    sendRequest('user/details', 'POST', basicInfo, responseFunction); //to fetch data from backend using customized useFetch hook
  }

  return (
    <div className="p-8 max-sm:p-3">

      <div className='max-w-[1100px] h-[300px] bg-black rounded-2xl p-6 max-sm:h-[250px] max-sm:p-3 mx-auto max-sm:mt-8'>

        <div className='w-full h-[200px] bg-gray-700 rounded-xl relative max-sm:h-[150px]'>
          <button onClick={() => fileInputRef1.current.click()} className='w-full h-full absolute'></button>
          <input onChange={handleChange1} multiple={false} ref={fileInputRef1} type='file' hidden />
          {(file1) ? (<img src={file1} className='h-full w-full rounded-xl' />) : ""}
        </div>

        <div className='flex gap-6'>
          <div className='ml-6 w-[110px] h-[110px] rounded-full bg-gray-900 relative bottom-11 max-sm:w-[80px] max-sm:h-[80px] max-sm:bottom-6'>
            <button onClick={() => fileInputRef2.current.click()} className='w-full h-full absolute'></button>
            <input onChange={handleChange2} multiple={false} ref={fileInputRef2} type='file' hidden />
            {(file2) ? (<img src={file2} className='h-full w-full rounded-full' />) : ""}
          </div>
          <div>
            <h1 className='text-3xl mt-1 max-sm:text-xl text-green font-bold'>{name}</h1>
            <h1 className='text-sm max-sm:text-xs'>{email}</h1>
          </div>
        </div>

      </div>

      <div className=' bg-black p-8 mt-12 mx-auto rounded-2xl max-w-[1100px] max-sm:p-3'>
      <form onSubmit={handleFormSubmit} className="max-w-[1100px] mt-3 flex flex-col gap-4 justify-center flex-1">
        <div className="place-self-start">
          <h1 className='text-3xl max-sm:text-2xl mb-2 font-bold text-green'>Your Preferences</h1>
        </div>

        {/* <div className='flex gap-5 flex-1 flex-col w-full justify-center'>
          <div className='flex flex-col min-w-[280px] max-sm:w-full items-start justify-center'>
            <label className="text-gray-200 max-xl:min-w-[97px] max-[360px]:min-w-[70px]">Height (cm)</label>
            <input name='height' value={basicInfo.height || ""} onChange={handleChange} type='number' placeholder="Enter height"
              className="px-2 py-2 w-1/3 max-sm:w-full rounded-lg bg-[#141414] mt-2 border-[0.5px] focus:border-green focus:bg-[#141414a9] focus:outline-none" />
          </div>
          <div className='flex flex-col min-w-[280px] max-sm:w-full items-start justify-center'>
            <label className="text-gray-200 max-xl:min-w-[97px] max-[360px]:min-w-[70px]">Weight (kg)</label>
            <input name='weight' value={basicInfo.weight || ""} onChange={handleChange} type='number' placeholder="Enter weight"
              className=" px-2 py-2 w-1/3 max-sm:w-full rounded-lg bg-[#141414] mt-2 border focus:border-green focus:bg-[#141414a9] focus:outline-none" />
          </div>
          <div className='flex flex-col min-w-[280px] max-sm:w-full items-start justify-center'>
            <label className="text-gray-200 max-xl:min-w-[97px] max-[360px]:min-w-[70px]">Age</label>
            <input name='age' value={basicInfo.age || ""} onChange={handleChange} type='number' placeholder="Enter age"
              className="px-2 py-2 w-1/3 max-sm:w-full rounded-lg bg-[#141414] mt-2 border focus:border-green focus:bg-[#141414a9] focus:outline-none" />
          </div>
        </div> */}

        <div className=' min-w-[290px] max-sm:w-full flex flex-col gap-2 justify-center items-start'>
          <p className='font-bold text-lg'>What type of exercise do you prefer?</p>
          <Checkbox.Group
            rootClassName='gap-4 flex-wrap'
            options={optionsList.type}
            onChange={(e) => { setType(e) }}
            defaultValue={Object.values(info.workoutGoal)}
          />
        </div>
        <div className='min-w-[290px] max-sm:w-full flex flex-col gap-2 justify-center items-start mt-4'>
          <p className=' font-bold text-lg'>Which body parts would you like to focus more on?</p>
          <Checkbox.Group
            rootClassName='gap-4 flex-wrap'
            onChange={(e) => setBodyPart(e)}
            options={optionsList.body}
            defaultValue={Object.values(info.targetMuscle)}
          />
        </div>
        <div className='min-w-[290px] max-sm:w-full flex flex-col gap-2 justify-center items-start mt-4'>
          <p className='font-semibold text-lg'>Fitness Level</p>
          <Radio.Group
            className='flex-col gap-4 ant-radio-group'
            rootClassName='flex gap-4 flex-col'
            options={optionsList.level}
            onChange={(e) => setLevel(e.target.value)}
            defaultValue={info.workoutLevel}
          />
        </div>

        <div className='w-full flex justify-end'>
          <button type="submit" className="px-5 mb-3 bg-green hover:bg-green/70 text-white font-semibold rounded-xl py-3 mt-4">
            Save
          </button>
        </div>
      </form>
      </div>

    </div>
  )
}

export default Profile
