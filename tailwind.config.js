/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9CD326",
        secondary: "#AFAFAF",
      },
      boxShadow: {
        "3xl": "0 33px 56px -19px rgba(174, 255, 0, 0.10)",
      },
    },
  },
  plugins: [],
};
