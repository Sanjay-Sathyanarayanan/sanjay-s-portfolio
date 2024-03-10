"use server";
import { Resend } from "resend";
import ContactFormEmail from "@/components/ui/ContactFormEmail";
const resend = new Resend(process.env.RESEND_API_KEY);
export const sendEmail = async (formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: process.env.MY_EMAIL as string,
    subject: "Message from Contact Form ",
    reply_to: email as string,
    react: ContactFormEmail({
      senderEmail: email as string,
      senderName: name as string,
      message: message as string,
    }),
  });
};
