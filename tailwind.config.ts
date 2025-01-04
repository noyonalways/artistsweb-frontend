import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1723px",
      },
      padding: {
        DEFAULT: ".8rem",
        sm: "0rem",
      },
    },
    extend: {
      colors: {
        primary: "#545cff",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        onest: ["var(--font-onest)"],
      },
      animation: {
        heroTextGradient: "heroTextGradient 5s linear infinite",
      },
      keyframes: {
        heroTextGradient: {
          "0%": { backgroundPosition: "0% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
