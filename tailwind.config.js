/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        custom: "1.2vw", // Custom font size
      },
      lineHeight: {
        custom: "1.5vw", // Custom line height
      },
    },
  },
  plugins: [],
};
