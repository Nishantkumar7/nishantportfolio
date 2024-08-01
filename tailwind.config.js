/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      spacing:{
        '73':'300px',
        '25':'200px'
      },
      fontFamily:{
        'besley': ["Besley", "serif"],
        'caudex':["Caudex", "serif"],
        'playfair':["Playfair Display", "serif"],
        'grotesk':["Space Grotesk", "sans-serif"],
        'bona':["Bona Nova SC", "serif"]
      },
      scale:{
        '130':"1.3"
      },
      colors:{
        'navy-blue':'#0f172a',
        'highlight':'#22d3ee',
        'gray':'#94a3b8',
        'purr':'#a200ff',
        'ree':'#ff0000'
      },
    },
  },
  plugins: [],
  darkMode:"class",
}

