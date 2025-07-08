import Navbar from "./ui/components/Navbar";
import Section from "./ui/components/Section";
import ContactSection from "./ui/section/ContactSection";
import HeroSection from "./ui/section/HeroSection";
import OffersSection from "./ui/section/OffersSection";
import ProjectsSection from "./ui/section/ProjectsSection";
import SkillsSection from "./ui/section/SkillsSection";

export default function App() {
  const sections = [
    { key: "home", label: "Home" },
    { key: "services", label: "Services" },
    { key: "skills", label: "Skills" },
    { key: "projects", label: "Projects" },
    { key: "contact", label: "Contact" },
  ];

  return (
    <div>
      <Navbar />
      <div
        className="h-screen w-full overflow-y-scroll scroll-smooth snap-y snap-mandatory pt-16"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {sections.map((section) => (
          <Section key={section.key} id={section.key}>
            {section.key === "home" ? (
              <HeroSection />
            ) : section.key === "services" ? (
              <OffersSection />
            ) : section.key === "skills" ? (
              <SkillsSection />
            ) : section.key === "projects" ? (
              <ProjectsSection />
            ) : section.key === "contact" ? (
              <ContactSection />
            ) : (
              <div className="flex flex-col items-center justify-center w-full h-full">
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
                  {section.label}
                </h1>
                <p className="text-lg text-gray-500">
                  Section de démonstration: {section.label}
                </p>
              </div>
            )}
          </Section>
        ))}
      </div>
    </div>
  );
}
