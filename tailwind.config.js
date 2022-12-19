/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      "gray": {
        100: '#F1F3F5',
        200: '#DADCE0',
        300 : '#70757a', //color of pre val 
      },
      "blue": {
        100: '#4285F4',
      },
      "white":{
        100: '#ffffff',
      },
      "black":{
        100: '#202124' // color of display number
      }
    },
    fontFamily: {
      'sans': ["Roboto"],
    }
  },
  plugins: [],
}
