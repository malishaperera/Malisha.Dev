"use client";
import React from "react";
import ProjectLayout from "./ProjectLayout";
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
const ProjectList = ({ projects }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-4xl px-4 mx-auto grid gap-6 md:gap-8"
    >
      {projects.map((project, index) => (
        <ProjectLayout 
          key={index} 
          {...project}
        />
      ))}
    </motion.div>
  );
};

export default ProjectList;