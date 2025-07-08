import React from "react";
import AnimatedBackgroundShape from "../components/AnimatedBackgroundShape";

const CALENDLY_URL = import.meta.env.VITE_CALENDLY_LINK;

const ContactSection: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-r from-emerald-100 via-sky-100 to-white py-20 px-4 relative overflow-hidden dark:bg-emerald-800">
      <AnimatedBackgroundShape />
      <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center">
          On discute ?
        </h2>
        <p className="text-lg md:text-xl text-emerald-800 mb-8 font-medium">
          Je suis ouvert à de nouveaux projets et aux collaborations.
          Discutons-en !
        </p>
        <div className="w-full max-w-xl rounded-xl overflow-hidden shadow-2xl border-2 border-emerald-800 bg-white/10 backdrop-blur-md dark:border-emerald-950">
          <iframe
            src={CALENDLY_URL}
            width="100%"
            height="600"
            className="w-full h-[600px] rounded-xl"
            title="Calendly - Prendre rendez-vous"
            style={{ minHeight: 400 }}
            allow="fullscreen"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
