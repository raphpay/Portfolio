import { motion } from "framer-motion";
import AnimatedBackgroundShape from "../components/AnimatedBackgroundShape";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React and Tailwind CSS, showcasing my web development projects and skills.",
    image: "/vite.svg",
  },
  {
    title: "E-commerce Store",
    description:
      "A modern e-commerce platform with product listings, shopping cart, and secure checkout.",
    image: "/vite.svg",
  },
  {
    title: "Blog Platform",
    description:
      "A full-featured blog platform with markdown support, comments, and user authentication.",
    image: "/vite.svg",
  },
  {
    title: "Task Manager App",
    description:
      "A productivity app to manage daily tasks, set reminders, and track progress.",
    image: "/vite.svg",
  },
  {
    title: "Weather Dashboard",
    description:
      "A dashboard displaying real-time weather data and forecasts for multiple cities.",
    image: "/vite.svg",
  },
  {
    title: "Chat Application",
    description:
      "A real-time chat app with group messaging, emojis, and notifications.",
    image: "/vite.svg",
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
              className="bg-gray-100 rounded-2xl shadow-xl p-8 flex flex-col justify-between items-center h-full min-h-[440px] transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-gray-50 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-base mb-4 flex-1">
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
