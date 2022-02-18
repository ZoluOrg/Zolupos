module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light": "#FDFDFD",
        "text": "#343A40",
        "blood": {
          "darker": "#cc5050",
          "base": "#ff6464",
          "lighter": "#ff8383",
          "lightest": "#ffa2a2"
        },
        "sun": {
          "darker": "#ccb44e",
          "base": "#ffe162",
          "lighter": "#ffe781",
          "lightest": "#ffeda1"
        },
        "leaf": {
          "darker": "#749d69",
          "base": "#91c483",
          "lighter": "#a7d09c",
          "lightest": "#bddcb5"
        },
        "ocean": {
          "darker": "#107fa4",
          "base": "#149fcd",
          "lighter": "#43b2d7",
          "lightest": "#72c5e1"
        }
      }
    },
  },
  plugins: [],
}
