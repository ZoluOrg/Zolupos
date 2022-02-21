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
        }
      },
      fontFamily: {
        sans: ["Prompt", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
