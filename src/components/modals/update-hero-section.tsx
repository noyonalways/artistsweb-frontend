"use client";

import Input from "@/components/form/input";
import Label from "@/components/form/label";
import Textarea from "@/components/form/textarea";
import { updateHeroSectionSchema } from "@/schemas/heroSection";
import { updateHeroSection } from "@/service/heroSection";
import { THeroSection } from "@/types/hereSection";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { CgSpinner } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { toast } from "sonner";
import { z } from "zod";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  initialData: THeroSection;
}

const UpdateHeroSection = ({ isOpen, onClose, initialData }: Props) => {
  const [loading, setLoading] = useState(false);

  const methods = useForm({
    resolver: zodResolver(updateHeroSectionSchema),
    defaultValues: {
      heading: initialData?.heading || "",
      subheading: initialData?.subheading || "",
      highlights:
        initialData?.highlights?.map(({ title, value }) => ({
          title,
          value,
        })) || [],
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "highlights",
  });

  const handleFieldAppend = () => {
    append({ title: "", value: "" });
  };

  const onSubmit = async (data: z.infer<typeof updateHeroSectionSchema>) => {
    try {
      setLoading(true);
      const response = await updateHeroSection(data);

      if (!response.success) {
        toast.error(response?.message, {
          id: "hero-section-mutation",
        });
        return;
      }

      toast.success(response?.message, {
        id: "hero-section-mutation",
      });
      onClose();
    } catch {
      toast.error("Something went wrong", {
        id: "hero-section-mutation",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur flex items-center justify-center"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
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

                <FormProvider {...methods}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="heading">Heading</Label>
                        <Input
                          id="heading"
                          name="heading"
                          placeholder="Enter heading"
                          className="w-full px-3 py-2 rounded-md"
                        />
                      </div>

                      <div>
                        <Label htmlFor="subheading">Subheading</Label>
                        <Textarea
                          id="subheading"
                          name="subheading"
                          placeholder="Enter subheading"
                          className="w-full px-3 py-2 rounded-md"
                        />
                      </div>

                      <div>
                        <Label>Highlights</Label>
                        <div className="space-y-4">
                          {fields?.map((field, index) => (
                            <div key={field.id} className="flex gap-4">
                              <div className="flex-1">
                                <Input
                                  name={`highlights.${index}.title`}
                                  placeholder="Title"
                                  className="w-full px-3 py-2 rounded-md"
                                />
                              </div>
                              <div className="flex-1">
                                <Input
                                  name={`highlights.${index}.value`}
                                  placeholder="Value"
                                  className="w-full px-3 py-2 rounded-md"
                                />
                              </div>
                              <button
                                onClick={() => remove(index)}
                                type="button"
                                className="text-red-500 hover:text-red-700 self-start mt-2"
                              >
                                <IoMdClose size={24} />
                              </button>
                            </div>
                          ))}
                          {(errors.highlights?.message ||
                            fields.length === 0) && (
                            <p className="text-sm text-red-500">
                              {errors.highlights?.message ||
                                "At least one highlight is required"}
                            </p>
                          )}
                          <button
                            onClick={handleFieldAppend}
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
                          <CgSpinner
                            size={24}
                            className="animate-spin mx-auto"
                          />
                        ) : (
                          "Update Hero Section"
                        )}
                      </button>
                    </div>
                  </form>
                </FormProvider>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default UpdateHeroSection;
