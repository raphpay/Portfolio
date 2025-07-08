import Section from "./ui/components/Section";
import HeroSection from "./ui/section/HeroSection";
import OffersSection from "./ui/section/OffersSection";
import SkillsSection from "./ui/section/SkillsSection";

export default function App() {
  const sections = [
    { key: "header", label: "Header" },
    { key: "services", label: "Services" },
    { key: "skills", label: "Skills" },
    { key: "projects", label: "Projects" },
    { key: "contact", label: "Contact" },
  ];

  return (
    <div
      className="h-screen w-full overflow-y-scroll scroll-smooth snap-y snap-mandatory"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      {sections.map((section) => (
        <Section key={section.key} id={section.key}>
          {section.key === "header" ? (
            <HeroSection />
          ) : section.key === "services" ? (
            <OffersSection />
          ) : section.key === "skills" ? (
            <SkillsSection />
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
  );
}
