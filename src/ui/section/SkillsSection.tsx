import { motion } from "framer-motion";
import {
  Cloud,
  Code2,
  Figma,
  GitBranch,
  Globe,
  Hammer,
  LayoutDashboard,
  Paintbrush2,
  Smartphone,
  Terminal,
} from "lucide-react";
import React from "react";
import reactLogo from "../../assets/react.svg";
import AnimatedBackgroundShape from "../components/AnimatedBackgroundShape";

const techStack = [
  {
    category: "Web",
    items: [
      { name: "HTML", icon: <Globe size={28} className="text-orange-500" /> },
      {
        name: "CSS",
        icon: <Paintbrush2 size={28} className="text-blue-500" />,
      },
      {
        name: "JavaScript/Typescript",
        icon: <Code2 size={28} className="text-yellow-400" />,
      },
      {
        name: "React",
        icon: <img src={reactLogo} alt="React" className="w-7 h-7" />,
      },
      {
        name: "Next.js",
        icon: <LayoutDashboard size={28} className="text-gray-900" />,
      },
    ],
  },
  {
    category: "Mobile",
    items: [
      {
        name: "React Native",
        icon: <img src={reactLogo} alt="React Native" className="w-7 h-7" />,
      },
      {
        name: "SwiftUI",
        icon: <Smartphone size={28} className="text-pink-500" />,
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "Swift (Vapor)",
        icon: <Terminal size={28} className="text-gray-700" />,
      },
      {
        name: "Firebase",
        icon: <Cloud size={28} className="text-yellow-500" />,
      },
    ],
  },
  {
    category: "Outils",
    items: [
      { name: "Git", icon: <GitBranch size={28} className="text-rose-500" /> },
      {
        name: "Figma",
        icon: <Figma size={28} className="text-emerald-500" />,
      },
      {
        name: "Firebase",
        icon: <Cloud size={28} className="text-yellow-500" />,
      },
      {
        name: "Tailwind CSS",
        icon: <Paintbrush2 size={28} className="text-sky-400" />,
      },
      { name: "Xcode", icon: <Hammer size={28} className="text-blue-400" /> },
    ],
  },
];

const badgeVariants = {
  rest: { scale: 1, y: 0, boxShadow: "0 2px 8px 0 rgba(80,80,180,0.04)" },
  hover: {
    scale: 1.08,
    y: -6,
    boxShadow: "0 8px 32px 0 rgba(80,80,180,0.10)",
    transition: { type: "spring" as const, bounce: 0.3, duration: 0.4 },
  },
};

const SkillsSection: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-r from-emerald-100 via-sky-100 to-white py-20 px-4 relative overflow-hidden dark:bg-emerald-800">
      <AnimatedBackgroundShape />
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center">
          Mes Compétences
        </h2>
        <div className="flex flex-col gap-10">
          {techStack.map((group) => (
            <div key={group.category}>
              <h3 className="text-lg md:text-2xl font-bold text-indigo-700 mb-4 pl-2">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-4">
                {group.items.map((item) => (
                  <motion.div
                    key={item.name}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 shadow-md font-semibold text-gray-800 text-base transition-colors duration-200 hover:bg-emerald-100/20 cursor-pointer dark:bg-emerald-950/80 dark:hover:bg-emerald-100/30"
                    variants={badgeVariants}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
