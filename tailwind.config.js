module.exports = {
  purge: ['./src/{pages,components}/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderWidth: ['first'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
