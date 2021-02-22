module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
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
