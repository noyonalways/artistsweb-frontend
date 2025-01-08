"use client";

import Form from "@/components/form/form";
import Input from "@/components/form/input";
import Label from "@/components/form/label";
import Textarea from "@/components/form/textarea";
import { serviceSchema } from "@/schemas/service";
import { createService } from "@/service/service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { toast } from "sonner";
import { z } from "zod";

const AddService = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: z.infer<typeof serviceSchema>) => {
    try {
      setLoading(true);
      const response = await createService(data);

      if (!response.success) {
        toast.error(response?.message);
        return;
      }

      toast.success(response?.message);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="bg-white p-2 lg:p-6 lg:rounded-lg lg:shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">
          Add New Service
        </h1>

        <Form onSubmit={onSubmit} resolver={zodResolver(serviceSchema)}>
          <div className="space-y-6">
            <div>
              <Label htmlFor="name">Service Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter service name"
                className="w-full px-3 py-2 rounded-md"
              />
            </div>

            <div>
              <Label htmlFor="description">Description (Optional)</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Enter service description"
                className="w-full px-3 py-2 rounded-md min-h-[120px] resize-y"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <CgSpinner size={24} className="animate-spin mx-auto" />
              ) : (
                <span>Add Service</span>
              )}
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddService;
