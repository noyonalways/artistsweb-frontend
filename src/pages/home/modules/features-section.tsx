const FeaturedSection = () => {
  return (
    <section className="relative my-10 lg:my-28">
      <div className="grid items-center justify-center lg:h-[667px] h-[250px]">
        <div className="text-5xl lg:text-[5.9vw] space-y-1 lg:space-y-3 font-semibold leading-none w-fit">
          <h1>Crafting digital</h1>
          <h1 className="text-right bg-clip-text text-transparent bg-gradient-to-r from-primary to-foreground">
            experiences
          </h1>
          <h1>since 2004</h1>
        </div>
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
