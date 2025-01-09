import { z } from "zod";

export const createServiceSchema = z.object({
  name: z.string().min(1, "Service name is required"),
  description: z.string().optional(),
});

export const updateServiceSchema = z.object({
  name: z.string().min(1, "Service name is required"),
  description: z.string().optional(),
});
