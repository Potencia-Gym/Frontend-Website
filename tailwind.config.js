/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'head':['Syne'],
        'font1':['Poppins']
      },
      colors:{
        'green': '#01A140',
        'grey': '#232227',
        'lightgrey': '#F0F0F0'
      },
    },
  },
  plugins: [],
}
