import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Please provide a valid email address"),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(1, "Password is required"),
});
