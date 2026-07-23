import { motion } from "framer-motion";
import experience from "../../data/experienceData";
import ExperienceCard from "./ExperienceCard";


export default function Experience() {
  return (
    <section
      id="experience"
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
            Experience
          </span>

          <h2 className="mt-8 text-5xl font-black text-white">
            Professional
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {" "}Journey
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            My internships and professional experiences that strengthened my
            full-stack development skills.
          </p>
        </motion.div>

        <div className="relative ml-4 border-l border-white/10 pl-10 space-y-10">
          {experience.map((item) => (
            <ExperienceCard
              key={item.id}
              item={item}
            />
          ))}
        </div>

      </div>
    </section>
  );
}