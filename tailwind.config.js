/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'aro-green': '#092B12',
        'aro-tan-dark': '#DDB67F',
        'aro-tan-lt': '#F5E7D3',
        'aro-blue': '#08273A',
      },
    },
  },
  plugins: [],
}
