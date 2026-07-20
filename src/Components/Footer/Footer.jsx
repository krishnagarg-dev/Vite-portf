import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp,
} from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-white/10 bg-slate-950">

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 py-14">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-black text-white"
        >
          Krishna Garg
        </motion.h2>

        <p className="max-w-xl text-center leading-7 text-slate-400">
          Full Stack MERN Developer passionate about building scalable,
          responsive and modern web applications.
        </p>

        <div className="flex gap-5">

          <a
            href="mailto:gargkrishna9354@gmail.com"
            className="rounded-full border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            <FiMail size={20} />
          </a>

          <a
            href="https://github.com/krishnagarg-dev"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            <FiGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/krishnagarg-dev/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            <FiLinkedin size={20} />
          </a>

        </div>

        <button
          onClick={scrollToTop}
          className="rounded-full border border-cyan-400/20 bg-cyan-400/10 p-4 text-cyan-300 transition hover:scale-110"
        >
          <FiArrowUp size={20} />
        </button>

        <div className="h-px w-full bg-white/10" />

        <p className="text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Krishna Garg. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}