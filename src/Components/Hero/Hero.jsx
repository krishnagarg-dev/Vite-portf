import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

import BackgroundEffects from "./BackgroundEffects";
import MouseGlow from "./MouseGlow";
import FloatingIcons from "./FloatingIcons";
import TechPills from "./TechPills";
import PhotoCard from "./PhotoCard";
import CTAButtons from "./CTAButtons";
import Stats from "./Stats";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-x-hidden bg-[#030712]"
    >
      <MouseGlow />

      <BackgroundEffects />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col-reverse items-center justify-center gap-16 px-6 py-32 lg:flex-row lg:justify-between">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl pb-20 lg:pb-0"
        >
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[4px] text-cyan-300">
            FULL STACK MERN DEVELOPER
          </span>

          <h1 className="mt-8 text-6xl font-black leading-none md:text-8xl">
            Krishna
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Garg
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-9 text-slate-400">
            I build fast, scalable and production-ready web applications using
            the MERN Stack, focusing on clean architecture, exceptional user
            experience, and modern interfaces.
            <br />
            <br />
            I enjoy crafting modern interfaces with smooth animations while
            keeping backend architecture clean and maintainable.
          </p>

          <CTAButtons />

          <div className="mt-10 flex items-center gap-5">
            <a
              href="#"
              className="rounded-2xl border border-white/10 bg-white/5 p-4 text-2xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              className="rounded-2xl border border-white/10 bg-white/5 p-4 text-2xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaLinkedin />
            </a>
          </div>

          <TechPills />

          <Stats />
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative flex items-center justify-center"
        >
          <FloatingIcons />
          <PhotoCard />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 10, 0],
        }}
        transition={{
          opacity: {
            delay: 1,
            duration: 0.8,
          },
          y: {
            repeat: Infinity,
            duration: 1.8,
          },
        }}
        className="absolute bottom-8 left-1/2 z-30 hidden -translate-x-1/2 lg:flex cursor-pointer"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-[4px] text-slate-500">
            Scroll
          </span>

          <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-400 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:bg-cyan-400/20">
            <HiArrowDown size={24} />
          </div>
        </div>
      </motion.a>
    </section>
  );
}