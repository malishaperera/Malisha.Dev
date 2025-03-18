"use client";
import React from "react";
import Image from "next/image";
import ItemLayout from "./ItemLayout";
import { motion } from "framer-motion";
import Skills from "./skil";

const AboutDetails = () => {
  return (
    <section className="relative w-full h-full overflow-y-auto py-20">
      <div className="container mx-auto px-4">
        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-8">
            <ItemLayout className="flex flex-col md:flex-row items-center gap-8 p-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0"
              >
                <Image
                  src="/profile.jpg"
                  alt="Profile"
                  width={300}
                  height={400}
                  className="rounded-2xl shadow-xl"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Full Stack Developer
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  My journey in web development is powered by an array of mystical
                  tools and languages, with JavaScript casting the core of my
                  enchantments. I wield frameworks like React.js and Next.js with
                  precision, crafting seamless portals (websites) that connect
                  realms (users) across the digital universe.
                </p>
              </motion.div>
            </ItemLayout>
          </div>

          {/* Stats Section */}
          <div className="lg:col-span-4 space-y-8">
            <ItemLayout className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-cyan-400">5+</div>
                <div className="text-gray-400 mt-2">Projects Completed</div>
              </motion.div>
            </ItemLayout>

            <ItemLayout className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-cyan-400">2+</div>
                <div className="text-gray-400 mt-2">Years of Field Experience</div>
              </motion.div>
            </ItemLayout>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
           My Skill 🧠
          </motion.h2>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;