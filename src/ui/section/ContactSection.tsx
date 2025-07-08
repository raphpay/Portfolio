import React from "react";
import AnimatedBackgroundShape from "../components/AnimatedBackgroundShape";

const CALENDLY_URL = import.meta.env.VITE_CALENDLY_LINK;

const ContactSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-fuchsia-900">
      <AnimatedBackgroundShape />
      <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
          On discute ?
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-8 font-medium">
          Je suis ouvert à de nouveaux projets et aux collaborations.
          Discutons-en !
        </p>
        <div className="w-full max-w-xl rounded-xl overflow-hidden shadow-2xl border-2 border-fuchsia-700 bg-white/10 backdrop-blur-md">
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
