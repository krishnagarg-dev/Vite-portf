import { motion } from "framer-motion";

const stats = [
  {
    number: "10+",
    title: "Projects",
  },
  {
    number: "3+",
    title: "Internships",
  },
  {
    number: "100%",
    title: "Responsive",
  },
  {
    number: "MERN",
    title: "Stack",
  },
];

export default function Stats() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-4"
    >
      {stats.map((item) => (
        <motion.div
          key={item.title}
          variants={{
            hidden: {
              opacity: 0,
              y: 30,
            },
            show: {
              opacity: 1,
              y: 0,
            },
          }}
          whileHover={{
            y: -8,
            scale: 1.03,
          }}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
        >
          {/* Glow */}
          <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
          </div>

          <h3 className="relative text-4xl font-black text-cyan-400">
            {item.number}
          </h3>

          <p className="relative mt-3 text-sm uppercase tracking-[3px] text-slate-400">
            {item.title}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}