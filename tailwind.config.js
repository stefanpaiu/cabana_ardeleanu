/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        'water-blue-dark': '#006A71',
        'water-blue-medium-dark': '#2a9fa4',
        'water-blue-medium': '#22ABB4',
        'water-blue-medium-light': '#2cd5e2',
        'water-blue-light': '#63E0E9',
        'highlight-blue-light': '#208FCD',
        'highlight-blue-dark': '#0673B1',
        'grass-green-dark': '#70A816',
        'grass-green-medium': '#85C51E',
        'grass-green-light': '#9DDE32',
        'paragraph': '#898888',
        'highlight': '#ffe251'
      },
      backgroundImage: {
        'landscape': "url('./images/cover.jpg')",
        'lodge2': "url('./images/lodge/lodge2.jpg')",
        'lodge1': "url('./images/lodge/lodge1.jpg')",
        'lodge3': "url('./images/lodge/lodge3.jpg')",
        'bear': "url('./images/nature/bear-snow.jpg')"
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}