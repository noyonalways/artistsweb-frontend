import { z } from "zod";

const createHighlightSchema = z.object({
  title: z
    .string({
      required_error: "Title is required",
    })
    .min(1, "Title is required"),
  value: z
    .string({
      required_error: "Value is required",
    })
    .min(1, "Value is required"),
});

export const createHeroSectionSchema = z.object({
  heading: z.string().min(1, "Heading is required"),
  subheading: z.string().min(1, "Subheading is required"),
  highlights: z
    .array(createHighlightSchema)
    .min(1, "At least one highlight is required"),
});

export const updateHeroSectionSchema = z.object({
  heading: z.string().min(1, "Heading is required"),
  subheading: z.string().min(1, "Subheading is required"),
  highlights: z
    .array(createHighlightSchema)
    .min(1, "At least one highlight is required"),
});
