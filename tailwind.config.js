/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Custom colors
        // primary: "#ed624a", // Custom primary color
        // secondary: "#13192d", // Custom secondary color

        primary: "#2B3A67", // Custom primary color
        // secondary: "#ed624a", // Custom secondary color

        // primary: "#f5b990",
        secondary: "#ffffff",
        accent: "#ff1654", // Custom accent color
        // accent: "#ffffff", // Custom accent color
        neutral: "#374151", // Custom neutral color
        about: "#13192d", // Custom secondary color
      },
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
