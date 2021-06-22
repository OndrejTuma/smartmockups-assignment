module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    colors: {
      primary: '#000000',
      secondary: '#11BEFF',
      dark: '#111111E5',
      light: '#E1E1E1',
      gray: '#4A4A4A',
      white: '#FFFFFF',
    },
    fontFamily: {
      primary: ['Montserrat', 'sans-serif'],
    },
    fontSize: {
      sm: 12,
      base: 15,
    },
    extend: {
      gridAutoColumns: {
        categories: 'minmax(320px,1fr)',
      },
      gridTemplateColumns: {
        categories: 'repeat(auto-fill,minmax(320px,1fr))',
      }
    },
  },
  variants: {},
  plugins: [],
}
