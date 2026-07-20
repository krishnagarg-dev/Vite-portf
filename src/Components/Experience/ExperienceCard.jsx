import { motion } from "framer-motion";

export default function ExperienceCard({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -6 }}
      className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      {/* Timeline Dot */}
      <div className="absolute -left-3 top-10 h-6 w-6 rounded-full border-4 border-slate-950 bg-cyan-400" />

      <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
        {item.duration}
      </span>

      <h3 className="mt-5 text-2xl font-bold text-white">
        {item.role}
      </h3>

      <p className="mt-2 text-cyan-300">
        {item.company} • {item.type}
      </p>

      <p className="mt-5 leading-7 text-slate-400">
        {item.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {item.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}