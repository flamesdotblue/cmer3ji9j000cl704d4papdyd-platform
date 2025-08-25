/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        clay: {
          50: '#f7f9fc',
          100: '#eef2f8',
          200: '#dfe6f1',
          300: '#cfd6e6',
          400: '#b8c0d3',
          500: '#9aa4b9',
          600: '#7d88a0',
          700: '#626c84',
          800: '#4e566a',
          900: '#3f4656'
        }
      },
      boxShadow: {
        skeuo: '8px 8px 16px #b0b6c5, -8px -8px 16px #ffffff',
        skeuoSm: '4px 4px 8px #b0b6c5, -4px -4px 8px #ffffff',
        skeuoInset: 'inset 8px 8px 16px #b0b6c5, inset -8px -8px 16px #ffffff',
        skeuoInsetSm: 'inset 4px 4px 8px #b0b6c5, inset -4px -4px 8px #ffffff'
      }
    },
  },
  plugins: [],
};
