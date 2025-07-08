import { motion } from "framer-motion";
import { Globe, Smartphone, Store, Workflow } from "lucide-react";
import React from "react";

const services = [
  {
    icon: <Store size={36} className="text-indigo-500 mb-2" />,
    title: "Commerce et restaurants locaux",
    description:
      "Boostez la visibilité de votre commerce ou restaurant avec un site vitrine moderne ou une mini-application simple et efficace, adaptée à vos besoins locaux.",
    points: [
      "Site web ou mini app (menu, contact, réservation, avis clients)",
      "Design personnalisé et responsive",
      "Cartes interactives / réseaux sociaux",
      "Documentation + support 1 mois",
    ],
    price: "À partir de 900€",
  },
  {
    icon: <Globe size={36} className="text-fuchsia-500 mb-2" />,
    title: "Site Web Moderne",
    description:
      "Un site professionnel développé avec React, rapide, responsive, optimisé pour l'expérience utilisateur et le référencement local.",
    points: [
      "Site React 100% personnalisé (jusqu'à 6 pages)",
      "Design UX/UI sur mesure",
      "Intégration d'un back-office (Firebase ou CMS headless léger si besoin)",
      "Formulaires de contact, Google Maps, lien vers réseaux sociaux",
      "Optimisation SEO local",
      "Hébergement + déploiement inclus (si souhaité)",
      "Documentation complète à la livraison",
    ],
    price: "À partir de 1 800€",
  },
  {
    icon: <Smartphone size={36} className="text-purple-500 mb-2" />,
    title: "Application Mobile Locale",
    description:
      "Déployez une application mobile intuitive pour Android et iOS, idéale pour informer, interagir ou organiser des services de proximité.",
    points: [
      "App React Native (Android et iOS)",
      "Modules personnalisables : actus, signalements, agenda, annuaire, notifications push",
      "Connexion à back-end Firebase ou Swift",
      "Publication sur stores (Play Store inclus, App Store sur option)",
      "UX pensée pour tous les publics (accessibilité, simplicité)",
      "Documentation technique fournie",
    ],
    price: "À partir de 3 500€",
  },
  {
    icon: <Workflow size={36} className="text-emerald-500 mb-2" />,
    title: "Numérisation de service",
    description:
      "Automatisez ou digitalisez vos services avec une solution sur mesure : gestion de réservations, demandes administratives, ticketing, et plus encore.",
    points: [
      "Demande de documents administratifs",
      "Réservations de salles ou d'événements",
      "Système de signalements / ticketing interne",
      "Suivi de demandes ou dossiers",
    ],
    price: "Sur devis, à partir de 2 500€",
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
    <section className="w-full bg-white py-20 px-4 relative overflow-hidden">
      {/* Animated Background Shape */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none"
        initial={{ scale: 0.9, opacity: 0.3 }}
        animate={{ scale: 1.05, opacity: 0.5 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="w-96 h-96 md:w-[38rem] md:h-[38rem] rounded-full bg-gradient-to-tr from-indigo-200/40 via-purple-200/30 to-fuchsia-200/20 blur-2xl shadow-2xl"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center">
          Ce que je propose
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-100 rounded-2xl shadow-xl p-8 flex flex-col justify-between items-center h-full min-h-[440px] transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-gray-50 group"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 8px 32px 0 rgba(80,80,180,0.10)",
              }}
            >
              <div className="flex flex-col items-center">
                {service.icon}
                <h3 className="text-lg font-bold text-gray-900 mb-3 mt-2 text-center">
                  {service.title}
                </h3>
              </div>
              <p className="text-base md:text-md text-indigo-700 font-semibold mb-4 text-center">
                {service.description}
              </p>
              <ul className="text-gray-500 text-sm md:text-base space-y-1 list-disc list-inside text-left font-normal mb-2">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="mt-4 text-indigo-700 font-bold text-lg text-center self-stretch">
                {service.price}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
