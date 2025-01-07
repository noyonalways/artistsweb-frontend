import { z } from "zod";

export const caseStudySchema = z.object({
  service: z.string().min(1, "Service is required"),
  name: z.string().min(1, "Name is required"),
  image: z.string().min(1, "Image URL is required"),
  isLatest: z.boolean().default(false),
});
