/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'sm':'425px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px',
    },
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
