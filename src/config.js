// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLCGIB4zjAPgbSElneiOmTBEXIjh4beaE",
  authDomain: "auth-c40f4.firebaseapp.com",
  projectId: "auth-c40f4",
  storageBucket: "auth-c40f4.appspot.com",
  messagingSenderId: "45148650857",
  appId: "1:45148650857:web:057fa20421f64594cdd1f8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
