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
        background: "#ffffff", // Changed to White [Reference: image_a9c8e4.jpg]
        foreground: "#0a0a0a", // Almost Black text
        primary: "#8b5cf6", // Keeping Kasparro Purple
        secondary: "#06b6d4", 
        "grid-line": "#f0f0f0", // Very light grey for the grid
      },
      fontFamily: {
        sans: ['var(--font-inter)'], 
      },
    },
  },
  plugins: [],
};
export default config;