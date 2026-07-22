import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

export default function FeaturedProject({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      <div className="grid items-center gap-10 lg:grid-cols-2">
        {/* Image */}
        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-8 lg:p-12">
          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
            Featured Project
          </span>

          <h2 className="mt-6 text-4xl font-black text-white">
            {project.title}
          </h2>

          <p className="mt-2 text-cyan-300">
            {project.subtitle}
          </p>

          <p className="mt-6 leading-8 text-slate-300">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-slate-800 px-4 py-2 text-sm text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-10 flex gap-4">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-105"
            >
              Live Demo
              <FiArrowUpRight />
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              GitHub
              <FiGithub />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}