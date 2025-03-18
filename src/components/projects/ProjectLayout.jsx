import Link from "next/link";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const ProjectLink = motion(Link);
const ProjectLayout = ({
                         name,
                         description,
                         date,
                         demoLink,
                         techStack,
                         image
                       }) => {
  return (
      <ProjectLink
          variants={item}
          href={demoLink}
          target="_blank"
          className="group relative flex flex-col md:flex-row items-center justify-between w-full p-6 rounded-xl backdrop-blur-sm bg-gradient-to-b from-gray-900/50 to-gray-800/20 border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]"
      >
        {/* Image Container */}
          <div className="relative w-full md:w-1/3 h-48 mb-4 md:mb-0 md:mr-6 rounded-lg overflow-hidden">
              <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  placeholder="blur"
              />
          </div>

        {/* Content Container */}
        <div className="flex-1 w-full">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-lg font-semibold text-cyan-400">{name}</h2>
            <span className="text-gray-400 group-hover:text-cyan-400 transition-colors">
            ↗
          </span>
          </div>
          <p className="text-gray-300 text-sm mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech, index) => (
                <span
                    key={index}
                    className="px-3 py-1 text-xs font-mono bg-gray-800 rounded-full text-cyan-300"
                >
              {tech}
            </span>
            ))}
          </div>
          <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
            })}
          </span>
            <div className="inline-flex items-center px-5 py-2 bg-cyan-500/10 border border-cyan-400/30 rounded-full text-cyan-300 text-sm hover:bg-cyan-500/20 transition-colors">
              View Demo
            </div>
          </div>
        </div>
      </ProjectLink>
  );
};

export default ProjectLayout;