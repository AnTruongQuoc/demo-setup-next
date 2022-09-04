module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    boxShadow: {
      dark: '0px 4px 16px rgba(174, 112, 65, 0.25)',
    },
    extend: {
      colors: {
        primary: '#2879FD',
      },
      fontSize: {
        banner: '4rem',
      },
      lineHeight: {
        banner: '5rem',
        section: '4rem',
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['dark'],
    },
  },
  plugins: [],
};
