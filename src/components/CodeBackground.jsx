// components/CodeBackground.jsx
"use client";
import { motion } from "framer-motion";

const CodeBackground = () => {
  const codeLines = [
    "npm install innovation",
    "const creativity = new InfiniteIdeas();",
    "function developSolution() {",
    "  return <AwesomeProject />;",
    "}",
    "// Digital craftsmanship at its finest",
    "docker-compose up --build",
    "git push origin masterpiece",
  ];

  return (
    <div className="fixed inset-0 -z-40 overflow-hidden opacity-20">
      {codeLines.map((line, index) => (
        <motion.div
          key={index}
          initial={{ x: -100, opacity: 0 }}
          animate={{ 
            x: ["-100%", "100%"], 
            opacity: [0, 0.3, 0] 
          }}
          transition={{
            duration: 15 + index * 2,
            repeat: Infinity,
            delay: index * 0.5,
          }}
          className="absolute whitespace-nowrap text-cyan-400/30 font-mono text-sm"
          style={{ top: `${(index + 1) * 12}%` }}
        >
          {line}
        </motion.div>
      ))}
    </div>
  );
};

export default CodeBackground;