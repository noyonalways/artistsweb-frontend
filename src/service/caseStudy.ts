"use server";

import { API_BASE_URL } from "@/config/environment";

export const getCaseStudies = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/case-studies?limit=4`);

    if (!res.ok) {
      throw new Error("Failed to load data");
    }
    return res.json();
  } catch (error) {
    return error;
  }
};
