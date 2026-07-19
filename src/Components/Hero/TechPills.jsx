
import { motion } from "framer-motion";

const techStack = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "Framer Motion",
  "REST API",
  "Git & GitHub",
];

export default function TechPills() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
      className="mt-10 flex flex-wrap gap-3"
    >
      {techStack.map((tech) => (
        <motion.div
          key={tech}
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
            },
            show: {
              opacity: 1,
              y: 0,
            },
          }}
          whileHover={{
            y: -4,
            scale: 1.05,
          }}
          transition={{
            duration: 0.25,
          }}
          className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-slate-300 backdrop-blur-xl transition-all hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,.25)]"
        >
          {tech}
        </motion.div>
      ))}
    </motion.div>
  );
}