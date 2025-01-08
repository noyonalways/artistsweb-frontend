"use client";

import Form from "@/components/form/form";
import Input from "@/components/form/input";
import Label from "@/components/form/label";
import Textarea from "@/components/form/textarea";
import { serviceSchema } from "@/schemas/service";
import { deleteService, updateService } from "@/service/service";
import { TService } from "@/types/service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { toast } from "sonner";
import { z } from "zod";

interface IProps {
  services: TService[];
}

const ManageServices = ({ services }: IProps) => {
  const [editingService, setEditingService] = useState<TService | null>(null);
  const [updating, setUpdating] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);

  const handleUpdate = async (data: z.infer<typeof serviceSchema>) => {
    if (!editingService) return;

    try {
      setUpdating(true);
      const response = await updateService(editingService._id, data);

      if (!response.success) {
        toast.error(response.message);
        return;
      }

      toast.success(response.message);
      setEditingService(null);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Failed to update service");
    } finally {
      setUpdating(false);
    }
  };

  const handleDelete = async (serviceId: string) => {
    try {
      setDeleting(serviceId);
      const response = await deleteService(serviceId);

      if (!response.success) {
        toast.error(response.message);
        return;
      }

      toast.success(response.message);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Failed to delete service");
    } finally {
      setDeleting(null);
    }
  };

  return (
    <div className="space-y-6">
      {editingService ? (
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Edit Service</h2>
            <button
              onClick={() => setEditingService(null)}
              className="text-gray-500 hover:text-gray-700"
            >
              Cancel
            </button>
          </div>
          <Form
            onSubmit={handleUpdate}
            resolver={zodResolver(serviceSchema)}
            defaultValues={{ ...editingService }}
          >
            <div className="space-y-4">
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
                disabled={updating}
                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {updating ? (
                  <CgSpinner size={24} className="animate-spin mx-auto" />
                ) : (
                  "Update Service"
                )}
              </button>
            </div>
          </Form>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="divide-y">
            {services.map((service) => (
              <div
                key={service._id}
                className="p-4 flex items-center justify-between hover:bg-gray-50"
              >
                <div>
                  <h3 className="font-medium text-gray-900">{service.name}</h3>
                  {service.description && (
                    <p className="text-sm text-gray-500">
                      {service.description}
                    </p>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setEditingService(service)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
                  >
                    <FiEdit2 size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(service._id)}
                    disabled={deleting === service._id}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-full disabled:opacity-50"
                  >
                    {deleting === service._id ? (
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

export default ManageServices;
