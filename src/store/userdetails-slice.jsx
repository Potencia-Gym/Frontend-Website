import { createSlice } from "@reduxjs/toolkit";

const userDetailsSlice = createSlice({
    name:'userDetails',
    initialState:{uid:"", name:"", email:"",information:{height:"", weight:"", age:"", gender:"", workoutGoal:"", targetMuscle:"", workoutLevel:""}},
    reducers:{
        updateUserDetails(state, action){
            state.uid = action.payload.uid || "";
            state.name = action.payload.name || "";
            state.email = action.payload.email || "";
            state.information.height  = action.payload.information.height || "";
            state.information.weight  = action.payload.information.weight || "";
            state.information.age  = action.payload.information.age || "";
            state.information.workoutGoal  = action.payload.information.workoutGoal || "";
            state.information.targetMuscle  = action.payload.information.targetMuscle || "";
            state.information.workoutLevel  = action.payload.information.workoutLevel || "";
        }
    },
});

export const userDetailsActions = userDetailsSlice.actions;

export default userDetailsSlice;