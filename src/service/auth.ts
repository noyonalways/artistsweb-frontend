"use server";

import { API_BASE_URL } from "@/config/environment";
import { loginSchema } from "@/schemas/auth";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { z } from "zod";

export const login = async (payload: z.infer<typeof loginSchema>) => {
  const cookiesStore = await cookies();
  try {
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await res.json();

    if (data?.success) {
      cookiesStore.set("access_token", data?.data?.accessToken);
    }

    return data;
  } catch (error) {
    return error;
  }
};

export const getAccessToken = async () => {
  const cookiesStore = await cookies();
  return cookiesStore.get("access_token")?.value;
};

// get current logged in user details
export const getCurrentUser = async () => {
  const accessToken = await getAccessToken();
  let decodedToken = null;

  if (accessToken) {
    decodedToken = jwtDecode(accessToken);
  }

  return decodedToken;
};

// logout user
export const logOutUser = async () => {
  const cookiesStore = await cookies();
  cookiesStore.delete("access_token");
};
