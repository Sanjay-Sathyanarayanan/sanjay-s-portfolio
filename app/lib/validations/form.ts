import {z} from 'zod';

export const formValidation = z.object({
    name: z.string().trim().min(1, " Please fill your Name!").max(100),
    email:z.string().trim().min(1, "please fill your Email!").max(100),
    message:z.string().trim().min(1, "please fill out the message field!")
})
export type Form = z.infer<typeof formValidation>;