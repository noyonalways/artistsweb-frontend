"use client";

import Form from "@/components/form/form";
import Input from "@/components/form/input";
import Label from "@/components/form/label";
import Select from "@/components/form/select";
import Switch from "@/components/form/switch";
import { API_BASE_URL } from "@/config/environment";
import { caseStudySchema } from "@/schemas/case-study";
import { createCaseStudy } from "@/service/case-study";
import { TService } from "@/types/service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { toast } from "sonner";
import { z } from "zod";

const AddCaseStudy = () => {
  const [services, setServices] = useState<TService[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Fetch services
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/services`);
        const data = await response.json();
        setServices(data?.data);
      } catch (error) {
        console.error("Failed to fetch services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const onSubmit = async (data: z.infer<typeof caseStudySchema>) => {
    try {
      setSubmitting(true);
      const response = await createCaseStudy(data);

      if (!response.success) {
        toast.error(response?.message);
        return;
      }

      toast.success(response?.message);
    } catch {
      toast.error("Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div>
        <div className="bg-white p-2 lg:p-6 lg:rounded-lg lg:shadow-sm">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/3"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-10 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-white p-2 lg:p-6 lg:rounded-lg lg:shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">
          Add New Case Study
        </h1>

        <Form onSubmit={onSubmit} resolver={zodResolver(caseStudySchema)}>
          <div className="space-y-6">
            <div>
              <Label htmlFor="service">Service</Label>
              <Select
                id="service"
                name="service"
                options={services.map((service) => ({
                  key: service._id,
                  value: service._id,
                  label: service.name,
                }))}
                className="w-full px-3 py-2 rounded-md"
              />
            </div>

            <div>
              <Label htmlFor="name">Case Study Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter case study name"
                className="w-full px-3 py-2 rounded-md"
              />
            </div>

            <div>
              <Label htmlFor="image">Image URL</Label>
              <Input
                id="image"
                name="image"
                placeholder="Enter image URL"
                className="w-full px-3 py-2 rounded-md"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Switch name="isLatest" />
              <Label>Mark as Latest Case Study</Label>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <CgSpinner size={24} className="animate-spin mx-auto" />
              ) : (
                <span>Add Case Study</span>
              )}
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddCaseStudy;
