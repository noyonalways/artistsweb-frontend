import Button from "@/components/ui/button";
import { getServices } from "@/service/service";
import { TService } from "@/types/service";
import ContactBoxAnimation from "./contact-box-animation";
import ServicesAnimation from "./services-animation";

const ContactSection = async () => {
  const res = await getServices({ limit: "6" });
  const services: TService[] = res?.data;

  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row lg:justify-between lg:items-end">
          <ServicesAnimation services={services} />

          <ContactBoxAnimation>
            <div className="w-full lg:max-w-[700px] 2xl:max-w-[974px] text-background rounded-3xl lg:rounded-[32px] p-7 lg:p-14">
              <h1 className="text-2xl lg:text-[2.5vw] leading-snug font-semibold mb-6 lg:mb-8">
                Let&apos;s start with a conversation about how we can help you!
                Get in touch, we&apos;re a nice bunch.
              </h1>
              <div className="flex items-center space-x-4">
                <Button className="bg-white text-foreground font-medium text-lg lg:text-2xl w-32 lg:w-44 lg:h-16 hover:scale-105 duration-200">
                  Let&apos;s talk
                </Button>
                <div className="border border-white/70 rounded-full text-lg lg:text-2xl py-1 lg:py-4 px-4 lg:px-8 font-medium">
                  0207 112 82 85
                </div>
              </div>
            </div>
          </ContactBoxAnimation>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
