"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const BottomPage = () => {

  const [isDisabled, setIsDisabled] = useState(false);
  const [isPressed, setIsPressed] = useState(false);


  const router = useRouter();

  const handleNavigate = () => {
    router.push('/configure/form');
    setIsPressed(true);
    setIsDisabled(true);
  }

  return (
    <div className='w-full h-screen px-3 flex flex-col justify-center items-center bg-black/50'>
      <h1 className='text-center text-indigo-500 text-4xl font-bold'>Thank You for Visiting My Portfolio</h1>
      <h2 className='text-zinc-200 text-center text-2xl font-semibold my-5'>If you don't mind, could you provide feedback on my portfolio?</h2>
      <h3 className='text-zinc-300 text-center text-xl '>Dont Worry, your identity will remain anonymous, and the feedback is just used for my evaluation.</h3>
      {isPressed ? (
        <button
          disabled={isDisabled}
          className={`select-none my-7 inline-flex items-center gap-2 px-4 py-2 ${isDisabled
              ? "bg-blue-950 text-white"
              : "transform transition-transform duration-400 ease-in-out hover:scale-110 bg-gradient-to-r from-indigo-700 to-indigo-950 text-white"
            } rounded-lg shadow-md hover:shadow-lg group`}
          onClick={() => handleNavigate()}
        >
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
          Loading...
        </button>
      ) : (
        <button
          className={`select-none my-7 inline-flex items-center gap-2 px-4 py-2 ${isDisabled
              ? "bg-gray-300 text-zinc-700"
              : "transform transition-transform duration-400 ease-in-out hover:scale-110 bg-gradient-to-r from-indigo-700 to-indigo-950 text-white"
            } rounded-lg shadow-md hover:shadow-lg group`}
          onClick={() => handleNavigate()}
        >
          Feedback Form
        </button>
      )}

    </div >
  )
}

export default BottomPage