/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#232e3e',
        },
        orange: {
          50: '#f8991e',
        },
        light: {
          100: '#f5f6f8',
          200: '#dee8ff',
          300: '#cad7f6',
          400: '#dbdbdb',
        },
        success: {
          light: '#cef2da',
          dark: '#0b611a',
        },
      },
    },
  },
  plugins: [],
};
