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
        "light": "#FDFDFD",
        "text": "#343A40",
        "bush": {
          lighter:"#EBEFEB",
          light:"#C7D7C7",
          base:"#9EBC9F",
          dark:"#75A075",
          darker:"#518751"
        },
        "berry": {
          lighter:"#F391AA",
          light:"#EB6587",
          base:"#DA4167",
          dark:"#CC1845",
          darker:"#9C0C30"
        },
        "ocean":{
          lighter:"#4582D6",
          light:"#1B69D5",
          base:"#0858C6",
          dark:"#064193",
          darker:"#043373"
        },
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
        sans: ["Work Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
