"use server";

import { API_BASE_URL } from "@/config/environment";

export const loadHeroSectionData = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/hero-section`);

    if (!res.ok) {
      throw new Error("Failed to load data");
    }
    return res.json();
  } catch (error) {
    return error;
  }
};
