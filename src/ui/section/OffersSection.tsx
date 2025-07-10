import { motion } from "framer-motion";
import { Globe, Smartphone, Store, Workflow } from "lucide-react";
import React from "react";
import AnimatedBackgroundShape from "../components/AnimatedBackgroundShape";

const services = [
  {
    icon: <Store size={36} className="text-emerald-500 mb-2" />,
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
    icon: <Globe size={36} className="text-emerald-800 mb-2" />,
    title: "Site Web Moderne",
    description:
      "Un site professionnel développé avec React, rapide, responsive, optimisé pour l'expérience utilisateur et le référencement local.",
    points: [
      "Site React 100% personnalisé (jusqu'à 6 pages)",
      "Design UX/UI sur mesure",
      "Formulaires de contact, Google Maps, lien vers réseaux sociaux",
      "Optimisation SEO local",
      "Hébergement + déploiement inclus (si souhaité)",
    ],
    price: "À partir de 1 800€",
  },
  {
    icon: <Smartphone size={36} className="text-sky-400 mb-2" />,
    title: "Application Mobile Locale",
    description:
      "Déployez une application mobile intuitive pour Android et iOS, idéale pour votre cible.",
    points: [
      "App React Native (Android et iOS)",
      "Modules personnalisables",
      "Connexion à un back-end Firebase ou Swift",
      "Publication sur stores (Play Store inclus, App Store sur option)",
      "UX pensée pour tous les publics (accessibilité, simplicité)",
    ],
    price: "À partir de 3 500€",
  },
  {
    icon: <Workflow size={36} className="text-yellow-900 mb-2" />,
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
    <section className="w-full bg-white px-4 py-12 relative overflow-hidden">
      <AnimatedBackgroundShape />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center">
          Ce que je propose
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white/80 rounded-2xl border border-emerald-100 shadow-[0_6px_12px_rgba(16,185,129,0.25)] p-8 flex flex-col justify-between items-center h-full min-h-[440px] transition-transform duration-300 hover:-translate-y-2 hover:bg-emerald-100/20 group dark:bg-emerald-950/50 dark:border-sky-100/60 dark:hover:bg-emerald-800/80"
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
              <p className="text-base md:text-md text-emerald-900 dark:text-emerald-200/80 font-semibold mb-4 text-center">
                {service.description}
              </p>
              <ul className="text-gray-500 dark:text-gray-100 text-sm md:text-base space-y-1 list-disc list-inside text-left font-normal mb-2">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="mt-4 text-emerald-800 dark:text-emerald-200/80 font-bold text-lg text-center self-stretch">
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
