'use client'
import { ChangeEvent, useState } from 'react';
import { auth } from '@/app/firebase/config'
import { updateProfile } from "firebase/auth";
import { createUserWithEmailAndPassword } from 'firebase/auth';
// import {useRouter} from 'next/navigation';
import Logo from '@/components/Logo'
import Link from 'next/link';

export default function Signup() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordValidated, setPasswordValidated] = useState(false)

  // const router = useRouter()

  function checkBtn(e: ChangeEvent<HTMLInputElement>){
    if(password === e.target.value ){
      setPasswordValidated(true)
    }else{setPasswordValidated(false)}
  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: `${firstName} ${lastName}`
        })
        open("/", "_self")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode)
        // ..
      });
  };


  return (
    <>
      <header className="flex px-8 py-4 gap-8 content-center bg-[#F4F4F5] w-full">
        <Logo />
        <button onClick={() => {
          history.back()
        }} className="px-4 py-2 rounded bg-black text-white cursor-pointer border-none">
          Go Back
        </button>
      </header>
      <section className="flex justify-center items-center pt-12">
        <form onSubmit={handleSubmit} className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700 mb-2">
              Firstname
            </label>
            <input 
              type="text"
              id="firstName"
              className="w-full px-3 py-2 border rounded-lg"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700 mb-2">
              Lastname (Surname)
            </label>
            <input 
              type="text"
              id="lastName"
              className="w-full px-3 py-2 border rounded-lg"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-3 py-2 border rounded-lg"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value)
                checkBtn(e)
              }}
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white 
          font-bold py-2 rounded-lg hover:bg-blue-700 disabled:hover:bg-blue-300 disabled:bg-blue-300 disabled:cursor-not-allowed" disabled={!passwordValidated}>
            Sign Up
          </button>
          <p className="text-center text-black text-sm my-[5px] mx-0 mt-4">
          Already have an account?{" "}
          <Link href="/Signin" className="text-primary font-bold">
            Sign In
          </Link>
          </p>
        </form>
      </section>
    </>
  );
}