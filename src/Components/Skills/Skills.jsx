import { motion } from "framer-motion";
import skills from "../../data/skillsData";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-slate-950 px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            Skills
          </span>

          <h2 className="mt-8 text-5xl font-black text-white">
            Technical
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {" "}Expertise
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Technologies, tools, and frameworks I use to build modern
            full-stack web applications.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard
              key={skill.id}
              skill={skill}
            />
          ))}
        </div>

      </div>
    </section>
  );
}