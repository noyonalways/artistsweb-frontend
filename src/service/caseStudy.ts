"use server";

import { API_BASE_URL } from "@/config/environment";
import axiosInstance from "@/lib/axios";
import {
  createCaseStudySchema,
  updateCaseStudySchema,
} from "@/schemas/caseStudy";
import { revalidateTag } from "next/cache";
import { z } from "zod";

type GetCaseStudiesParams = Record<string, string | number | boolean>;

export const getCaseStudies = async (params?: GetCaseStudiesParams) => {
  try {
    const url = new URL(`${API_BASE_URL}/case-studies`);

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, String(value));
      });
    }

    const res = await fetch(url.toString(), {
      cache: "no-cache",
      next: {
        tags: ["case-studies"],
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

export const createCaseStudy = async (
  payload: z.infer<typeof createCaseStudySchema>
) => {
  try {
    const response = await axiosInstance.post("/case-studies", payload);
    revalidateTag("case-studies");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const updateCaseStudy = async (
  caseStudyId: string,
  payload: z.infer<typeof updateCaseStudySchema>
) => {
  try {
    const response = await axiosInstance.patch(
      `/case-studies/${caseStudyId}`,
      payload
    );
    revalidateTag("case-studies");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteCaseStudy = async (caseStudyId: string) => {
  try {
    const response = await axiosInstance.delete(`/case-studies/${caseStudyId}`);
    revalidateTag("case-studies");
    return response.data;
  } catch (error) {
    return error;
  }
};
