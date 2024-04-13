// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'Roboto', 'sans-serif'],
      },
      colors: {
        customgreen: '#70AF91',
        custompurple: '#36747d',
      },
    },
  },
  plugins: [],
};
