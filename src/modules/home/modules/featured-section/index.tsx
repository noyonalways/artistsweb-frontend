"use client";

import FeaturedAnimation from "./featured-animation";

const FeaturedSection = () => {
  return (
    <section className="relative my-10 lg:my-28">
      <div className="grid items-center justify-center lg:h-[667px] h-[250px]">
        <FeaturedAnimation />
      </div>

      {/* background */}
      <div className="section-bg -z-10">
        <div className="section-bg-item"></div>
        <div className="section-bg-item"></div>
      </div>
    </section>
  );
};

export default FeaturedSection;
