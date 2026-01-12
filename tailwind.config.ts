/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: {
          green: "#39ff14",
          pink: "#ff00ff",
          blue: "#00ffff",
        },
        dark: {
          bg: "#050505",
          card: "#101010",
        },
      },
      boxShadow: {
        "neon-green": "0 0 10px #39ff14, 0 0 20px #39ff14",
        "neon-pink": "0 0 10px #ff00ff, 0 0 20px #ff00ff",
        "neon-blue": "0 0 10px #00ffff, 0 0 20px #00ffff",
      },
      animation: {
        "pulse-fast": "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
