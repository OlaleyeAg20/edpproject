import { initializeApp, getApp, getApps } from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    onAuthStateChanged,
  } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAMN9df4mxYsHCws8-tNmkLyBS8nd16yGM",
    authDomain: "new-edp-project.firebaseapp.com",
    projectId: "new-edp-project",
    storageBucket: "new-edp-project.appspot.com",
    messagingSenderId: "597878049025",
    appId: "1:597878049025:web:06351a0ef05847a434f300"
  };
  
  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  const auth = getAuth(app);

  export {app, auth}