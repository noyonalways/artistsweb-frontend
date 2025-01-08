import { z } from "zod";

export const feedbackSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  avatar: z
    .string()
    .min(1, "Avatar URL is required")
    .url("Provide a valid image url"),
  name: z.string().min(1, "Name is required"),
  message: z.string().min(1, "Message is required"),
});
