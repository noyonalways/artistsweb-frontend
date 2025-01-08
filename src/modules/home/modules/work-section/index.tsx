import Button from "@/components/ui/button";
import { getWorks } from "@/service/work";
import { TWork } from "@/types/work";
import Works from "./works";

const WorkSection = async () => {
  const res = await getWorks();
  const works: TWork[] = res?.data;
  return (
    <section className="pb-10">
      <div className="container">
        <div className="flex gap-y-14 lg:gap-x-10 flex-col lg:flex-row">
          {/* title */}
          <div className="flex flex-col space-y-6 lg:space-y-0 w-full lg:max-w-xl">
            <div className="lg:flex-1">
              <div className="flex items-center space-x-4 lg:space-x-6 mb-4">
                <h1 className="text-3xl lg:text-6xl font-semibold">Work</h1>
                <div className="size-12 lg:size-[72px] border rounded-full flex items-center justify-center text-xl lg:text-2xl">
                  13
                </div>
              </div>
              <p className="text-lg lg:text-[28px] leading-snug w-full max-w-sm">
                A selection of our crafted work, built from scratch by our
                talented in-house team.
              </p>
            </div>

            <div className="lg:pb-6">
              <Button className="text-base h-10 w-40 lg:text-2xl lg:w-60 lg:h-[72px] font-medium">
                Case Studies
              </Button>
            </div>
          </div>

          {/* cards */}
          <Works works={works} />
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
