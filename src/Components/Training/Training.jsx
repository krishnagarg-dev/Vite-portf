import { motion } from "framer-motion";
import training from "../../data/training";
import ExperienceCard from "../Experience/ExperienceCard";


export default function Training() {
  return (
    <section
      id="training"
      className="relative bg-slate-950 px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
            Training
          </span>

          <h2 className="mt-8 text-5xl font-black text-white">
            Professional
            <span className="bg-gradient-to-r from-violet-300 to-fuchsia-400 bg-clip-text text-transparent">
              {" "}
              Training
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Industry-oriented training programs that enhanced my knowledge in
            Full Stack Development, Cloud Computing, and Networking through
            practical learning.
          </p>
        </motion.div>

        <div className="relative ml-4 space-y-10 border-l border-white/10 pl-10">
          {training.map((item, index) => (
            <ExperienceCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}