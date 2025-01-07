"use client";

import Form from "@/components/form/form";
import Input from "@/components/form/input";
import Label from "@/components/form/label";
import Switch from "@/components/form/switch";
import TagInput from "@/components/form/tag-input";
import { workSchema } from "@/schemas/work";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const AddWork = () => {
  const onSubmit = (data: z.infer<typeof workSchema>) => {
    console.log(data);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white p-2 lg:p-6 lg:rounded-lg lg:shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">
          Add New Work
        </h1>

        <Form onSubmit={onSubmit} resolver={zodResolver(workSchema)}>
          <div className="space-y-6">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="Enter work title"
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

            <div>
              <Label htmlFor="tags">Tags</Label>
              <TagInput
                name="tags"
                suggestions={[
                  "Web Design",
                  "UI/UX",
                  "Branding",
                  "Development",
                  "Mobile App",
                  "Logo Design",
                  "Illustration",
                  "Motion Graphics",
                ]}
              />
              <p className="mt-1 text-sm text-gray-500">
                Type to add new tags or select from suggestions
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <Switch name="isLatest" />
              <Label>Mark as Latest Work</Label>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors duration-200"
            >
              Add Work
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddWork;
