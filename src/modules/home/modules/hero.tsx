import Button from "@/components/ui/button";
import { loadHeroSectionData } from "@/service/heroSection";
import { isHeroSection } from "@/typeGuard/hero-section";
import { THeroSection } from "@/types/hereSection";

const HeroSection = async () => {
  const res = await loadHeroSectionData();
  let data;
  if (isHeroSection(res?.data)) {
    data = res.data as THeroSection;
  }

  return (
    <section className="min-h-svh flex items-center justify-center bg-background">
      <div className="container">
        <div className="space-y-10 lg:space-y-28">
          <h1 className="text-[12vw] md:text-[6.5vw] lg:text-[7.75vw] lg:leading-tight font-semibold font-onest">
            {data?.heading.split(" ")[0]}{" "}
            <span className="text-transparent bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text animate-heroTextGradient bg-[length:200%_auto]">
              {data?.heading.split(" ")[1]}{" "}
            </span>
            {data?.heading.split(" ")[2]}
          </h1>

          <div className="flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row justify-between">
            <div className="flex text-2xl items-center space-x-4">
              <div className="bg-foreground text-background p-7 size-[56px] lg:size-[72px] rounded-full flex items-center justify-center">
                20
              </div>
              <div className="text-gray-700">Years on the market</div>
            </div>

            <div className="flex flex-col gap-y-6 lg:flex-row lg:items-center text-2xl lg:text-3xl lg:gap-20">
              <p className="w-full max-w-lg leading-snug">{data?.subheading}</p>

              <Button className="bg-primary text-white rounded-full px-8 w-48 lg:w-64 h-14 lg:h-[72px] hover:scale-105 duration-200 text-xl lg:text-2xl">
                Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
