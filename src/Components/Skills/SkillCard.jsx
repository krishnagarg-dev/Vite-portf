import { motion } from "framer-motion";

export default function SkillCard({ skill }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
      }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition"
    >
      <h3 className="text-2xl font-bold text-white">
        {skill.title}
      </h3>

      <p className="mt-3 text-slate-400">
        {skill.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {skill.items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}