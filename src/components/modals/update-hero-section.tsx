"use client";

import Form from "@/components/form/form";
import Input from "@/components/form/input";
import Label from "@/components/form/label";
import Textarea from "@/components/form/textarea";
import { heroSectionSchema } from "@/schemas/hero-section";
import { updateHeroSection } from "@/service/heroSection";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { toast } from "sonner";
import { z } from "zod";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  initialData: z.infer<typeof heroSectionSchema>;
}

const UpdateHeroSection = ({ isOpen, onClose, initialData }: Props) => {
  const [loading, setLoading] = useState(false);

  const defaultValues = {
    heading: initialData?.heading || "",
    subheading: initialData?.subheading || "",
    highlights:
      initialData?.highlights?.map(({ title, value }) => ({
        title,
        value,
      })) || [],
  };

  const onSubmit = async (data: z.infer<typeof heroSectionSchema>) => {
    try {
      setLoading(true);
      const response = await updateHeroSection(data);

      if (!response.success) {
        toast.error(response?.message);
        return;
      }

      toast.success(response?.message);
      onClose();
    } catch {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-lg w-full max-w-2xl p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Update Hero Section</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <IoMdClose size={24} />
          </button>
        </div>

        <Form
          onSubmit={onSubmit}
          resolver={zodResolver(heroSectionSchema)}
          defaultValues={defaultValues}
        >
          <div className="space-y-6">
            <div>
              <Label htmlFor="heading">Heading</Label>
              <Input
                id="heading"
                name="heading"
                placeholder="Enter heading"
                className="w-full px-3 py-2 rounded-md  focus:border-primary outline-none"
              />
            </div>

            <div>
              <Label htmlFor="subheading">Subheading</Label>
              <Textarea
                id="subheading"
                name="subheading"
                placeholder="Enter subheading"
                className="w-full px-3 py-2 rounded-md focus:border-primary outline-none"
              />
            </div>

            <div>
              <Label>Highlights</Label>
              <div className="space-y-4">
                {defaultValues?.highlights?.map((field, index) => (
                  <div key={field.title} className="flex gap-4">
                    <div className="flex-1">
                      <Input
                        name={`highlights.${index}.title`}
                        placeholder="Title"
                        className="w-full px-3 py-2 rounded-md  focus:border-primary outline-none"
                      />
                    </div>
                    <div className="flex-1">
                      <Input
                        name={`highlights.${index}.value`}
                        placeholder="Value"
                        className="w-full px-3 py-2 rounded-md  focus:border-primary outline-none"
                      />
                    </div>
                    <button
                      type="button"
                      className="text-red-500 hover:text-red-700 self-start mt-2"
                    >
                      <IoMdClose size={24} />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="text-primary hover:text-primary/80 text-sm"
                >
                  + Add Highlight
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <CgSpinner size={24} className="animate-spin mx-auto" />
              ) : (
                "Update Hero Section"
              )}
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default UpdateHeroSection;
