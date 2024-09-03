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
    databaseURL: "https://new-edp-project-default-rtdb.firebaseio.com",
    projectId: "new-edp-project",
    storageBucket: "new-edp-project.appspot.com",
    messagingSenderId: "597878049025",
    appId: "1:597878049025:web:06351a0ef05847a434f300"
  };
  
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app);

  export {app, auth}