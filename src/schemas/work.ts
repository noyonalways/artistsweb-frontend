import { z } from "zod";

export const workSchema = z.object({
  title: z.string().min(1, "Title is required"),
  image: z
    .string()
    .min(1, "Image is required")
    .url("Provide a valid image url"),
  tags: z
    .array(z.string(), {
      required_error: "At least one tag is required",
    })
    .min(1, "At least one tag is required"),
  isLatest: z.boolean().default(false),
});
