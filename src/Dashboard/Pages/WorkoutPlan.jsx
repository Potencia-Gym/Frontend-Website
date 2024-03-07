
import { useEffect, useState, useCallback } from 'react';
import optionsList from '../../constants';
import { Checkbox, Radio, Select, Space } from 'antd';
import { getAuth } from 'firebase/auth';
import url, { url2 } from '../../url';
import { useDispatch, useSelector } from 'react-redux';
import { userDetailsActions } from '../../store/userdetails-slice';
import ExerciseCard from '../Components/ExerciseCard';
import useFetch from '../../hooks/useFetch';

const WorkoutPlan = () => {
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  const [selectedDay, setSelectedDay] = useState('monday');
  const [loading, setLoading] = useState(false);
  const [basicInfo, setBasicInfo] = useState({});
  const [type, setType] = useState([]);
  const [bodyPart, setBodyPart] = useState([]);
  const [recommendedData, setRecommendedData] = useState({});
  const [level, setLevel] = useState();
  const Info = useSelector(state => state.userDetails);
  const dispatch = useDispatch();
  const { sendRequest } = useFetch();  // useFetch is a customized hook.

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setBasicInfo(prev => ({ ...prev, [name]: value, uid: auth.currentUser.uid }));
  }

  useEffect(() => {
    setBasicInfo(prev => ({ ...prev, workoutGoal: type, targetMuscle: bodyPart, workoutLevel: level }));
    console.log(basicInfo);
  }, [level, bodyPart, type]);

  const fetchFromML = useCallback(async () => {
    setLoading(true);
    const details = { uid: Info.uid, target_muscle: Object.values(Info.information.targetMuscle), level: Info.information.workoutLevel[0], type: Object.values(Info.information.workoutGoal) };
    console.log('send to ML: ', details);
    const res = await fetch(url2 + 'recommendation', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(details)
    });
    const json = await res.json();
    setRecommendedData(json);
    setLoading(false);
    console.log('from ML: ', json);
  }, [Info])

  useEffect(() => {
    //if(Info.information.targetMuscle != ""){
    fetchFromML();
    //}
  }, [Info, fetchFromML])

  const responseFunction = useCallback((res, status) => {
    console.log(res);
    if (status === 200) {
      console.log("INFO HAI");
      dispatch(userDetailsActions.updateUserDetails(res));
      console.log('res: ', res);
    }
    else if (status === 201) {
      console.log("INFO NAHI HAI");
    }
  }, [dispatch])

  const auth = getAuth();
  const handleFormSubmit = async (e) => {
    setBasicInfo(prev => ({ ...prev, workoutGoal: type, targetMuscle: bodypart, workoutLevel: level }));
    e.preventDefault();
    console.log('value sent: ', basicInfo);

    sendRequest('user/details', 'POST', basicInfo, responseFunction); //to fetch data from backend using customized useFetch hook

  }
  console.log('redux: ', Info);
  console.log('day: ', recommendedData[selectedDay]);

  return (
    <div className='py-8 px-16 w-full h-full'>
      {/* <form onSubmit={handleFormSubmit} className="max-w-[1100px] mt-3 flex flex-col gap-4 justify-center flex-1">
        <div className="place-self-start">
          <h1 className='text-3xl max-sm:text-2xl mb-2 font-extrabold'>Let&apos;s personalize your fitness plan</h1>
          <h3 className='text-green mb-3'>We&apos;ll use these details to help you get the most out of your Potencia experience.</h3>
        </div>

        <div className='flex gap-5 flex-1 flex-col w-full justify-center'>
          <div className='flex flex-col min-w-[280px] max-sm:w-full items-start justify-center'>
            <label className="text-gray-200 max-xl:min-w-[97px] max-[360px]:min-w-[70px]">Height (cm)</label>
            <input name='height' value={basicInfo.height || ""} onChange={handleChange} type='number' placeholder="Enter height"
              className="px-2 py-2 w-1/3 rounded-lg bg-[#141414] mt-2 border-[0.5px] focus:border-green focus:bg-[#141414a9] focus:outline-none" />
          </div>
          <div className='flex flex-col min-w-[280px] max-sm:w-full items-start justify-center'>
            <label className="text-gray-200 max-xl:min-w-[97px] max-[360px]:min-w-[70px]">Weight (kg)</label>
            <input name='weight' value={basicInfo.weight || ""} onChange={handleChange} type='number' placeholder="Enter weight"
              className=" px-2 py-2 w-1/3 rounded-lg bg-[#141414] mt-2 border focus:border-green focus:bg-[#141414a9] focus:outline-none" />
          </div>
          <div className='flex flex-col min-w-[280px] max-sm:w-full items-start justify-center'>
            <label className="text-gray-200 max-xl:min-w-[97px] max-[360px]:min-w-[70px]">Age</label>
            <input name='age' value={basicInfo.age || ""} onChange={handleChange} type='number' placeholder="Enter age"
              className="px-2 py-2 w-1/3 rounded-lg bg-[#141414] mt-2 border focus:border-green focus:bg-[#141414a9] focus:outline-none" />
          </div>
        </div>

        <div className=' min-w-[290px] max-sm:w-full flex flex-col gap-2 justify-center items-start'>
          <p className='font-bold text-lg'>What type of exercise do you prefer?</p>
          <Checkbox.Group
            rootClassName='flex-col gap-4'
            options={optionsList.type}
            onChange={(e) => { setType(e) }}
          />
        </div>
        <div className='min-w-[290px] max-sm:w-full flex flex-col gap-2 justify-center items-start'>
          <p className='whitespace-nowrap font-bold text-lg'>Which body parts would you like to focus more on?</p>
          <Checkbox.Group
            rootClassName='gap-4 flex-wrap'
            onChange={(e) => setBodyPart(e)}
            options={optionsList.body}
          />
        </div>
        <div className='min-w-[290px] max-sm:w-full flex flex-col gap-2 justify-center items-start'>
          <p className='font-semibold text-lg'>Fitness Level</p>
          <Radio.Group
            className='flex-col gap-4 ant-radio-group'
            rootClassName='flex gap-4 flex-col'
            options={optionsList.level}
            onChange={(e) => setLevel(e.target.value)}
          />
        </div>

        <div className='w-full flex justify-end'>
          <button type="submit" className="w-[11%] bg-green hover:bg-green/70 focus:bg-indigo-400 text-white font-semibold rounded-xl py-2.5 mt-4">
            Continue
          </button>
        </div>
      </form> */}

      <div className='flex flex-wrap flex-1 gap-10 justify-center items-center p-10 max-sm:p-2 max-w-[60vw] max-sm:max-w-[95vw] max-h-[90vh] bg-black rounded-xl overflow-y-scroll scrollbar border-y-[20px] border-black max-sm:border-y-[20px]'>

        <div className='flex bg-grey rounded-xl shadow-md justify-start md:justify-center overflow-x-scroll mx-auto md:mx-12 scrollbar'>
          {days.map((val, idx) => (
            <div key={idx} onClick={() => setSelectedDay(val)} className={`flex group ${val == selectedDay ? 'bg-green' : 'hover:bg-green'} rounded-lg mx-1 transition-all duration-300	cursor-pointer justify-center w-16`}>
              <div className='flex items-center px-4 py-4'>
                <div className='text-center'>
                  <p className='text-white group-hover:text-gray-100 text-sm transition-all	duration-300'> {val.charAt(0).toUpperCase() + val.substring(1, 3)} </p>
                </div>
              </div>
            </div>))}
        </div>


        {(!loading) ? recommendedData[selectedDay]?.map((val, key) => (<ExerciseCard />)) : ""}

        {(loading) ? (<div role="status" className='flex justify-center items-center'>
          <svg aria-hidden="true" className="inline w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-green" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <span className="sr-only">Loading...</span>
          <span className='text-4xl px-3 dark:text-white tracking-wide'>Loading...</span>
        </div>) : ""}
      </div>


    </div>
  )
}

export default WorkoutPlan
