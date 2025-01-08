"use server";

import { API_BASE_URL } from "@/config/environment";
import axiosInstance from "@/lib/axios";
import { serviceSchema } from "@/schemas/service";
import { revalidateTag } from "next/cache";
import { z } from "zod";

// Accept any key-value pairs as params
type GetServicesParams = Record<string, string | number | boolean>;

export const getServices = async (params?: GetServicesParams) => {
  try {
    const url = new URL(`${API_BASE_URL}/services`);

    // Add all params dynamically if they exist
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, String(value));
      });
    }

    const res = await fetch(url.toString(), {
      cache: "no-cache",
      next: {
        tags: ["services"],
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

export const createService = async (payload: z.infer<typeof serviceSchema>) => {
  try {
    const response = await axiosInstance.post("/services", payload);

    revalidateTag("services");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const updateService = async (
  serviceId: string,
  payload: z.infer<typeof serviceSchema>
) => {
  try {
    const response = await axiosInstance.patch(
      `/services/${serviceId}`,
      payload
    );
    revalidateTag("services");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteService = async (serviceId: string) => {
  try {
    const response = await axiosInstance.delete(`/services/${serviceId}`);
    revalidateTag("services");
    return response.data;
  } catch (error) {
    return error;
  }
};
