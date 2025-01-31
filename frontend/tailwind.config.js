/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}','./src/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0a192f',
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-[#0a192f]/80',
    'hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]',
  ],
};
