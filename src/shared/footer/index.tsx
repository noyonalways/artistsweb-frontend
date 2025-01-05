import Button from "@/components/ui/button";
import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";
import { SiAwwwards } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="py-10 lg:py-28">
      <div className="container">
        <div className="flex flex-col gap-y-8 lg:gap-y-0 lg:flex-row lg:justify-between">
          <div className="space-y-6">
            <h1 className="font-semibold text-2xl lg:text-[2.778vw] w-full lg:max-w-4xl leading-snug">
              We love crafting unforgettable digital experiences, brands and
              websites with people like you.
            </h1>
            <div className="space-y-2 lg:space-y-4">
              <h3 className="text-[#71777e]">Get in touch</h3>
              <div className="flex flex-col space-y-2 lg:space-y-4">
                <a className="text-lg lg:text-3xl font-semibold" href="#">
                  +44 207 112 82 85
                </a>
                <a className="text-lg lg:text-3xl font-semibold" href="#">
                  contact@artistsweb.com
                </a>
                <a className="text-lg lg:text-3xl font-semibold" href="#">
                  Artistsweb, 18 Soho Square, London, W1D 3QL, United Kingdom
                </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:max-w-[536px] flex flex-col-reverse lg:flex-col">
            <div className="flex items-center bg-foreground w-full py-3 lg:py-4 px-5 lg:px-6 text-background justify-between rounded-3xl lg:rounded-[32px]">
              <h3 className="text-lg lg:text-xl">Follow us</h3>
              <div className="flex items-center lg:space-x-2">
                <a
                  className="text-xl lg:text-2xl border-2 border-transparent hover:border-primary p-3 rounded-full hover:scale-110 duration-[400ms]"
                  href="#"
                >
                  <BsInstagram />
                </a>
                <a
                  className="text-xl lg:text-2xl border-2 border-transparent hover:border-primary p-3 rounded-full hover:scale-110 duration-[400ms]"
                  href="#"
                >
                  <BsFacebook />
                </a>
                <a
                  className="text-xl lg:text-2xl border-2 border-transparent hover:border-primary p-3 rounded-full hover:scale-110 duration-[400ms]"
                  href="#"
                >
                  <BsTwitterX />
                </a>
                <a
                  className="text-xl lg:text-2xl border-2 border-transparent hover:border-primary p-3 rounded-full hover:scale-110 duration-[400ms]"
                  href="#"
                >
                  <SiAwwwards className="scale-150" />
                </a>
              </div>
            </div>

            <div className="bg-[#ecf1f4] rounded-3xl lg:rounded-[32px] lg:mt-10 mb-4 lg:mb0 p-6 lg:p-14">
              <h1 className="text-2xl lg:text-5xl font-semibold text-center mb-4 lg:mb-6">
                Let&apos;s get started
              </h1>
              <p className="text-center mb-6 lg:mb-8">
                We&apos;d love to hear about your project.
              </p>
              <Button className="h-12 lg:h-[72px] w-full bg-primary text-lg lg:text-3xl font-medium lg:font-semibold text-white hover:scale-105 duration-200">
                Get in touch
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 lg:gap-y-0 lg:flex-row lg:justify-between items-center mt-10">
          <p className="text-[#71777e]">
            &copy; {new Date().getFullYear()} Artistweb Ltd . All rights
            reserved
          </p>
          <div className="flex gap-x-6">
            <a className="text-[#71777e] hover:text-foreground" href="#">
              Privacy Policy
            </a>
            <a className="text-[#71777e] hover:text-foreground" href="#">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
