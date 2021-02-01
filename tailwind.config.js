module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderWidth: ['first'],
    },
  },
  plugins: ['gatsby-plugin-postcss', require('@tailwindcss/typography')],
}
