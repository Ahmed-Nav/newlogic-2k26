import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { events } from "./data/events";
import GlitchText from "./components/GlitchText";
import { ExternalLink, Instagram } from "lucide-react";
import NeuralBackground from "./components/NeuralBackground";

function App() {
  const [filter, setFilter] = useState<string>("All");

  const filteredEvents =
    filter === "All" ? events : events.filter((e) => e.category === filter);

  const getShadow = (color: string) => {
    if (color === "green")
      return "hover:shadow-neon-green hover:border-neon-green";
    if (color === "pink")
      return "hover:shadow-neon-pink hover:border-neon-pink";
    return "hover:shadow-neon-blue hover:border-neon-blue";
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white font-mono selection:bg-neon-green selection:text-black overflow-x-hidden">
      <div className="relative h-[60vh] flex flex-col items-center justify-center border-b border-gray-800 overflow-hidden">
        <div className="cyber-grid"></div>

        <div className="relative z-10 text-center flex flex-col items-center">
          <a
            href="https://www.instagram.com/YOUR_INSTA_ID_HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-8 flex items-center gap-2 px-4 py-2 bg-gray-900/80 border border-neon-pink/50 rounded-full text-neon-pink hover:bg-neon-pink hover:text-white transition-all duration-300 animate-bounce group"
          >
            <Instagram className="w-4 h-4" />
            <span className="text-xs font-bold tracking-wider">
              FOLLOW FOR LIVE UPDATES
            </span>
          </a>
          <GlitchText text="NEWLOGIC 2K26" />
          <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Where Innovation Meets Code. <br />
            <span className="text-neon-green">Compete.</span>{" "}
            <span className="text-neon-pink">Debug.</span>{" "}
            <span className="text-neon-blue">Design.</span>
          </p>
        </div>
      </div>
      <NeuralBackground />

      <div className="sticky top-0 z-50 bg-dark-bg/80 backdrop-blur-md py-6 border-b border-gray-800">
        <div className="flex justify-center gap-4 flex-wrap px-2">
          {["All", "Off-Stage", "On-Stage", "Online"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 border rounded-full transition-all duration-300 ${
                filter === cat
                  ? "bg-white text-black border-white shadow-[0_0_15px_white]"
                  : "border-gray-600 hover:border-neon-green text-gray-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-8 min-h-screen">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredEvents.map((event) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={event.id}
                className={`bg-dark-card border border-gray-800 p-6 rounded-xl transition-all duration-300 group ${getShadow(
                  event.color
                )}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <span
                    className={`text-xs font-bold px-2 py-1 rounded border uppercase ${
                      event.color === "green"
                        ? "text-neon-green border-neon-green"
                        : event.color === "pink"
                        ? "text-neon-pink border-neon-pink"
                        : "text-neon-blue border-neon-blue"
                    }`}
                  >
                    {event.category}
                  </span>
                  <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm">
                  {event.description}
                </p>

                <a
                  href={event.formLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full block text-center py-3 rounded font-bold text-black transition-transform active:scale-95 ${
                    event.color === "green"
                      ? "bg-neon-green hover:bg-green-400"
                      : event.color === "pink"
                      ? "bg-neon-pink hover:bg-fuchsia-400"
                      : "bg-neon-blue hover:bg-cyan-300"
                  }`}
                >
                  REGISTER NOW
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <footer className="py-12 text-center text-gray-600 text-sm border-t border-gray-800 bg-black/50 backdrop-blur-sm relative z-10">
        <p className="mb-2">
          <span className="text-gray-400 font-semibold">The New College</span> •
          Dept of Computer Science
        </p>
        <p>
          Built by{" "}
          <span className="text-neon-green font-bold text-base cursor-pointer hover:text-white hover:shadow-[0_0_15px_rgba(57,255,20,0.5)] transition-all duration-300">
            NAVEED AHMED M [2ND BSC CS]
          </span>
        </p>
      </footer>
    </div>
  );
}

export default App;
