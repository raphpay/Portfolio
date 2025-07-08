import React from "react";
import AnimatedBackgroundShape from "../components/AnimatedBackgroundShape";

const highlight = "font-bold text-fuchsia-500";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-2">
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
          Bonjour,<br></br> je suis{" "}
          <span className={highlight}>
            Raphaël Payet,<br></br>développeur Web & Mobile
          </span>
          .
        </h1>
        {/* Description */}
        <p className="text-lg md:text-xl text-gray-500 text-center max-w-xl font-medium mb-2">
          Je conçois et développe des sites web modernes et des applications
          mobiles{" "}
          <span className={highlight}>
            rapides, intuitives et centrées sur l'utilisateur
          </span>
          .
        </p>
        <p className="text-lg md:text-xl text-gray-500 text-center max-w-xl font-medium">
          <br></br>
          Spécialisé en <span className={highlight}>React (web)</span>,{" "}
          <span className={highlight}>React Native</span> et{" "}
          <span className={highlight}>SwiftUI (mobile)</span>, j'allie{" "}
          <span className={highlight}>design réfléchi</span> et{" "}
          <span className={highlight}>performance technique</span> pour donner
          vie à vos idées, avec énergie et précision.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
