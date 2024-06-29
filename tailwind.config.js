/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    
    
    extend: {
      spacing:{
        '73':'300px',
        '25':'200px'
      },
      fontFamily:{
        'josefin-sans':["Josefin Sans", "sans-serif"],
        'roboto-slab': ["Roboto Slab", "serif"],
        'roboto':["Roboto", "sans-serif"],
        'lobster':["Lobster", "sans-serif"],
        'playfair':["Playfair Display SC", "serif"],
        'bebas':["Bebas Neue", "sans-serif"]
      },
      colors:{
        'navy-blue':'#0f172a',
        'highlight':'#22d3ee',
        'gray':'#94a3b8'
      },
    },
  },
  plugins: [],
}

