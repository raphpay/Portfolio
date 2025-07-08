import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

interface SectionProps {
  children: React.ReactNode;
  id: string;
}

const Section: React.FC<SectionProps> = ({ children, id }) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    exit: { opacity: 0, y: -40, transition: { duration: 0.5 } },
  };

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

export default Section;
