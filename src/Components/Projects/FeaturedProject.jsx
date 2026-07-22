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
      <div className="grid items-stretch lg:grid-cols-[1.15fr_0.85fr]">
        {/* Image */}
        <div className="relative overflow-hidden bg-[#0f172a]">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-[520px] w-full object-cover object-top transition-transform duration-700 hover:scale-105"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0b1120]/10" />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center p-8 lg:p-12">
          <span className="w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-300">
            Featured Project
          </span>

          <h2 className="mt-6 text-4xl font-black text-white">
            {project.title}
          </h2>

          <p className="mt-3 text-lg font-medium text-cyan-300">
            {project.subtitle}
          </p>

          <p className="mt-6 leading-8 text-slate-300">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-slate-800/80 px-4 py-2 text-sm text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition-all duration-300 hover:scale-105 hover:bg-cyan-300"
            >
              Live Demo
              <FiArrowUpRight />
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 font-semibold text-white transition-all duration-300 hover:border-cyan-400 hover:bg-white/10"
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