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
    },
  },
  plugins: [],
};
