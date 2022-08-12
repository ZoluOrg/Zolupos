const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          1: "#EB1632",
          2: "#DE1530",
          3: "#D2142D",
          4: "#C6122A",
          5: "#B91128"
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
          bg : {
            1: "#fcfcfc",
            2: "#e3e3e3",
            3: "#cacaca",
            4: "#b0b0b0",
            5: "#979797"
          }
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
