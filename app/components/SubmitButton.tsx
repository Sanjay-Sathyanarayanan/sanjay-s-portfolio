"use client"
import React from 'react'
import { useFormStatus } from "react-dom";
import { IoMdPaperPlane } from "react-icons/io";
const SubmitButton = () => {
    const { pending } = useFormStatus();
    
    
  return (
    <button className=" relative" disabled={pending}>
    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-300 rounded-lg" />
    <div className="px-8 py-3 flex gap-1 items-center justify-center bg-black rounded-lg relative group transition duration-150 text-white font-nedium hover:bg-transparent hover:text-black hover:font-bold hover:translate-x-2 hover:-translate-y-1 ">
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
        Send Message <IoMdPaperPlane />
        </>
      )}
    </div>
  </button>
  )
}

export default SubmitButton