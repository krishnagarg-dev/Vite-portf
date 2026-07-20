import { motion } from "framer-motion";
import { FiMapPin, FiBookOpen, FiBriefcase, FiDownload } from "react-icons/fi";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 px-6 py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            About Me
          </span>

          <h2 className="mt-8 text-5xl font-black text-white leading-tight">
            Passionate
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {" "}MERN Stack
            </span>
            <br />
            Developer
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            I'm Krishna Garg, a Full Stack Developer focused on building
            scalable and responsive web applications using the MERN stack.
            I enjoy solving real-world problems and continuously improving my
            skills through internships and hands-on projects.
          </p>

          <a
            href="/resume.pdf"
            download
            className="mt-10 inline-flex items-center gap-3 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-105"
          >
            <FiDownload />
            Download Resume
          </a>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >

          <div className="space-y-8">

            <div className="flex items-center gap-4">
              <FiMapPin className="text-2xl text-cyan-400" />
              <div>
                <h4 className="font-semibold text-white">Location</h4>
                <p className="text-slate-400">Ghaziabad, Uttar Pradesh</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FiBookOpen className="text-2xl text-cyan-400" />
              <div>
                <h4 className="font-semibold text-white">Education</h4>
                <p className="text-slate-400">
                  MCA • KIET Group of Institutions
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FiBriefcase className="text-2xl text-cyan-400" />
              <div>
                <h4 className="font-semibold text-white">Experience</h4>
                <p className="text-slate-400">
                  Multiple Full Stack Internships
                </p>
              </div>
            </div>

          </div>

          <div className="mt-10 grid grid-cols-2 gap-5">

            <div className="rounded-2xl bg-slate-900 p-6 text-center">
              <h3 className="text-3xl font-black text-cyan-300">4+</h3>
              <p className="mt-2 text-slate-400">Projects</p>
            </div>

            <div className="rounded-2xl bg-slate-900 p-6 text-center">
              <h3 className="text-3xl font-black text-cyan-300">3</h3>
              <p className="mt-2 text-slate-400">Internships</p>
            </div>

            <div className="rounded-2xl bg-slate-900 p-6 text-center">
              <h3 className="text-3xl font-black text-cyan-300">MERN</h3>
              <p className="mt-2 text-slate-400">Primary Stack</p>
            </div>

            <div className="rounded-2xl bg-slate-900 p-6 text-center">
              <h3 className="text-3xl font-black text-cyan-300">2025</h3>
              <p className="mt-2 text-slate-400">Graduate</p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}