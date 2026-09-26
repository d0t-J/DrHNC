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
        ink: "#14242B",
        "ink-soft": "#46595C",
        paper: "#F2EEE2",
        "paper-raised": "#FFFFFF",
        "paper-sunken": "#EAE3D2",
        forest: "#16402E",
        whatsapp: "#25D366",
        "whatsapp-deep": "#17B24F",
        "forest-deep": "#0F2B1F",
        "forest-soft": "#205C42",
        sage: "#3F6B5D",
        "sage-deep": "#2C4A40",
        mist: "#DCE8E2",
        honey: "#C68A3D",
        "honey-deep": "#A86F2C",
        line: "rgba(20, 36, 43, 0.12)",
        "line-soft": "rgba(20, 36, 43, 0.08)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Iowan Old Style", "Georgia", "serif"],
        body: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "SF Mono", "Menlo", "monospace"],
      },
      maxWidth: {
        content: "1290px",
      },
      spacing: {
        18: "4.5rem", // 72px — matches design reference section padding
      },
    },
  },
  plugins: [],
};

export default config;
