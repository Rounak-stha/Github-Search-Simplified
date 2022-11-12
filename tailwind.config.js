/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const { gray, blue, green, yellow, red} = require('./constants/customColors')

module.exports = {
  content: [
    './src/**/*.{js, jsx}',
    './public/index.html'
  ],
  theme: {
    extend: {
      boxShadow: {
        'around-sm': '0px 0px 5px 3px rgba(0, 0, 0, 0.1), 0px 0px 4px 1px rgba(0, 0, 0, 0.1)',
        'around-md': '0px 0px 8px 6px rgba(0, 0, 0, 0.1), 0px 0px 4px 1px rgba(0, 0, 0, 0.1)',
        'around-lg': '0px 0px 11px 8px rgba(0, 0, 0, 0.1), 0px 0px 4px 1px rgba(0, 0, 0, 0.1)',
      },
    },
    colors: {
      ...colors,
      gray: {
        ...colors.gray,
        ...gray
      },

      blue: {
        ...colors.blue,
        ...blue
      },

      yellow: {
        ...colors.yellow,
        ...yellow
      },

      green: {
        ...colors.green,
        ...green
      },

      red: {
        ...colors.red,
        ...red
      },

      // bg
      'back-dark': gray[13],

      // forms
      'input-dark': gray['14'],

      // text color
      'light': colors.gray['400'],
      'lighter': colors.gray['200'],

      // border
      'bdr-dark': gray[10]
    }
  },
  plugins: [],
}
