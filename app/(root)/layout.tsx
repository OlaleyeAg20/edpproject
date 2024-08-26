import ".././globals.css";
import Sidebar from "@/components/Sidebar";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "firebase/auth";
import Landingpage from "./landingpage";

const firebaseConfig = {
  apiKey: "AIzaSyBz6AZNmiUcDEhH4Lb-BG-sxuyAKskXz_g",
  authDomain: "computer-database-5f596.firebaseapp.com",
  databaseURL: "https://computer-database-5f596-default-rtdb.firebaseio.com",
  projectId: "computer-database-5f596",
  storageBucket: "computer-database-5f596.appspot.com",
  messagingSenderId: "24687138568",
  appId: "1:24687138568:web:93c755ba970d971b6d3ebd",
  measurementId: "G-RWWECYWQJZ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let signedIn = false;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      signedIn = true;
      const uid = user.uid;
      // ...
    } else {
      signedIn = false;
    }
  });

  return (
    <>
      {(signedIn && (
        <main className="flex h-full w-full">
          <Sidebar />
          {children}
        </main>
      )) || (
        <main className="flex flex-col h-full w-full">
          <Landingpage />
        </main>
      )}
    </>
  );
}
