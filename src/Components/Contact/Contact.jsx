import { motion } from "framer-motion";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiSend,
} from "react-icons/fi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            Contact
          </span>

          <h2 className="mt-8 text-5xl font-black text-white">
            Let's Build
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {" "}Something Great
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            I'm always open to internships, freelance work, and exciting
            opportunities. Let's connect.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Left Side */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <div className="space-y-8">

              <a
                href="mailto:gargkrishna9354@gmail.com"
                className="flex items-center gap-5"
              >
                <FiMail className="text-2xl text-cyan-400" />
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="text-slate-400">
                    gargkrishna9354@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/krishnagarg-dev"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5"
              >
                <FiGithub className="text-2xl text-cyan-400" />
                <div>
                  <h4 className="font-semibold text-white">GitHub</h4>
                  <p className="text-slate-400">
                    github.com/krishnagarg-dev
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/krishnagarg-dev/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5"
              >
                <FiLinkedin className="text-2xl text-cyan-400" />
                <div>
                  <h4 className="font-semibold text-white">LinkedIn</h4>
                  <p className="text-slate-400">
                    linkedin.com/in/krishnagarg-dev
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-5">
                <FiMapPin className="text-2xl text-cyan-400" />
                <div>
                  <h4 className="font-semibold text-white">Location</h4>
                  <p className="text-slate-400">
                    Ghaziabad, Uttar Pradesh, India
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <form className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <input
              type="text"
              placeholder="Your Name"
              className="mb-5 w-full rounded-xl border border-white/10 bg-slate-900 px-5 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="mb-5 w-full rounded-xl border border-white/10 bg-slate-900 px-5 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="mb-6 w-full rounded-xl border border-white/10 bg-slate-900 px-5 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400"
            />

            <button
              type="submit"
              className="inline-flex items-center gap-3 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:scale-105 hover:bg-cyan-300"
            >
              <FiSend />
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}