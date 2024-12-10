/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        scroll: 'scroll 20s linear infinite',
      },
      colors: {
        'custom-purple': '#a855f7', 
        'custom-pink': '#ec4899', 
    },
    },
  },
  plugins: [],
};