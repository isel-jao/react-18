/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef7f9",
          100: "#cce9ef",
          200: "#99d3df",
          300: "#66bdce",
          400: "#33a7be",
          500: "#0091ae",
          600: "#00748b",
          700: "#005768",
          800: "#003a46",
          900: "#001d23",
          950: "#001317",
        },
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        neon: "0 0 2px 2px #ffffff",
      },
      keyframes: {
        shake: {
          "0%, 50%, 100%": { transform: "translate(0, 0) " },
          "25%": { transform: "translate(5px, 5px) " },
          "75%": { transform: "translate(-5px, 5px) " },
        },
        "horizontal-shake": {
          "0%, 100%": { transform: "translateX(0)" },
          "25%, 75%": { transform: "translateX(5px)" },
          "50%": { transform: "translateX(-5px)" },
        },
        "vertical-shake": {
          "0%, 100%": { transform: "translateY(0)" },
          "25%, 75%": { transform: "translateY(5px)" },
          "50%": { transform: "translateY(-5px)" },
        },
        "max-height": {
          from: { maxHeight: "0" },
        },
      },
      animation: {
        shake: "shake 300ms ease-in-out infinite",
        "horizontal-shake": "horizontal-shake 300ms ease-in-out infinite",
        "vertical-shake": "vertical-shake 300ms ease-in-out infinite",
        "max-height": "max-height 300ms ease-in-out",
      },
    },
  },
  safelist: [
    {
      pattern: /animate-.*/,
    },
  ],
  plugins: [],
};
