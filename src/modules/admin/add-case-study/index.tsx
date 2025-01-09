"use client";

import Form from "@/components/form/form";
import Input from "@/components/form/input";
import Label from "@/components/form/label";
import Select from "@/components/form/select";
import Switch from "@/components/form/switch";
import { createCaseStudySchema } from "@/schemas/caseStudy";
import { createCaseStudy } from "@/service/caseStudy";
import { TService } from "@/types/service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { toast } from "sonner";
import { z } from "zod";

interface IProps {
  services: TService[];
}

const AddCaseStudy = ({ services }: IProps) => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (data: z.infer<typeof createCaseStudySchema>) => {
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

  return (
    <div>
      <div className="bg-white p-2 lg:p-6 rounded-md shadow-sm lg:rounded-lg">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">
          Add New Case Study
        </h1>

        <Form onSubmit={onSubmit} resolver={zodResolver(createCaseStudySchema)}>
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
