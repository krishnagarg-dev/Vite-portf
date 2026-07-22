import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

export default function FeaturedProject({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#101322] shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
    >
      <div className="grid lg:grid-cols-[60%_40%]">

        {/* IMAGE */}
        <div className="relative overflow-hidden">

          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-[560px] w-full object-cover object-top transition-all duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#101322]/30" />

          {/* Glow */}
          <div className="absolute -bottom-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[120px]" />

        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-center p-10 lg:p-12">

          <span className="mb-5 w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-300">
            Featured Project
          </span>

          <h2 className="text-5xl font-black leading-tight text-white">
            {project.title}
          </h2>

          <p className="mt-4 text-lg font-medium leading-8 text-cyan-300">
            {project.subtitle}
          </p>

          <p className="mt-7 text-lg leading-9 text-slate-300">
            {project.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-[#1a2236] px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
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
              className="flex items-center gap-2 rounded-xl bg-cyan-400 px-7 py-3 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300"
            >
              Live Demo
              <FiArrowUpRight size={18} />
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-white/10"
            >
              GitHub
              <FiGithub size={18} />
            </a>

          </div>

        </div>
      </div>
    </motion.div>
  );
}