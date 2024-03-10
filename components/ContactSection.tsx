"use client";
import React from "react";
import TextAnimation from "@/components/ui/text-animation";
import { sendEmail } from "@/lib/actions/sendEmail";
import toast from "react-hot-toast";
import SubmitButton from "./SubmitButton";


const ContactSection = () => {
  
  

  return (
    <section id="contact">
      <div className=" flex flex-col gap-3 items-center justify-around px-12 lg:flex-row mt-24 mb-12">
        <TextAnimation />
        <form
          className="bg-slate-100 flex flex-col gap-5 px-5 py-12 rounded-md w-[340px] md:w-[540px] "
          action={async (formData: FormData) => {
            console.log("Running on client", formData);
            await sendEmail(formData);
            toast.success("Message sent successfully!");
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="rounded-full p-2 w-full border border-gray-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="rounded-full p-2 w-full border border-gray-300"
          />
          <textarea
            name="message"
            cols={30}
            rows={7}
            className="rounded p-2"
            placeholder="Message"
          ></textarea>
          <SubmitButton/>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
