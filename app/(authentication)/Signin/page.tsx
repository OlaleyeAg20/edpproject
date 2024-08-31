"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from "@/components/Logo"
import { auth } from "../.././firebase/config"
import { signInWithEmailAndPassword } from "firebase/auth";
// import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth'
import { useRouter } from 'next/navigation'


const Signin = () => {
  const [passwordInput, setPasswordInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [showPasswordReset, setShowPasswordReset] = useState(true)

  const router = useRouter()
  
  function signInAction(){
    signInWithEmailAndPassword(auth, emailInput, passwordInput)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      router.push('/')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode)
    });
  
  }

  return (
    <>
      <header className="flex px-8 py-4 gap-8 bg-[#F4F4F5]">
        <Logo />
        <button onClick={() => {
          history.back()
        }} className="px-4 py-2 rounded bg-black text-white cursor-pointer border-none">
          Go Back
        </button>
      </header>
      <form className="flex flex-col gap-4 bg-white p-8 w-full max-w-[450px] rounded-[20px] mx-auto mt-10" id="form" action="/" onSubmit={(e) => e.preventDefault()}>
        <div className="flex-column">
          <label>Email </label>
        </div>
        <div className="border-[1.5px] border-[#ecedec] rounded-[10px] h-[50px] flex items-center pl-[10px] focus-within:border-[1.5px] focus-within:border-primary">
          <svg
            height="20"
            viewBox="0 0 32 32"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Layer_3" data-name="Layer 3">
              <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
            </g>
          </svg>
          <input
            type="email"
            className="ml-[10px] text-base border-none w-[85%] focus:outline-none"
            placeholder="Enter your Email"
            id="emailInput"
            onChange={(e) => setEmailInput(e.target.value)}
            required
          />
        </div>

        <div className="flex-column">
          <label>Password </label>
        </div>
        <div className="border-[1.5px] border-[#ecedec] rounded-[10px] h-[50px] flex items-center pl-[10px] focus-within:border-[1.5px] focus-within:border-primary">
          <svg
            height="20"
            viewBox="-64 0 512 512"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
            <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
          </svg>
          <input
            type="password"
            className="ml-[10px] text-base border-none w-[85%] focus:outline-none"
            placeholder="Enter your Password"
            id="passwordInput"
            onChange={(e) => setPasswordInput(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-row justify-between">
          <div className='flex gap-2'>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me </label>
          </div>
          <button type="button" className="text-primary font-bold" onClick={e => {
            setShowPasswordReset((event) => event = false)
          }} id="forgotPassword">
            Forgot password?
          </button>
        </div>
        <button
          type="submit"
          className="m-[20px 0 10px 0] bg-primary border-none text-white text-base font-[500] rounded-[10px] h-[50px] w-full cursor-pointer flex items-center justify-center hover:bg-blue-600 disabled:bg-[#A4A4A5] disabled:hover:bg-[#A4A4A5]"
          onClick={signInAction}
          id="signInBtn"
        >
          {" "}
          <Image
            id="loadingIcon"
            src="/assets/gifs/1488.gif"
            width={30}
            height={30}
            className="hidden"
            alt="loading"
          />
          <span id="btnText">Sign In</span>
        </button>
        <p className="text-center text-black text-sm my-[5px] mx-0">
          Don&apos;t have an account?{" "}
          <Link href="/Signup" className="text-primary font-bold">
            Sign Up
          </Link>
        </p>
      </form>


      {
        showPasswordReset ||
        <div
        id="forgotPasswordPopup"
        className="fixed top-0 bottom-0 left-0 right-0 bg-[#121212AF] flex justify-center items-center h-screen w-full"
        onClick={(e) => {
          if(e.target === e.currentTarget){
            setShowPasswordReset((event) => event = true)
          }
        }}
      >
        <form
          className="flex flex-col bg-white h-60 w-[80%] max-w-[480px] px-5 py-4 gap-4 justify-center items-center"
          id="resetForm"
        >
          <h2 className="text-xl font-bold">Reset Your Password</h2>
          <div className="flex flex-col w-full gap-4">
            <label htmlFor="emailResetInput">Enter your Email</label>
            <input
              className="border-solid border p-2 rounded"
              type="email"
              id="emailResetInput"
            />
          </div>
          <button
            className="bg-primary text-white py-4 w-full rounded"
            id="passwordResetbtn"
          >
            Send Password Reset Link
          </button>
        </form>
        <button
          className="absolute top-4 right-4 p-4 text-white"
          id="closePopupBtn"
          onClick={(e) => {setShowPasswordReset((event) => event = true)}}
        >
          Close
        </button>
      </div>}
    </>
  )
}

export default Signin
