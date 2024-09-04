import { initializeApp, getApp, getApps } from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    onAuthStateChanged,
  } from "firebase/auth";

  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
    databaseURL: "https://new-edp-project-default-rtdb.firebaseio.com",
    projectId: process.env.NEXT_PUBLIC_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGID,
    appId: "1:597878049025:web:06351a0ef05847a434f300"
  };

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app);

  export {app, auth}