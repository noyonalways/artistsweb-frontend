"use server";

import { API_BASE_URL } from "@/config/environment";
import axiosInstance from "@/lib/axios";
import { createWorkSchema, updateWorkSchema } from "@/schemas/work";
import { revalidateTag } from "next/cache";
import { z } from "zod";

type GetWorksParams = Record<string, string | number | boolean>;

export const getWorks = async (params?: GetWorksParams) => {
  try {
    const url = new URL(`${API_BASE_URL}/works`);

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, String(value));
      });
    }

    const res = await fetch(url.toString(), {
      cache: "no-cache",
      next: {
        tags: ["works"],
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

export const createWork = async (payload: z.infer<typeof createWorkSchema>) => {
  try {
    const response = await axiosInstance.post("/works", payload);
    revalidateTag("works");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const updateWork = async (
  workId: string,
  payload: z.infer<typeof updateWorkSchema>
) => {
  try {
    const response = await axiosInstance.patch(`/works/${workId}`, payload);
    revalidateTag("works");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteWork = async (workId: string) => {
  try {
    const response = await axiosInstance.delete(`/works/${workId}`);
    revalidateTag("works");
    return response.data;
  } catch (error) {
    return error;
  }
};
