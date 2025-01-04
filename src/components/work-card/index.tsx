import Image from "next/image";

const tags = ["UI/UX Design", "Property Portal"];

const WorkCard = () => {
  return (
    <div className="cursor-pointer relative lg:max-w-[830px] lg:h-[710px] mx-auto bg-white rounded-3xl  overflow-hidden border-4 border-transparent hover:border-primary duration-500">
      <div>
        <Image
          width={830}
          height={710}
          src="/works/1.jpg"
          alt="Mobile Mockup"
          className="w-full"
        />
        <span className="absolute top-6 right-6 lg:top-10 lg:right-10 bg-primary text-white font-semibold py-2 px-6 rounded-full shadow-sm">
          Latest
        </span>
      </div>

      <div className="px-6 py-6 lg:px-12 lg:py-10 absolute bottom-0 bg-gradient-to-b from-transparent to-foreground w-full">
        <h3 className="text-3xl lg:text-5xl font-bold text-white">
          Romans & Partners
        </h3>
        {/* tags */}
        <div className="mt-4 lg:mt-6 flex gap-3 lg:gap-4 flex-wrap">
          {tags.map((tag) => {
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
