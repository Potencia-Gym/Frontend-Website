import React from "react";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "potencia-e55e5.firebaseapp.com",
  projectId: "potencia-e55e5",
  storageBucket: "potencia-e55e5.appspot.com",
  messagingSenderId: import.meta.env.VITE_MSSGID,
  appId: import.meta.env.VITE_APPID
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export{auth, provider};
