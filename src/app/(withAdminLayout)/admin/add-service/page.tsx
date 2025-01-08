import AddService from "@/modules/admin/add-service";
import ManageServices from "@/modules/admin/manage-services";
import { getServices } from "@/service/service";
import { TService } from "@/types/service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add Service | Admin Dashboard | Digital Agency",
  description: "Add a new service to your digital agency portfolio",
};

const AddServicePage = async () => {
  const res = await getServices();
  const services: TService[] = res?.data;

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <AddService />
      <ManageServices services={services} />
    </div>
  );
};

export default AddServicePage;
