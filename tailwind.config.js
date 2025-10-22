/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cp: {
          black: '#0B0B0C',
          gold: '#D4AF37',
          goldHover: '#F2C94C',
          silver: '#C0C0C0',
          silverSoft: '#E5E5E5',
          darkGrey: '#1C1C1E',
          white: '#FFFFFF',
          success: '#4CAF50',
          error: '#FF4D4F',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        cp: '0 2px 6px rgba(212, 175, 55, 0.1)',
        cpHover: '0 0 12px rgba(212, 175, 55, 0.2)',
      },
    },
  },
  plugins: [],
}
