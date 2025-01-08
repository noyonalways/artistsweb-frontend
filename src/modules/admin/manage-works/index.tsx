"use client";

import Form from "@/components/form/form";
import Input from "@/components/form/input";
import Label from "@/components/form/label";
import Switch from "@/components/form/switch";
import TagInput from "@/components/form/tag-input";
import { updateWorkSchema } from "@/schemas/work";
import { deleteWork, updateWork } from "@/service/work";
import { TWork } from "@/types/work";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { toast } from "sonner";
import { z } from "zod";

interface IProps {
  works: TWork[];
}

const ManageWorks = ({ works }: IProps) => {
  const [editingWork, setEditingWork] = useState<TWork | null>(null);
  const [updating, setUpdating] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);

  const handleUpdate = async (data: z.infer<typeof updateWorkSchema>) => {
    if (!editingWork) return;

    try {
      setUpdating(true);
      const response = await updateWork(editingWork._id, data);

      if (!response.success) {
        toast.error(response.message);
        return;
      }

      toast.success(response.message);
      setEditingWork(null);
    } catch {
      toast.error("Failed to update work");
    } finally {
      setUpdating(false);
    }
  };

  const handleDelete = async (workId: string) => {
    try {
      setDeleting(workId);
      const response = await deleteWork(workId);

      if (!response.success) {
        toast.error(response.message);
        return;
      }

      toast.success(response.message);
    } catch {
      toast.error("Failed to delete work");
    } finally {
      setDeleting(null);
    }
  };

  return (
    <div className="space-y-6">
      {editingWork ? (
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Edit Work</h2>
            <button
              onClick={() => setEditingWork(null)}
              className="text-gray-500 hover:text-gray-700"
            >
              Cancel
            </button>
          </div>
          <Form
            onSubmit={handleUpdate}
            resolver={zodResolver(updateWorkSchema)}
            defaultValues={{
              title: editingWork.title,
              image: editingWork.image,
              tags: editingWork.tags,
              isLatest: editingWork.isLatest,
            }}
          >
            <div className="space-y-4">
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
                  ]}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch name="isLatest" />
                <Label>Mark as Latest Work</Label>
              </div>

              <button
                type="submit"
                disabled={updating}
                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {updating ? (
                  <CgSpinner size={24} className="animate-spin mx-auto" />
                ) : (
                  "Update Work"
                )}
              </button>
            </div>
          </Form>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="divide-y">
            {works?.map((work) => (
              <div
                key={work._id}
                className="p-4 flex items-center justify-between hover:bg-gray-50"
              >
                <div className="flex items-center gap-4">
                  <Image
                    height={100}
                    width={100}
                    src={work.image}
                    alt={work.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {work.title}
                      </h3>
                      {work.isLatest && (
                        <span className="text-xs text-green-500">
                          Latest Work
                        </span>
                      )}
                    </div>
                    <div className="flex gap-1 md:gap-2 mt-1 flex-wrap">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-primary/10 text-primary px-[6px] p-[2px] md:px-2 md:py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setEditingWork(work)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
                  >
                    <FiEdit2 size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(work._id)}
                    disabled={deleting === work._id}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-full disabled:opacity-50"
                  >
                    {deleting === work._id ? (
                      <CgSpinner size={18} className="animate-spin" />
                    ) : (
                      <FiTrash2 size={18} />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageWorks;
