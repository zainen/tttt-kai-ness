/** @type {import('tailwindcss').Config} */
import 'dotenv/config'
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        100: '#7FD1C7',
        200: '#61b3aa',
        300: '#147169',
        400: '#1d4446',
      },
      accent: {
        100: '#F2C94C',
        200: '#886b00',
      },
      text: {

      },
      tttt: {
        100: '#EAF4F4',
        200: '#e0eaea',
        300: '#b8c1c1',
      }
    },
    fontFamily: {
      sans: ['Dosis', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'veggie': `url("${process.env.URL}/img/veggie-bg.jpg")`
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),

  ],

}

