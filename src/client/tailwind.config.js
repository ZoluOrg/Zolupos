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
          lighter:"#E4EFFD",
          light:"#B1CEF4",
          base:"#84AFE6",
          dark:"#5E91D3",
          darker:"#3D73B8"
        }
      }
    },
  },
  plugins: [],
}
