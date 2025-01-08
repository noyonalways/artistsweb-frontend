"use client";

import Form from "@/components/form/form";
import Input from "@/components/form/input";
import Label from "@/components/form/label";
import Textarea from "@/components/form/textarea";
import { feedbackSchema } from "@/schemas/feedback";
import { deleteFeedback, updateFeedback } from "@/service/feedback";
import { TFeedback } from "@/types/feedback";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { toast } from "sonner";
import { z } from "zod";

interface IProps {
  feedbacks: TFeedback[];
}

const ManageFeedbacks = ({ feedbacks }: IProps) => {
  const [editingFeedback, setEditingFeedback] = useState<TFeedback | null>(
    null
  );
  const [updating, setUpdating] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);

  const handleUpdate = async (data: z.infer<typeof feedbackSchema>) => {
    if (!editingFeedback) return;

    try {
      setUpdating(true);
      const response = await updateFeedback(editingFeedback._id, data);

      if (!response.success) {
        toast.error(response.message);
        return;
      }

      toast.success(response.message);
      setEditingFeedback(null);
    } catch {
      toast.error("Failed to update feedback");
    } finally {
      setUpdating(false);
    }
  };

  const handleDelete = async (feedbackId: string) => {
    try {
      setDeleting(feedbackId);
      const response = await deleteFeedback(feedbackId);

      if (!response.success) {
        toast.error(response.message);
        return;
      }

      toast.success(response.message);
    } catch {
      toast.error("Failed to delete feedback");
    } finally {
      setDeleting(null);
    }
  };

  return (
    <div className="space-y-6">
      {editingFeedback ? (
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Edit Feedback</h2>
            <button
              onClick={() => setEditingFeedback(null)}
              className="text-gray-500 hover:text-gray-700"
            >
              Cancel
            </button>
          </div>
          <Form
            onSubmit={handleUpdate}
            resolver={zodResolver(feedbackSchema)}
            defaultValues={{ ...editingFeedback }}
          >
            <div className="space-y-4">
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
                  placeholder="Enter avatar URL"
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
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Enter feedback message"
                  className="w-full px-3 py-2 rounded-md min-h-[120px] resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={updating}
                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {updating ? (
                  <CgSpinner size={24} className="animate-spin mx-auto" />
                ) : (
                  "Update Feedback"
                )}
              </button>
            </div>
          </Form>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="divide-y">
            {feedbacks.map((feedback) => (
              <div
                key={feedback._id}
                className="p-4 flex items-center justify-between hover:bg-gray-50"
              >
                <div className="flex flex-col lg:flex-row gap-4">
                  <Image
                    height={100}
                    width={100}
                    src={feedback.avatar}
                    alt={feedback.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div className="">
                        <h3 className="font-medium text-gray-900">
                          {feedback.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {feedback.companyName}
                        </p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => setEditingFeedback(feedback)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
                        >
                          <FiEdit2 size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(feedback._id)}
                          disabled={deleting === feedback._id}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-full disabled:opacity-50"
                        >
                          {deleting === feedback._id ? (
                            <CgSpinner size={18} className="animate-spin" />
                          ) : (
                            <FiTrash2 size={18} />
                          )}
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {feedback.message}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageFeedbacks;
