import { motion } from "framer-motion";
import { HiArrowRight, HiDownload } from "react-icons/hi";

export default function CTAButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-5">
      {/* View Projects */}

      <motion.a
        href="#projects"
        whileHover={{
          y: -4,
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.97,
        }}
        className="group flex items-center gap-3 rounded-2xl bg-cyan-400 px-8 py-4 font-bold text-slate-900 shadow-[0_0_35px_rgba(34,211,238,.25)] transition-all hover:shadow-[0_0_45px_rgba(34,211,238,.45)]"
      >
        View Projects

        <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
      </motion.a>

      {/* Resume */}

      <motion.a
        href="/resume.pdf"
        download
        whileHover={{
          y: -4,
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.97,
        }}
        className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10"
      >
        Download Resume

        <HiDownload className="transition-transform duration-300 group-hover:translate-y-1" />
      </motion.a>
    </div>
  );
}