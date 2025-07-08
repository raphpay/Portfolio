import { motion } from "framer-motion";
import MyCV from "../../assets/My-CV.pdf";
import SmallLogoGreen from "../../assets/Small-Logo-Green.png";
import FolderLogo from "../../assets/folder-logo.png";
import HearingLogo from "../../assets/hearing-logo.png";
import LaravelLogo from "../../assets/laravel-logo.png";
import VaporLogo from "../../assets/vapor-logo.png";
import AnimatedBackgroundShape from "../components/AnimatedBackgroundShape";

const projects = [
  {
    title: "Site-web Portfolio",
    description:
      "Un portfolio personnel construit avec React et Tailwind CSS, afin de montrer mes compétences en développement et projet web.",
    image: SmallLogoGreen,
  },
  {
    title:
      "Amélioration d'un site existant pour une meilleure expérience utilisateur et conformité réglementaire",
    description:
      "J'ai renforcé une équipe technique pour moderniser l'interface d'un site web, rendre la navigation plus simple et agréable pour les utilisateurs, et intégrer des fonctionnalités essentielles pour respecter les normes en vigueur (sécurité, accessibilité, réglementation).",
    image: LaravelLogo,
  },
  {
    title:
      "Création d'un système sécurisé pour gérer les données d'une application web",
    description:
      "J'ai conçu et développé le backend complet d'une application web, avec une API claire et sécurisée permettant de gérer les utilisateurs, documents et données en toute fiabilité. Le tout pensé pour être facilement évolutif et rapide à connecter à l'interface côté client.",
    image: VaporLogo,
  },
  {
    title:
      "Développement d'une application sécurisée pour la gestion de documents sensibles",
    description:
      "J'ai accompagné un client de A à Z dans la création d'un logiciel desktop sur-mesure, permettant de stocker, consulter et sécuriser des documents confidentiels (médicaux, légaux, etc.). De l'architecture à la mise en production, j'ai assuré le développement complet de l'application et de son système de gestion d'accès, avec une priorité donnée à la sécurité des données et à la simplicité d'usage.",
    image: FolderLogo,
  },
  {
    title:
      "Développement d'une application mobile pour améliorer l'expérience auditive des seniors",
    description:
      "Au sein d'une start-up innovante, j'ai contribué à créer une application mobile facilitant le réglage personnalisé des aides auditives via smartphone, tout en permettant aux audioprothésistes de suivre leurs patients à distance. J'ai travaillé main dans la main avec l'équipe produit pour rendre l'expérience simple, accessible, et adaptée aux besoins spécifiques des utilisateurs seniors.",
    image: HearingLogo,
  },
  {
    title:
      "Création d'une web app pour faciliter la gestion des clubs sportifs",
    description:
      "Je développe une application web intuitive permettant aux clubs sportifs de gérer simplement leurs membres, cotisations et trésorerie. Conçue avec React, Firebase et Tailwind CSS, cette solution offre un suivi clair, une interface moderne et une administration facilitée, pour que les responsables se concentrent sur leur passion, sans perdre de temps sur la gestion.",
    image: SmallLogoGreen,
  },
];

export default function ProjectsSection() {
  return (
    <section className="w-full bg-white py-20 px-4 relative overflow-hidden">
      <AnimatedBackgroundShape />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10">
          Mon travail
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              className="bg-white rounded-2xl border border-emerald-100 shadow-[0_6px_12px_rgba(16,185,129,0.25)] p-8 flex flex-col justify-between items-center h-full min-h-[440px] transition-transform duration-300 hover:-translate-y-2 hover:bg-emerald-100/20 group dark:bg-emerald-950/80 dark:border-sky-100/60 dark:hover:bg-emerald-800/80"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => window.open(MyCV, "_blank")}
              style={{ cursor: "pointer" }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-emerald-200/80 text-base mb-4 flex-1">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
