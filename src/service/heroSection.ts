"use server";

import { API_BASE_URL } from "@/config/environment";
import axiosInstance from "@/lib/axios";
import { heroSectionSchema } from "@/schemas/hero-section";
import { revalidateTag } from "next/cache";
import { z } from "zod";

export const loadHeroSectionData = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/hero-section`, {
      cache: "no-cache",
      next: {
        tags: ["hero-section"],
      },
    });

    if (!res.ok) {
      throw new Error("Failed to load data");
    }
    return res.json();
  } catch (error) {
    return error;
  }
};

export const updateHeroSection = async (
  payload: z.infer<typeof heroSectionSchema>
) => {
  try {
    const response = await axiosInstance.patch("/hero-section", payload);
    revalidateTag("hero-section");
    return response.data;
  } catch (error) {
    return error;
  }
};
