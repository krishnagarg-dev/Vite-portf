import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <>
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#fff 1px,transparent 1px),
            linear-gradient(to bottom,#fff 1px,transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Main Glow */}
      <div className="absolute left-1/2 top-24 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[220px]" />

      {/* Left Glow */}
      <motion.div
        animate={{
          y: [-25, 25, -25],
          x: [-15, 15, -15],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
        }}
        className="absolute -left-40 top-16 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[180px]"
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          y: [20, -20, 20],
          x: [15, -15, 15],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
        }}
        className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[180px]"
      />

      {/* Floating Particles */}

      {[...Array(18)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-cyan-300/40"
          style={{
            width: `${3 + (i % 4)}px`,
            height: `${3 + (i % 4)}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.9, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: 4 + Math.random() * 6,
            delay: Math.random() * 4,
          }}
        />
      ))}

      {/* Noise */}

      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-soft-light"
        style={{
          backgroundImage:
            "radial-gradient(circle,#ffffff 1px,transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
    </>
  );
}