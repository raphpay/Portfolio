import { motion } from "framer-motion";
import { Code, LayoutDashboard, PenTool, Smartphone } from "lucide-react";
import React from "react";

const services = [
  {
    icon: <Code size={36} className="text-indigo-500 mb-2" />,
    title: "Développement Web",
    points: [
      "Sites vitrines modernes",
      "Applications React performantes",
      "SEO & accessibilité intégrés",
    ],
  },
  {
    icon: <Smartphone size={36} className="text-fuchsia-500 mb-2" />,
    title: "Applications Mobiles",
    points: [
      "Apps React Native & SwiftUI",
      "Expérience fluide sur iOS/Android",
      "Déploiement App Store & Play Store",
    ],
  },
  {
    icon: <PenTool size={36} className="text-purple-500 mb-2" />,
    title: "UI/UX Prototypage",
    points: [
      "Maquettes interactives",
      "Design centré utilisateur",
      "Tests d'utilisabilité",
    ],
  },
  {
    icon: <LayoutDashboard size={36} className="text-emerald-500 mb-2" />,
    title: "Dashboards & Outils",
    points: [
      "Interfaces d'administration",
      "Visualisation de données",
      "Automatisation de tâches",
    ],
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, bounce: 0.2, duration: 0.8 },
  },
};

const OffersSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center">
          Ce que je propose
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-100 rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-gray-50 group"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 8px 32px 0 rgba(80,80,180,0.10)",
              }}
            >
              {service.icon}
              <h3 className="text-lg font-bold text-gray-900 mb-3 mt-2 text-center">
                {service.title}
              </h3>
              <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside text-left">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
