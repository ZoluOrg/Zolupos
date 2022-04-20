const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          1: "#f71735",
          2: "#de1530",
          3: "#c6122a",
        },
        coal: {
          1: "#000000",
          2: "#212021",
          3: "#393939",
        },
        mallow: {
          1: "#FFFCF9",
          2: "#E6E3E0",
          3: "#CCCAC7",
        },
      },
      fontFamily: {
        sans: ["Work Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
