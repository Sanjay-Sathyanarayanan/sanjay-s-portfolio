"use client"
import { sendEmail } from "@/app/lib/actions/sendEmail";
import toast from "react-hot-toast";
import SubmitButton from "./SubmitButton";
import { formValidation } from "@/app/lib/validations/form";


const Form = () => {
  return (
    <form
          className="bg-slate-100 flex flex-col gap-5 px-5 py-12 rounded-md w-[340px] md:w-[540px] "
          action={async (formData: FormData) => {
            const data ={
              name: formData.get("name"),
              email: formData.get("email"),
              message: formData.get("message")
            };
            const result = formValidation.safeParse(data);
            if(!result.success){
             const errorMessages =  result.error?.issues;
             errorMessages.forEach(message => {toast.error(message.message)
              
             })
             
             
              return;
            }
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
  )
}

export default Form