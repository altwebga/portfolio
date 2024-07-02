// tailwind.config.js
import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      backgroundImage: {
        "hero-pattern": "url('/image/hero-pattern.svg')",
        "footer-texture": "url('/image/footer-texture.svg')",
        "hero-grid": "url('/image/hero-grid.svg')",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
