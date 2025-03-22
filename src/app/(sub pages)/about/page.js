"use client";

import Image from "next/image";
import bg from "../../../../public/background/about3.jpeg";
import RenderModel from "@/components/RenderModel";
import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";
import Laptop from "@/components/models/Lap";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* Background Image */}
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      {/* 3D Model Section */}
      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-[45%] sm:top-1/2 -translate-y-1/2 left-0 flex justify-center">
        <RenderModel>
          {/* <HatModel /> */}
          <Laptop />
        </RenderModel>
      </div>

      {/* Text & Profile Section */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center pt-20 sm:pt-32">
        <div className="absolute flex flex-col items-center text-center top-[58%] sm:top-[68%] left-1/2 -translate-y-1/2 -translate-x-1/2 gap-4">
          {/* Animated Heading */}
          <motion.h1
            className="font-bold text-3xl xs:text-4xl sm:text-6xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
              {`Hey, I'm Malisha Perera`}
          </motion.h1>

          {/* Animated Subtitle (Fullstack Developer) */}
          <motion.p
            className="font-semibold text-lg sm:text-xl text-accent"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Fullstack Developer
          </motion.p>

          {/* Animated Description */}
          <motion.p
            className="font-light text-foreground text-lg sm:text-xl"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Meet the creator behind this portfolio.
          </motion.p>
        </div>
      </div>

      {/* About Section */}
      <AboutDetails />
    </>
  );
}
