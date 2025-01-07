import AddWork from "@/modules/admin/add-work";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add Work | Admin Dashboard | Digital Agency",
  description: "",
};

const AddWorkPage = () => {
  return (
    <div>
      <AddWork />
    </div>
  );
};

export default AddWorkPage;
