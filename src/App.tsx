import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import HeroSection from "./ui/section/HeroSection";
import OffersSection from "./ui/section/OffersSection";

const sections = [
  { key: "header", label: "Header" },
  { key: "services", label: "Services" },
  { key: "skills", label: "Skills" },
  { key: "projects", label: "Projects" },
  { key: "contact", label: "Contact" },
  { key: "extra", label: "Extra" },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  exit: { opacity: 0, y: -40, transition: { duration: 0.5 } },
};

const Section = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5, once: false });
  return (
    <motion.section
      ref={ref}
      id={id}
      className="snap-start min-h-screen w-full flex items-center justify-center bg-white"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      exit="exit"
      variants={sectionVariants}
      transition={{ duration: 0.7 }}
      style={{ scrollSnapAlign: "start" }}
    >
      {children}
    </motion.section>
  );
};

export default function App() {
  return (
    <div
      className="h-screen w-full overflow-y-scroll scroll-smooth snap-y snap-mandatory"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      {sections.map((section) => (
        <Section key={section.key} id={section.key}>
          {section.key === "header" ? (
            <HeroSection />
          ) : section.key === "services" ? (
            <OffersSection />
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-full">
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
                {section.label}
              </h1>
              <p className="text-lg text-gray-500">
                Section de démonstration: {section.label}
              </p>
            </div>
          )}
        </Section>
      ))}
    </div>
  );
}
