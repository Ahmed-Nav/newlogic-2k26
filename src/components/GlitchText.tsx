import { motion } from "framer-motion";

interface GlitchTextProps {
  text: string;
}

const GlitchText = ({ text }: GlitchTextProps) => {
  return (
    <div className="relative inline-block group">
      <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter relative z-20 mix-blend-overlay">
        {text}
      </h1>

      <motion.h1
        className="text-6xl md:text-8xl font-black text-cyan-400 tracking-tighter absolute top-0 left-0 z-10 opacity-80"
        animate={{
          x: [-3, 3, -2, 0],
          y: [0, -2, 2, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 0.2,
          repeatType: "mirror",
          repeatDelay: 0.1,
        }}
        style={{ mixBlendMode: "screen" }}
      >
        {text}
      </motion.h1>

      <motion.h1
        className="text-6xl md:text-8xl font-black text-red-500 tracking-tighter absolute top-0 left-0 z-10 opacity-80"
        animate={{
          x: [3, -3, 2, 0],
          y: [0, 2, -2, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 0.2,
          repeatType: "mirror",
          repeatDelay: 0.2,
        }}
        style={{ mixBlendMode: "screen" }}
      >
        {text}
      </motion.h1>
    </div>
  );
};

export default GlitchText;
