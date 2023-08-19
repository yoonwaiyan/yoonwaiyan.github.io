module.exports = {
  content: ['./src/{pages,components}/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
