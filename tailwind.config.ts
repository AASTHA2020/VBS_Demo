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
          // Logo colors extracted from VBS logo SVG - Enhanced for better contrast
          red: "#e33232", // Primary red for "Virtual Building Studio" text (user specified)
          redAlt: "#DC0000", // Alternative red from logo
          redDark: "#C00000", // Darker red for better contrast
          blue: "#08A0E9", // Primary blue from logo text
          blueAlt: "#2299D6", // Secondary blue from logo
          blueDark: "#0077B6", // Darker blue for better contrast
          green: "#42AA32", // Green from logo
          greenDark: "#2D7A1E", // Darker green for better contrast
          yellow: "#F0B300", // Yellow/orange from logo
          yellowDark: "#CC9900", // Darker yellow for better contrast
          black: "#000000", // Pure black for maximum contrast
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

