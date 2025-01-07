"use client";

import Form from "@/components/form/form";
import Input from "@/components/form/input";
import Label from "@/components/form/label";
import Textarea from "@/components/form/textarea";
import { feedbackSchema } from "@/schemas/feedback";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const AddFeedback = () => {
  const onSubmit = (data: z.infer<typeof feedbackSchema>) => {
    console.log(data);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
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
              className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors duration-200"
            >
              Add Feedback
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddFeedback;
