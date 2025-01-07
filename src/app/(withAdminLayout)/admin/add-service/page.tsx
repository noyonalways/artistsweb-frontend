import AddService from "@/modules/admin/add-service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add Service | Admin Dashboard | Digital Agency",
  description: "Add a new service to your digital agency portfolio",
};

const AddServicePage = () => {
  return (
    <div>
      <AddService />
    </div>
  );
};

export default AddServicePage;
