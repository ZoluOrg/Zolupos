const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "secondary": {
          light: "#477BE9",
          base: "#336CE6",
          dark: "#2E61CF",
          darker: "#2956B8"
        },
        "primary": {
          light: "#F15449",
          base: "#EF4135",
          dark: "#D73B30",
          darker: "#BF342A"
        },
        "bg": {
          dark: {
            base: "#0F0F0F",
            lighter: "#2D3137"
          },
          light: {
            base: "#FFFFFF",
            darker: "#F2F2F2"
          }
        }
      },
      fontFamily: {
        sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
