import { ImSpinner8 } from "react-icons/im";

const FeedbackSection = () => {
  return (
    <section className="bg-foreground text-background py-10 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-[.8rem] lg:px-0">
        <h1 className="text-3xl lg:text-[3.5vw] font-semibold mb-6 lg:mb-16">
          Client Feedback
        </h1>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <h3 className="lg:text-2xl">
            We&apos;re collaborators - We build tight-knit partnerships with our
            clients.
          </h3>
          <div className="hidden lg:inline-flex lg:space-x-4 lg:items-center text-[#71777e]">
            <ImSpinner8 className="animate-spin text-4xl" />
            <p className="text-xl">Keep scrolling</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
