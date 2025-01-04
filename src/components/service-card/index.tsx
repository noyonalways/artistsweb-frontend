import Image from "next/image";
import { LiaArrowRightSolid } from "react-icons/lia";

type TService = {
  id: string;
  name: string;
  caseStudyName: string;
  isLatest: boolean;
  image: string;
  url: string;
};

interface IProps {
  service?: TService;
}

const ServiceCard = ({ service }: IProps) => {
  return (
    <div className="text-background flex justify-between group cursor-pointer">
      <h1 className="text-3xl lg:text-6xl font-semibold group-hover:scale-[0.95] group-hover:-translate-x-1 lg:group-hover:-translate-x-3 duration-200">
        {service?.name}
      </h1>
      <LiaArrowRightSolid className="lg:hidden text-2xl group-hover:translate-x-[4px] duration-200" />
      <div className="hidden opacity-0 group-hover:opacity-100 group-hover:translate-x-2 lg:flex items-center space-x-4 lg:space-x-8 duration-200">
        <div>
          <span className="text-gray-400">Latest Case Study</span>
          <h2 className="text-3xl">{service?.caseStudyName}</h2>
        </div>
        <div className="flex items-center space-x-4 lg:space-x-8">
          <Image
            width={200}
            height={200}
            className="w-20 rounded-full"
            src="/works/1.jpg"
            alt="service-image"
          />
          <LiaArrowRightSolid className="text-5xl" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
