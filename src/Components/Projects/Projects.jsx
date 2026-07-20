import { motion } from "framer-motion";
import projects from "../../data/projectsData";
import FeaturedProject from "./FeaturedProject";
import ProjectGrid from "./ProjectGrid";

export default function Projects() {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 px-6 py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            Portfolio
          </span>

          <h2 className="mt-8 text-5xl font-black text-white md:text-6xl">
            Featured
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {" "}Projects
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            A selection of full-stack applications showcasing modern UI,
            scalable backend architecture, REST APIs, authentication,
            and production-ready development practices.
          </p>
        </motion.div>

        {/* Featured */}
        <FeaturedProject project={featuredProject} />

        {/* Other Projects */}
        <ProjectGrid projects={otherProjects} />

      </div>
    </section>
  );
}