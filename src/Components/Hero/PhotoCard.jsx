import { motion } from "framer-motion";
import profile from "../../assets/images/profile.png";

export default function PhotoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 70 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{
        rotateX: 4,
        rotateY: -4,
        scale: 1.02,
      }}
      className="relative perspective-[1200px]"
    >
      {/* Ambient Glow */}
      <div className="absolute inset-0 rounded-[40px] bg-cyan-400/15 blur-3xl" />

      {/* Card */}
      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#111827]/95 via-[#0f172a]/95 to-[#020617]/95 p-5 shadow-[0_30px_80px_rgba(0,0,0,.45)] backdrop-blur-2xl">

        {/* Status */}
        <div className="absolute right-5 top-5 z-20 flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Available for Work
        </div>

        {/* Image */}
        <div className="relative overflow-hidden rounded-[28px]">

          <img
            src={profile}
            alt="Krishna Garg"
            className="h-[600px] w-[430px] object-cover object-[65%_top] transition-all duration-500 hover:scale-105"
          />

          {/* Bottom Gradient */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#030712] via-black/40 to-transparent" />

        </div>

        {/* Bottom Info */}
        <div className="absolute bottom-8 left-8 right-8 z-10">

          <h2 className="text-3xl font-black tracking-tight text-white">
            Krishna Garg
          </h2>

          <p className="mt-2 text-slate-300">
            Full Stack MERN Developer
          </p>

          <div className="my-5 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="flex flex-wrap gap-2">

            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
              React
            </span>

            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
              Node.js
            </span>

            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
              Express
            </span>

            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
              MongoDB
            </span>

          </div>

        </div>

      </div>
    </motion.div>
  );
}