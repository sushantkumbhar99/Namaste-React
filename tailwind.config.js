
/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       
        customtitles: '#3e4152' ,
        // Add more custom colors as needed
      },

      fontFamily: {
        'custom': ['Roboto', 'sans-serif'],
      },

      border:{
        b1p: "1px",
      }
      
    },
  },
  plugins: [],
}