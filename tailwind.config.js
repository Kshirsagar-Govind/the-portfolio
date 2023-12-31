/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00B4D8',
        'secondary': '#FFFFFF',
        'ternary': '#000000',
        'primary-dark': '#002635',
        'secondary-dark': '#001118',
        'ternary-dark': '#ffffff'
    },
    },
  },
  plugins: [],
}

