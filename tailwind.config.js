/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#da2e74",
      },
      container: {
        center: true,
      },
      fontFamily: {
        body: ["DM Sans", "sans-serif"],
        heading: ["DM Sans Text", "serif"],
        subHeading: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
