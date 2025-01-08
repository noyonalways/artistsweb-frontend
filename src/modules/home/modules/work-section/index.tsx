import { getWorks } from "@/service/work";
import { TWork } from "@/types/work";
import Works from "./works";

const WorkSection = async () => {
  const res = await getWorks({ limit: 5 });
  const works: TWork[] = res?.data;

  return (
    <section>
      <Works totalWorks={res?.meta?.total} works={works} />
    </section>
  );
};

export default WorkSection;
