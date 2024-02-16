/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        blue: "#074287",
        green: "#27AE60",
        white2: "#F1F1F1",
      },
      fontFamily: {
        Montserrat: ["Montserrat"],
      },
      screens: {
        smallphone: "320px",

        tablet: "768px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",

        laptopL: "1440px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
