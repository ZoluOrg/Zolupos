module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "coal": {
          100: "#999999",
          200: "#808080",
          300: "#666666",
          400: "#4d4d4d",
          500: "#333333",
          600: "#1a1a1a",
          700: "#000000"
        },
        "vanilla": {
          100: "#e0e0e0",
          200: "#cacaca" ,
          300: "#b3b3b3",
          400: "#9d9d9d",
          500: "#868686",
          600: "#707070",
          700: "#5a5a5a"
        }
      }
    },
  },
  plugins: [],
}
