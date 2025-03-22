"use client";
import React from "react";
import { motion } from "framer-motion";
import ItemLayout from "./ItemLayout";
import { FaHtml5, FaCss3Alt, FaJava, FaPython, FaReact, FaBootstrap } from "react-icons/fa";
import {
    SiJavascript,
    SiSpringboot,
    SiRedux,
    SiNextdotjs,
    SiTailwindcss,
    SiMongodb,
    SiExpress,
    SiNodedotjs,
    SiPostman
} from "react-icons/si";

const Skills = () => {
    const skills = [
        {
            category: "Languages",
            items: [
                { name: "HTML5", icon: <FaHtml5 />, level: 95 },
                { name: "CSS3", icon: <FaCss3Alt />, level: 90 },
                { name: "JavaScript", icon: <SiJavascript />, level: 85 },
                { name: "Java", icon: <FaJava />, level: 80 },
                { name: "Python", icon: <FaPython />, level: 75 },
            ],
        },
        {
            category: "Frameworks & Libraries",
            items: [
                { name: "React", icon: <FaReact />, level: 85 },
                { name: "Next.js", icon: <SiNextdotjs />, level: 80 },
                { name: "Redux", icon: <SiRedux />, level: 75 },
                { name: "Spring Boot", icon: <SiSpringboot />, level: 70 },
                { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 90 },
                { name: "Bootstrap", icon: <FaBootstrap />, level: 85 },
            ],
        },
        {
            category: "Tools & Technologies",
            items: [
                { name: "MERN Stack", icon: <SiMongodb />, level: 85 },
                { name: "Node.js", icon: <SiNodedotjs />, level: 80 },
                { name: "Express.js", icon: <SiExpress />, level: 75 },
                { name: "Postman", icon: <SiPostman />, level: 90 },
            ],
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4">
            <ItemLayout className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl">
                <div className="space-y-12">
                    {skills.map((category, catIdx) => (
                        <motion.div
                            key={catIdx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 * catIdx }}
                        >
                            <h3 className="text-2xl font-semibold mb-8 text-cyan-400">
                                {category.category}
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                                {category.items.map((skill, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ scale: 1.05 }}
                                        className="p-6 rounded-xl bg-gray-800/50 border border-cyan-400/20
                    backdrop-blur-sm hover:border-cyan-400/40 transition-all"
                                    >
                                        <div className="flex flex-col items-center gap-4 mb-4">
                      <span className="text-4xl text-cyan-400">
                        {skill.icon}
                      </span>
                                            <span className="font-medium text-gray-300">{skill.name}</span>
                                        </div>
                                        <div className="relative pt-2">
                                            <div className="h-2 bg-gray-700 rounded-full">
                                                <div
                                                    className="absolute h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-500"
                                                    style={{ width: `${skill.level}%` }}
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </ItemLayout>
        </div>
    );
};

export default Skills;