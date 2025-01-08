"use client";

import Form from "@/components/form/form";
import Input from "@/components/form/input";
import Label from "@/components/form/label";
import Textarea from "@/components/form/textarea";
import { feedbackSchema } from "@/schemas/feedback";
import { createFeedback } from "@/service/feedback";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { toast } from "sonner";
import { z } from "zod";

const AddFeedback = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: z.infer<typeof feedbackSchema>) => {
    try {
      setLoading(true);
      const response = await createFeedback(data);

      if (!response.success) {
        toast.error(response?.message);
        return;
      }

      toast.success(response?.message);
    } catch {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="bg-white p-2 lg:p-6 lg:rounded-lg lg:shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">
          Add New Feedback
        </h1>

        <Form onSubmit={onSubmit} resolver={zodResolver(feedbackSchema)}>
          <div className="space-y-6">
            <div>
              <Label htmlFor="companyName">Company Name</Label>
              <Input
                id="companyName"
                name="companyName"
                placeholder="Enter company name"
                className="w-full px-3 py-2 rounded-md"
              />
            </div>

            <div>
              <Label htmlFor="avatar">Avatar URL</Label>
              <Input
                id="avatar"
                name="avatar"
                placeholder="Enter avatar image URL"
                className="w-full px-3 py-2 rounded-md"
              />
            </div>

            <div>
              <Label htmlFor="name">Client Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter client name"
                className="w-full px-3 py-2 rounded-md"
              />
            </div>

            <div>
              <Label htmlFor="message">Feedback Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Enter client feedback message"
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
                <span>Add Feedback</span>
              )}
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddFeedback;
