import * as z from "zod";

// schema for contact form

export const userForm = z.object({
  name: z
    .string()
    .trim()
    .min(4, { message: "Minimum of 4 characters required." }),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .max(50, "Email is too long, max 50 characters (sorry)!")
    .email("This is not a valid email."),
  message: z
    .string()
    .trim()
    .min(50, "Minimum of 50 characters (about a sentence.)"),
});
