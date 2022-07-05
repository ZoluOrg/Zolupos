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
          1: "#f8f9fa",
          2: "#e9ecef",
          3: "#dee2e6",
          4: "#ced4da",
        },
      },
      fontFamily: {
        sans: ["Work Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
