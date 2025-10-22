/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/index.html', './src/renderer/src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  // @ts-ignore
  plugins: [require('@tailwindcss/typography')]
}
