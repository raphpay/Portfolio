import { motion } from "framer-motion";
import React from "react";

const AnimatedBackgroundShape: React.FC = () => {
  return (
    <>
      {/* Animated Background Shape */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-0"
        initial={{ scale: 0.9, opacity: 0.5 }}
        animate={{ scale: 1.05, opacity: 0.7 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="w-80 h-80 md:w-[32rem] md:h-[32rem] rounded-full bg-gradient-to-tr from-indigo-800/40 via-purple-700/30 to-fuchsia-700/20 blur-2xl shadow-2xl"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </>
  );
};

export default AnimatedBackgroundShape;
