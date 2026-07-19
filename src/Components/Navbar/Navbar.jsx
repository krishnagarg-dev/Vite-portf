import { motion } from "framer-motion";

const links = [
  "Home",
  "Experience",
  "Projects",
  "Skills",
  "Contact",
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/30 backdrop-blur-2xl"
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-black tracking-tight transition hover:scale-105"
        >
          Krishna<span className="text-cyan-400">.</span>
        </a>

        {/* Navigation */}
        <ul className="hidden items-center gap-10 md:flex">
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="group relative text-sm font-medium text-slate-300 transition duration-300 hover:text-white"
              >
                {item}

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <button className="rounded-xl bg-cyan-400 px-6 py-2.5 font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,.45)]">
          Resume
        </button>

      </nav>
    </motion.header>
  );
}