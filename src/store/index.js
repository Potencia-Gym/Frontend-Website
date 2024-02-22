import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import userDetailsSlice from "./userdetails-slice";

const store=configureStore({
    reducer:{
        auth: authSlice.reducer,
        userDetails: userDetailsSlice.reducer,
    },
});

export default store;