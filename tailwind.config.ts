import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        vbs: {
          // Logo colors extracted from VBS logo SVG
          red: "#e33232", // Primary red for "Virtual Building Studio" text (user specified)
          redAlt: "#DC0000", // Alternative red from logo
          redDark: "#D70416", // Dark red from logo
          blue: "#08A0E9", // Primary blue from logo text
          blueAlt: "#2299D6", // Secondary blue from logo
          green: "#42AA32", // Green from logo
          greenDark: "#225919", // Dark green from logo
          yellow: "#F0B300", // Yellow/orange from logo
          black: "#000004", // Black from logo
          // Neutral colors for clean design
          charcoal: "#1E252F",
          light: "#F5F7FA",
          white: "#FFFFFF"
        }
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"]
      },
      boxShadow: {
        subtle: "0 18px 45px rgba(0, 4, 4, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;

