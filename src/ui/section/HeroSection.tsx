import React from "react";
import AnimatedBackgroundShape from "../components/AnimatedBackgroundShape";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <AnimatedBackgroundShape />
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
