import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const icons = [
  {
    icon: <FaReact size={30} />,
    className: "left-[-40px] top-[60px] text-cyan-400",
    duration: 6,
  },
  {
    icon: <FaNodeJs size={30} />,
    className: "left-[-30px] bottom-[70px] text-green-500",
    duration: 5,
  },
  {
    icon: <SiMongodb size={28} />,
    className: "right-[-35px] top-[130px] text-green-400",
    duration: 7,
  },
  {
    icon: <SiExpress size={28} />,
    className: "right-[-30px] bottom-[100px] text-gray-200",
    duration: 5.5,
  },
];

export default function FloatingIcons() {
  return (
    <>
      {icons.map((item, index) => (
        <motion.div
          key={index}
          animate={{
            y: [-12, 12, -12],
            rotate: [-4, 4, -4],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute ${item.className} z-20`}
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl shadow-[0_0_30px_rgba(34,211,238,.08)] transition-all duration-300 hover:scale-110 hover:border-cyan-400">
            {item.icon}
          </div>
        </motion.div>
      ))}
    </>
  );
}