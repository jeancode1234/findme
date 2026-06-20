// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Permet de gérer le switch de thème via la classe .dark sur l'élément html
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#3b82f6",
          DEFAULT: "#1d4ed8", // Bleu GeoLink
          dark: "#1e3a8a",
        },
        accent: "#f97316", // Orange DHI Academy
        background: {
          light: "#f8fafc",
          dark: "#0f172a",
        },
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"], // Standard UI [cite: 31]
      },
    },
  },
  plugins: [],
};
