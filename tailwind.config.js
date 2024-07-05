/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        custom: "1.2vw", // Custom font size
        subtitle: "2.5vw",
        menu: "2.2vw",
      },
      lineHeight: {
        custom: "1.5vw", // Custom line height
      },
    },
  },
  plugins: [],
};
