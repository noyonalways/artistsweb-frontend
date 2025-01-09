"use client";

import Button from "@/components/ui/button";
import { motion } from "framer-motion";
import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";
import { SiAwwwards } from "react-icons/si";
import FooterBoxAnimation from "./footer-box-animation";

const FooterAnimation = () => {
  return (
    <>
      <div className="flex flex-col gap-y-8 lg:gap-y-0 lg:flex-row lg:justify-between">
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-semibold text-2xl lg:text-[2.778vw] w-full lg:max-w-4xl leading-snug"
          >
            We love crafting unforgettable digital experiences, brands and
            websites with people like you.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="space-y-2 lg:space-y-4"
          >
            <h3 className="text-[#71777e]">Get in touch</h3>
            <div className="flex flex-col space-y-2 lg:space-y-4">
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-lg lg:text-3xl font-semibold"
                href="#"
              >
                +44 207 112 82 85
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="text-lg lg:text-3xl font-semibold"
                href="#"
              >
                contact@artistsweb.com
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="text-lg lg:text-3xl font-semibold"
                href="#"
              >
                Artistsweb, 18 Soho Square, London, W1D 3QL, United Kingdom
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="w-full lg:max-w-[536px] flex flex-col-reverse lg:flex-col">
          <FooterBoxAnimation
            className="mb-4 lg:mb-0"
            bgColor="bg-foreground"
            delay={0}
          >
            <div className="flex items-center w-full py-3 lg:py-4 px-5 lg:px-6 text-background justify-between rounded-3xl lg:rounded-[32px]">
              <h3 className="text-lg lg:text-xl">Follow us</h3>
              <div className="flex items-center lg:space-x-2">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  className="text-xl lg:text-2xl border-2 border-transparent hover:border-primary p-3 rounded-full duration-[400ms]"
                  href="#"
                >
                  <BsInstagram />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  className="text-xl lg:text-2xl border-2 border-transparent hover:border-primary p-3 rounded-full duration-[400ms]"
                  href="#"
                >
                  <BsFacebook />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  className="text-xl lg:text-2xl border-2 border-transparent hover:border-primary p-3 rounded-full duration-[400ms]"
                  href="#"
                >
                  <BsTwitterX />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  className="text-xl lg:text-2xl border-2 border-transparent hover:border-primary p-3 rounded-full duration-[400ms]"
                  href="#"
                >
                  <SiAwwwards className="scale-150" />
                </motion.a>
              </div>
            </div>
          </FooterBoxAnimation>

          <FooterBoxAnimation className="lg:mt-10 mb-6 lg:mb-0" delay={0.3}>
            <div className="p-6 lg:p-14">
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
          </FooterBoxAnimation>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.8 }}
        className="flex flex-col gap-y-2 lg:gap-y-0 lg:flex-row lg:justify-between items-center mt-10"
      >
        <p className="text-[#71777e]">
          &copy; {new Date().getFullYear()} Artistweb Ltd . All rights reserved
        </p>
        <div className="flex gap-x-6">
          <a className="text-[#71777e] hover:text-foreground" href="#">
            Privacy Policy
          </a>
          <a className="text-[#71777e] hover:text-foreground" href="#">
            Terms & Conditions
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default FooterAnimation;
