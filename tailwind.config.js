module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    colors: {
      primary: '#000000',
      secondary: '#11beff',
      light: '#e1e1e1',
      gray: '#4a4a4a',
      white: '#ffffff',
    },
    fontFamily: {
      primary: ['Montserrat', 'sans-serif'],
    },
    fontSize: {
      none: 0,
      sm: 12,
      base: 15,
    },
    screens: {
      sm: '400px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      gridAutoColumns: {
        categoriesMobile: 'minmax(220px,1fr)',
        categories: 'minmax(320px,1fr)',
      },
      gridTemplateColumns: {
        categoriesMobile: 'repeat(auto-fill,minmax(220px,1fr))',
        categories: 'repeat(auto-fill,minmax(320px,1fr))',
      }
    },
  },
  variants: {},
  plugins: [],
}
