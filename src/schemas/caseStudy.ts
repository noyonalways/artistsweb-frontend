import { z } from "zod";

export const createCaseStudySchema = z.object({
  service: z.string().min(1, "Service is required"),
  name: z.string().min(1, "Name is required"),
  image: z
    .string()
    .min(1, "Image URL is required")
    .url("Provide a valid image url"),
  isLatest: z.boolean().default(false),
});

export const updateCaseStudySchema = z.object({
  service: z.string().min(1, "Service is required"),
  name: z.string().min(1, "Name is required"),
  image: z
    .string()
    .min(1, "Image URL is required")
    .url("Provide a valid image url"),
  isLatest: z.boolean().default(false),
});
