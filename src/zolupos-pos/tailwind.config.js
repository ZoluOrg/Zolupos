const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
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
          1: "#F0F0F0",
          2: "#E6E6E6",
          3: "#DBDBDB",
          4: "#D1D1D1",
        },
      },
      fontFamily: {
        sans: ["Manrope", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
