/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: '#27374D',
        tertiary: '#526D82',
        quaternary: '#9DB2BF',
        quinary: '#DDE6ED',
        'card-100': '#292C6D',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #c4c4c4',
      },
      screens: {
        xs: '450px',
      },
    },
  },
  plugins: [],
}
