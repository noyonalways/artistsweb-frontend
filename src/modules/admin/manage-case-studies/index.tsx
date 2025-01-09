"use client";

import Form from "@/components/form/form";
import Input from "@/components/form/input";
import Label from "@/components/form/label";
import Select from "@/components/form/select";
import Switch from "@/components/form/switch";
import { API_BASE_URL } from "@/config/environment";
import { updateCaseStudySchema } from "@/schemas/caseStudy";
import { deleteCaseStudy, updateCaseStudy } from "@/service/caseStudy";
import { TCaseStudy } from "@/types/caseStudy";
import { TService } from "@/types/service";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { toast } from "sonner";
import { z } from "zod";

interface IProps {
  caseStudies: TCaseStudy[];
}

const ManageCaseStudies = ({ caseStudies }: IProps) => {
  const [editingCaseStudy, setEditingCaseStudy] = useState<TCaseStudy | null>(
    null
  );
  const [updating, setUpdating] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [services, setServices] = useState<TService[]>([]);
  const [loadingServices, setLoadingServices] = useState(false);

  // Fetch services once when component mounts
  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoadingServices(true);
        const response = await fetch(`${API_BASE_URL}/services`);
        const data = await response.json();
        setServices(data?.data);
      } catch (error) {
        console.error("Failed to fetch services:", error);
        toast.error("Failed to load services");
      } finally {
        setLoadingServices(false);
      }
    };

    fetchServices();
  }, []); // Empty dependency array means it runs once on mount

  const handleUpdate = async (data: z.infer<typeof updateCaseStudySchema>) => {
    if (!editingCaseStudy) return;

    try {
      setUpdating(true);
      const response = await updateCaseStudy(editingCaseStudy._id, data);

      if (!response.success) {
        toast.error(response.message);
        return;
      }

      toast.success(response.message, {
        id: "case-study-mutation",
      });
      setEditingCaseStudy(null);
    } catch {
      toast.error("Failed to update case study");
    } finally {
      setUpdating(false);
    }
  };

  const handleDelete = async (caseStudyId: string) => {
    try {
      setDeleting(caseStudyId);
      const response = await deleteCaseStudy(caseStudyId);

      if (!response.success) {
        toast.error(response.message);
        return;
      }

      toast.success(response.message, {
        id: "case-study-mutation",
      });
    } catch {
      toast.error("Failed to delete case study");
    } finally {
      setDeleting(null);
    }
  };

  return (
    <div className="space-y-6">
      {editingCaseStudy ? (
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Edit Case Study</h2>
            <button
              onClick={() => setEditingCaseStudy(null)}
              className="text-gray-500 hover:text-gray-700"
            >
              Cancel
            </button>
          </div>
          <Form
            onSubmit={handleUpdate}
            resolver={zodResolver(updateCaseStudySchema)}
            defaultValues={{
              name: editingCaseStudy.name,
              image: editingCaseStudy.image,
              service: editingCaseStudy.service._id,
              isLatest: editingCaseStudy.isLatest,
            }}
          >
            <div className="space-y-4">
              <div>
                <Label htmlFor="service">Service</Label>
                <Select
                  id="service"
                  name="service"
                  options={services?.map((service) => ({
                    value: service._id,
                    label: service.name,
                  }))}
                  className="w-full px-3 py-2 rounded-md"
                  disabled={loadingServices}
                />
                {loadingServices && (
                  <p className="text-sm text-gray-500 mt-1">
                    Loading services...
                  </p>
                )}
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
                disabled={updating}
                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {updating ? (
                  <CgSpinner size={24} className="animate-spin mx-auto" />
                ) : (
                  "Update Case Study"
                )}
              </button>
            </div>
          </Form>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="divide-y">
            {caseStudies?.map((caseStudy) => (
              <div
                key={caseStudy._id}
                className="p-4 flex items-center justify-between hover:bg-gray-50"
              >
                <div className="flex items-center gap-4">
                  <Image
                    height={100}
                    width={100}
                    src={caseStudy.image}
                    alt={caseStudy.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">
                      {caseStudy.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Service: {caseStudy.service.name}
                    </p>
                    {caseStudy.isLatest && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Latest
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setEditingCaseStudy(caseStudy)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
                  >
                    <FiEdit2 size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(caseStudy._id)}
                    disabled={deleting === caseStudy._id}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-full disabled:opacity-50"
                  >
                    {deleting === caseStudy._id ? (
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

export default ManageCaseStudies;
