import { ssrModuleExportsKey } from "vite/module-runner";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#D1A828",
        secondary: "#080C10",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      textShadow: {
        glow: "0 0 5px rgba(255, 255, 255, 0.5) ",
        glow1: "0 0 10px rgba(255, 255, 255, 0.9)",
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
