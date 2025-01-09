"use server";

import { API_BASE_URL } from "@/config/environment";
import axiosInstance from "@/lib/axios";
import { createFeedbackSchema, updateFeedbackSchema } from "@/schemas/feedback";
import { revalidateTag } from "next/cache";
import { z } from "zod";

type GetFeedbacksParams = Record<string, string | number | boolean>;

export const getFeedbacks = async (params?: GetFeedbacksParams) => {
  try {
    const url = new URL(`${API_BASE_URL}/feedbacks`);

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, String(value));
      });
    }

    const res = await fetch(url.toString(), {
      cache: "no-cache",
      next: {
        tags: ["feedbacks"],
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

export const createFeedback = async (
  payload: z.infer<typeof createFeedbackSchema>
) => {
  try {
    const response = await axiosInstance.post("/feedbacks", payload);
    revalidateTag("feedbacks");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const updateFeedback = async (
  feedbackId: string,
  payload: z.infer<typeof updateFeedbackSchema>
) => {
  try {
    const response = await axiosInstance.patch(
      `/feedbacks/${feedbackId}`,
      payload
    );
    revalidateTag("feedbacks");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteFeedback = async (feedbackId: string) => {
  try {
    const response = await axiosInstance.delete(`/feedbacks/${feedbackId}`);
    revalidateTag("feedbacks");
    return response.data;
  } catch (error) {
    return error;
  }
};
