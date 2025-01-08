import WorkCard from "@/components/work-card";
import { TWork } from "@/types/work";

interface IProps {
  works: TWork[];
}

const Works = ({ works }: IProps) => {
  return (
    <div className="flex flex-col lg:block gap-6">
      {works.map((work) => (
        <WorkCard key={work._id} work={work} />
      ))}
    </div>
  );
};

export default Works;
