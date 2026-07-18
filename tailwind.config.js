/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
      },
      screens: {
        'mobile': { 'max': '809.98px' },
        'md-tablet': { 'min': '810px', 'max': '1199.98px' },
      },
      keyframes: {
        videoFadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        revealUp: {
          from: { opacity: '0', transform: 'translateY(80px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        revealRight: {
          from: { opacity: '0', transform: 'translateX(100px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        dotPulse: {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.45', transform: 'scale(1.45)' },
        },
      },
      animation: {
        videoFadeIn: 'videoFadeIn 0.9s ease-in-out',
        revealUp: 'revealUp 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
        revealRight: 'revealRight 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
        dotPulse: 'dotPulse 1.6s infinite',
      },
    },
  },
  plugins: [],
}
