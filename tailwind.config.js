module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Helvetica Neue'],
    },
    extend: {
      fontSize: {
        '4.5xl': ['2.5rem', { lineHeight: '1' }], // You can adjust the line height as needed
      },
      colors: {
        dark: '#000',
        white: '#fff',
        lightText: '#76797d',
      },
      // ... any other custom extensions ...
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
