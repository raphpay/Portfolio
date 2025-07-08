import React from "react";
import PhotoPro from "../../assets/photo-pro-rounded.png";
import AnimatedBackgroundShape from "../components/AnimatedBackgroundShape";

const highlight = "font-bold text-emerald-500 dark:text-emerald-100";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-r from-emerald-100 via-sky-100 to-white py-20 px-4 relative overflow-hidden dark:bg-emerald-800">
      <AnimatedBackgroundShape />
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Profile Photo Placeholder */}
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-emerald-800 via-emerald-500 to-emerald-100 shadow-xl flex items-center justify-center mb-8 border-4 border-emerald-950">
          <img
            src={PhotoPro}
            alt="ProfilePic"
            className="object-contain w-32 h-32 md:w-40 md:h-40 "
          />
        </div>
        {/* Headline */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-black text-center mb-4 leading-tight dark:text-white">
          Bonjour,<br></br> je suis{" "}
          <span className={highlight}>
            Raphaël Payet,<br></br>développeur Web & Mobile
          </span>
          .
        </h1>
        {/* Description */}
        <p className="text-lg md:text-xl text-gray-500 text-center max-w-xl font-medium mb-2 dark:text-sky-100">
          Je conçois et développe des sites web modernes et des applications
          mobiles{" "}
          <span className={highlight}>
            rapides, intuitives et centrées sur l'utilisateur
          </span>
          .
        </p>
        <p className="text-lg md:text-xl text-gray-500 text-center max-w-xl font-medium dark:text-sky-100">
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
