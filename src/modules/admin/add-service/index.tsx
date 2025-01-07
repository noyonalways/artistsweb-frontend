"use client";

import Form from "@/components/form/form";
import Input from "@/components/form/input";
import Label from "@/components/form/label";
import Textarea from "@/components/form/textarea";
import { serviceSchema } from "@/schemas/service";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const AddService = () => {
  const onSubmit = (data: z.infer<typeof serviceSchema>) => {
    console.log(data);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
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
              className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors duration-200"
            >
              Add Service
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddService;
