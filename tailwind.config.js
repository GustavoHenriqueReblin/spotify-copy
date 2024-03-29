/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      display: ["Roboto"],
    },
    fontSize: {
      'xxs':'0.71rem',
      'xs':'0.75rem',
      'sm':'0.875rem',
      'base':'1rem',
      'lg':'1.125rem',
      'xl':'1.25rem',
      'xxl':'1.4rem',
      'h1-':'1.75rem',
      'h1':'2rem',
      'h1+': '2.5rem',
      'h2':'1.65rem',
    },
    extend: {
      screens: {
        'ssm': '10px',
        'ssm2': '400px',
        'md+': '960px',
        'xl+': '1386px'
      },
      spacing: {
        '86':'21.5rem',
        '94': '23rem',
        '102': '25rem',
        '112': '30rem',
        '128': '32rem',
      }, 
      colors: {
        'sucess': '#B6E388',
        'warning': '#ffb84d',
        'gray': '#1c1c1c'
      }
    },
  },
  icons: {
    icon: './app/files/img/favicon.ico'
  },
  plugins: [],
}
