import AddWork from "@/modules/admin/add-work";
import ManageWorks from "@/modules/admin/manage-works";
import { getWorks } from "@/service/work";
import { TWork } from "@/types/work";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add Work | Admin Dashboard | Digital Agency",
  description: "Add a new work to your digital agency portfolio",
};

const AddWorkPage = async () => {
  const res = await getWorks();
  const works: TWork[] = res?.data;

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <AddWork />
      <ManageWorks works={works} />
    </div>
  );
};

export default AddWorkPage;
