import { motion } from "framer-motion";

export default function ExperienceCard({ item }) {
  const isTraining = item.type === "Training";

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
      <div
        className={`absolute -left-3 top-10 h-6 w-6 rounded-full border-4 border-slate-950 ${
          isTraining ? "bg-violet-400" : "bg-cyan-400"
        }`}
      />

      <span
        className={`rounded-full px-3 py-1 text-xs border ${
          isTraining
            ? "border-violet-400/20 bg-violet-400/10 text-violet-300"
            : "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
        }`}
      >
        {item.duration}
      </span>

      <h3 className="mt-5 text-2xl font-bold text-white">
        {item.role}
      </h3>

      <p
        className={`mt-2 ${
          isTraining ? "text-violet-300" : "text-cyan-300"
        }`}
      >
        {item.company} • {item.location}
      </p>

      <ul className="mt-5 space-y-2 text-slate-400">
        {item.description.map((point, index) => (
          <li key={index}>• {point}</li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {item.technologies.map((tech) => (
          <span
            key={tech}
            className={`rounded-full px-3 py-1 text-xs border ${
              isTraining
                ? "border-violet-400/20 bg-violet-400/10 text-violet-300"
                : "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
            }`}
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}