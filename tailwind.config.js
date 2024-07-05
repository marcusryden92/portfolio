/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Custom colors
        primary: "#ed624a", // Custom primary color
        secondary: "#13192d", // Custom secondary color

        // primary: "#13192d", // Custom primary color
        // secondary: "#ed624a", // Custom secondary color

        // primary: "#f5b990",
        // secondary: "#ffffff",
        // accent: "#13192d", // Custom accent color
        accent: "#ffffff", // Custom accent color
        neutral: "#374151", // Custom neutral color
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
