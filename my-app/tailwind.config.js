/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      screens: {
        'mb': '992px',
      },

      gridTemplateColumns: {
        // Simple 16 column grid
        'card': 'repeat(5, minmax(100px, 200px))',

        // 'footer': '200px minmax(900px, 1fr) 100px',
      }
    },
  },
  plugins: [],
}