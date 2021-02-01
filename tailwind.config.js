module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
    },
    extend: {},
  },
  variants: {
    extend: {
      borderWidth: ['first'],
    },
  },
  plugins: ['gatsby-plugin-postcss', require('@tailwindcss/typography')],
}
