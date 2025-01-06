"use server";

import { API_BASE_URL } from "@/config/environment";

export const getServices = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/services?limit=6`);

    if (!res.ok) {
      throw new Error("Failed to load data");
    }
    return res.json();
  } catch (error) {
    return error;
  }
};
