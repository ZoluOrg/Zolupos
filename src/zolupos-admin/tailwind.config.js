const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          1: "#EB1632",
          2: "#DE1530",
          3: "#D2142D",
          4: "#C6122A",
          5: "#B91128",
        },
        coal: {
          1: "#000000",
          2: "#212021",
          3: "#393939",
        },
        mallow: {
          1: "#FFFFFF",
          2: "#F2F2F2",
          3: "#D9D9D9",
          4: "#BFBFBF",
          5: "#A6A6A6",
        },
      },
      fontFamily: {
        sans: ["Manrope", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
