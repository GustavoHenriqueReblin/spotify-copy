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
    extend: {
      screens: {
        'ssm': '10px',
        'ssm2': '400px',
      },
      spacing: {
        '94': '23rem',
        '102': '25rem',
        '112': '30rem',
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
