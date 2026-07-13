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
        sand: "#f5efe2",
        surface: "#ece3d0",
        ink: "#12333d",
        sea: "#0f9bb0",
        "sea-deep": "#0b6b7d",
        navy: "#0b2733",
        coral: "#ff5630",
        "coral-deep": "#dd3f1c",
      },
      fontFamily: {
        archivo: ["var(--font-archivo)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        none: "0px",
        sm: "0px",
        DEFAULT: "0px",
        md: "0px",
        lg: "0px",
        xl: "0px",
        "2xl": "0px",
        "3xl": "0px",
        full: "0px",
      },
      maxWidth: {
        content: "1400px",
      },
    },
  },
  plugins: [],
};

export default config;
