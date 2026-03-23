import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        onyx: {
          900: "#0a0a0a",
          800: "#111111",
          700: "#181818",
        },
        cream: {
          200: "#f0e6d0",
          400: "#d4c5a9",
        },
        gold: {
          300: "#e0c080",
          400: "#c9a96e",
          500: "#a8853e",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
        mono: ["monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
