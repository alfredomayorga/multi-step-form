const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      body: ['12px', 'auto'],
      'body-md': ['14px', 'auto'],
      'body-lg': ['16px', '25px'],
      heading: ['32px', 'auto'],
    },
    colors: {
      purple: '#483EFF',
      error: '#EE374A',
      'light-bg': '#EFF5FF',
      'border-color': '#D6D9E6',
      demin: '#022959',
      gray: '#9699AA',
      'light-blue': '#ABBCFF',
      'light-grey': '#D6D9E6',
      orange: '#FFAF7E',
      pink: '#F9818E',
      'sky-blue': '#BEE2FD',
      'white-two': '#F8F9FF',
      white: '#FFFFFF',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
