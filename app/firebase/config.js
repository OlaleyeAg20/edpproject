import { initializeApp, getApp, getApps } from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    onAuthStateChanged,
  } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.GOOGLE_API_KEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGID,
    appId: "1:597878049025:web:06351a0ef05847a434f300"
  };
  
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app);

  export {app, auth}