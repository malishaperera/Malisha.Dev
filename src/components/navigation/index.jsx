"use client";
import { BtnList } from "@/app/data";
import React from "react";
import NavButton from "./NavButton";
import useScreenSize from "../hooks/useScreenSize";
import ResponsiveComponent from "../ResponsiveComponent";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};
const Navigation = () => {
  const angleIncrement = 360 / BtnList.length;
  const size = useScreenSize();

  const isLarge = size >= 1024;
  const isMedium = size >= 768;

  return (
    <div className="w-full fixed h-screen flex items-center justify-center">
      <ResponsiveComponent>
        {({ size }) =>
          size && size >= 480 ? (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="w-max flex items-center justify-center relative hover:pause animate-spin-slow group"
            >
              {/* h1   */}
              {BtnList.map((btn, index) => {
                // Circle calculation
                const angleRad = (index * angleIncrement * Math.PI) / 180;
                const radius = isLarge
                  ? "calc(20vw - 1rem)"
                  : isMedium
                  ? "calc(30vw - 1rem)"
                  : "calc(40vw - 1rem)";
                const x = `calc(${radius} * ${Math.cos(angleRad)})`;
                const y = `calc(${radius} * ${Math.sin(angleRad)})`;

                return <NavButton key={btn.label} x={x} y={y} {...btn} />;
              })}
            </motion.div>
          ) : (
            <>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="w-full px-2.5 xs:p-0 xs:w-max flex-col space-y-4 items-start  flex xs:items-center justify-center relative group"
              >
                {BtnList.slice(0, BtnList.length / 2).map((btn, index) => {
                  // Circle calculation

                  return <NavButton key={btn.label} x={0} y={0} {...btn} />;
                })}
              </motion.div>

              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="w-full px-2.5 xs:p-0 xs:w-max flex-col space-y-4 items-end  flex xs:items-center justify-center relative group"
              >
                {BtnList.slice(BtnList.length / 2, BtnList.length).map(
                  (btn, index) => {
                    // Circle calculation
                    return (
                      <NavButton
                        key={btn.label}
                        x={0}
                        y={0}
                        {...btn}
                        labelDirection="left"
                      />
                    );
                  }
                )}
              </motion.div>
            </>
          )
        }
      </ResponsiveComponent>
    </div>
  );
};
export default Navigation;
