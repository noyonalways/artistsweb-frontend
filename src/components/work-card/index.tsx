import { TWork } from "@/types/work";
import Image from "next/image";

interface IProps {
  work: TWork;
}

const WorkCard = ({ work }: IProps) => {
  return (
    <div className="cursor-pointer relative lg:min-w-[830px]  bg-white rounded-3xl  overflow-hidden border-4 border-transparent hover:border-primary duration-500">
      <div>
        <Image
          width={830}
          height={710}
          src={work.image}
          alt="Mobile Mockup"
          className="w-full lg:h-[710px] object-cover"
        />
        {work?.isLatest && (
          <span className="absolute top-6 right-6 lg:top-10 lg:right-10 bg-primary text-white font-semibold py-2 px-6 rounded-full shadow-sm">
            Latest
          </span>
        )}
      </div>

      <div className="px-6 py-6 lg:px-12 lg:py-10 absolute bottom-0 bg-gradient-to-b from-transparent to-foreground w-full">
        <h3 className="text-3xl lg:text-5xl font-bold text-white">
          {work?.title}
        </h3>
        {/* tags */}
        <div className="mt-4 lg:mt-6 flex gap-3 lg:gap-4 flex-wrap">
          {work?.tags.map((tag) => {
            return (
              <span
                key={tag + "001"}
                className="text-sm lg:text-base rounded-full text-white px-6 py-2 border border-gray-500 backdrop-blur"
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
