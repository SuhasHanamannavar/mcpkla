import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#1e1c1a",
          soft: "#23201d",
        },
        card: {
          DEFAULT: "#2d2823",
          hover: "#3a332c",
        },
        ink: {
          DEFAULT: "#f0ebe4",
          muted: "#a89f94",
          faint: "#7a7268",
        },
        accent: {
          DEFAULT: "#c9923c",
          soft: "rgba(201, 146, 60, 0.14)",
        },
        forest: {
          DEFAULT: "#5a8b4d",
          soft: "rgba(90, 139, 77, 0.14)",
        },
        rust: {
          DEFAULT: "#c96b3c",
          soft: "rgba(201, 107, 60, 0.12)",
        },
        line: "rgba(168, 159, 148, 0.16)",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Source Sans 3"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
