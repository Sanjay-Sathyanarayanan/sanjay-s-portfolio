"use client"
import React from "react";
import TextAnimation from "@/components/ui/text-animation";
import { IoMdPaperPlane } from "react-icons/io";


const ContactSection = () => {
  
  return (
    <section id="contact">
      <div className=" flex flex-col gap-3 items-center justify-around px-12 lg:flex-row mt-24 mb-12">
        <TextAnimation/>
        <form className="bg-slate-100 flex flex-col gap-5 px-5 py-12 rounded-md w-[340px] md:w-[540px] " 
        action={async(formData) => {
          console.log(formData);
        }}>
          <input type="text" name="name" placeholder="Full Name" className="rounded-full p-2 w-full border border-gray-300" />
          <input type="email" name="email" placeholder="Your email" className="rounded-full p-2 w-full border border-gray-300" />
          <textarea name="message"  cols={30} rows={7} className="rounded p-2" placeholder="Message"></textarea>
          <button className=" relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-300 rounded-lg" />
                <div className="px-8 py-3 flex gap-1 items-center justify-center bg-black rounded-lg relative group transition duration-150 text-white font-nedium hover:bg-transparent hover:text-black hover:font-bold hover:translate-x-2 hover:-translate-y-1 ">
                 Send Message <IoMdPaperPlane />
                </div>
              </button>
          
        </form>
      </div>
    
    </section>
  );
}

export default ContactSection