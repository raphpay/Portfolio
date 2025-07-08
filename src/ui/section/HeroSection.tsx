import { motion } from "framer-motion";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
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
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Profile Photo Placeholder */}
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-indigo-700 via-purple-700 to-fuchsia-700 shadow-xl flex items-center justify-center mb-8 border-4 border-indigo-900">
          <span className="text-4xl md:text-5xl text-white font-bold select-none">
            👤
          </span>
        </div>
        {/* Headline */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-black text-center mb-4 leading-tight">
          Bonjour, Je suis{" "}
          <span className="text-fuchsia-400">Raphaël Payet</span>
          ,<br />
          un développeur Web & Mobile.
        </h1>
        {/* Description */}
        <p className="text-lg md:text-xl text-gray-500 text-center max-w-xl font-medium">
          Je designe et crée des sites-web modernes et des applications mobiles
          qui sont rapides, réactives et orientées utilisateurs. Je me
          spécialise dans le développement React pour le web, et
          React-Native/SwiftUI pour le développement mobile.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
