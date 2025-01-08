import Image from "next/image";
import BrandLogos from "./brand-logos";
import ScrollText from "./scroll-text";

const PartnerSection = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-y-10 lg:gap-y-36">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl lg:text-[3.5vw] leading-snug font-semibold">
                Your Digital Partner
              </h1>
              <p className="text-xl lg:text-3xl w-full lg:max-w-2xl !leading-snug">
                We partner with companies of all sizes to solve complex business
                challenges and define their digital strategies and objectives
                that deliver results. We help bring ideas to life and create
                brands, websites & digital products that work.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex">
                <div className="bg-foreground size-12 lg:size-[72px] flex items-center justify-center rounded-full p-3 lg:p-[16px]">
                  <Image
                    className=""
                    width={100}
                    height={100}
                    src={`/brands/bbc-1.svg`}
                    alt="bbc-logo"
                  />
                </div>
                <div className="bg-[#6d6d6d] size-12 lg:size-[72px] flex items-center justify-center rounded-full p-3 lg:p-[16px] -ml-5 lg:-ml-8">
                  <Image
                    className=""
                    width={100}
                    height={100}
                    src={`/brands/bmw-1.svg`}
                    alt="bbc-logo"
                  />
                </div>
                <div className="bg-foreground size-12 lg:size-[72px] flex items-center justify-center rounded-full p-3 lg:p-[16px] -ml-5 lg:-ml-8">
                  <Image
                    className=""
                    width={100}
                    height={100}
                    src={`/brands/costa-1.svg`}
                    alt="bbc-logo"
                  />
                </div>
              </div>
              <p className="text-base md:text-lg lg:text-2xl text-gray-600">
                Brands who&apos;ve trusted us...
              </p>
            </div>
          </div>

          <div className="bg-[#ecf1f4] flex flex-col lg:flex-row items-center lg:space-x-4 lg:px-16 lg:py-14 rounded-xl lg:rounded-[32px]">
            <div className="space-y-2 lg:space-y-0 border-b border-b-gray-300 lg:border-b-0 lg:border-r lg:border-r-gray-300 text-center px-2 lg:px-10 py-6 lg:py-14">
              <h1 className="text-3xl lg:text-[3.5vw] leading-snug font-semibold">
                20
              </h1>
              <h3 className="text-lg lg:text-3xl">Years on the market</h3>
            </div>
            <div className="space-y-2 lg:space-y-0 text-center px-2 lg:px-6  py-6 lg:py-14">
              <h1 className="text-3xl lg:text-[3.5vw] leading-snug font-semibold">
                500
              </h1>
              <h3 className="text-lg lg:text-3xl">Satisfied Customers</h3>
            </div>
          </div>
        </div>

        {/* image */}
        <div className="mt-14 lg:mt-28 rounded-3xl lg:rounded-[32px] lg:max-h-[983px] overflow-hidden">
          <Image
            width={1000}
            height={1000}
            className="w-full lg:h-screen lg:object-cover"
            src={`/partner.jpg`}
            alt="partner-section"
          />
        </div>

        <h1 className="text-3xl lg:text-[3.5vw] leading-snug font-semibold w-full lg:max-w-6xl mt-12 lg:mt-28">
          From ambitious startups to global companies, we partner with great
          businesses and industry leaders.
        </h1>

        <BrandLogos />
      </div>

      <ScrollText />

      <div className="container">
        <div className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:items-end">
          <div className="space-y-6 lg:space-y-16">
            <h1 className="text-3xl lg:text-[3.5vw] leading-snug font-semibold w-full lg:max-w-5xl mt-12 lg:mt-28">
              Let our experienced team elevate your digital goals
            </h1>
            <div className="flex space-x-6 lg:space-x-14">
              <div>
                <h2 className="text-3xl lg:text-[3.5vw] leading-snug font-semibold">
                  250
                </h2>
                <p className="text-lg lg:text-3xl">Five-Star Reviews</p>
              </div>
              <div>
                <h2 className="text-3xl lg:text-[3.5vw] leading-snug font-semibold">
                  10
                </h2>
                <p className="text-lg lg:text-3xl">In-House Experts</p>
              </div>
            </div>
          </div>

          <p className="text-xl lg:text-3xl w-full lg:max-w-2xl !leading-snug">
            We have successfully completed over 300+ projects from a variety of
            industries. In our team, designers work alongside developers and
            digital strategists, we believe this is our winning recipe for
            creating digital products that make an impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
