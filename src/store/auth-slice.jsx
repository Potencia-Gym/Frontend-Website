import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: { isLoggedIn: false, name: "", email: "" },
    reducers:{
        loginWithDetails(state, action){
            state.isLoggedIn=true;
            state.name = action.payload.name;
            state.email = action.payload.email;

        },
        logout(state){
            state.isLoggedIn=false;
            state.name = "";
            state.email = "";
        },
    }
});

export const authActions = authSlice.actions;

export default authSlice