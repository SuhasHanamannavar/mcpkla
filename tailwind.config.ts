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
          DEFAULT: "#0a0a0a",
          soft: "#111111",
        },
        card: {
          DEFAULT: "#141414",
          hover: "#1a1a1a",
        },
        ink: {
          DEFAULT: "#f5f5f0",
          muted: "#9a9a90",
          faint: "#6a6a60",
        },
        accent: {
          DEFAULT: "#ffb347",
          soft: "rgba(255, 179, 71, 0.12)",
          glow: "rgba(255, 179, 71, 0.4)",
        },
        electric: {
          DEFAULT: "#6bc46b",
          soft: "rgba(107, 196, 107, 0.12)",
          glow: "rgba(107, 196, 107, 0.35)",
        },
        rust: {
          DEFAULT: "#ff6b35",
          soft: "rgba(255, 107, 53, 0.1)",
        },
        line: "rgba(255, 179, 71, 0.1)",
        "line-strong": "rgba(255, 179, 71, 0.2)",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Source Sans 3"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        'neon-gold': '0 0 30px rgba(255, 179, 71, 0.3)',
        'neon-green': '0 0 30px rgba(107, 196, 107, 0.25)',
        'card-hover': '0 12px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 179, 71, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
