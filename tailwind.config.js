/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideInUnderline: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        slideFloat: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        slideInUnderline: 'slideInUnderline 1s ease-out forwards',
        slideFloat: 'slideFloat 1.2s ease-out forwards',
        floatSlow: 'float 3s ease-in-out infinite',
      },
      fontFamily: {
        preahvihear: ["Preahvihear", "sans-serif"],
      },
      borderRadius: {
        '32px': '32px',
        '20px': '20px',
      },
      blur: {
        '3xl': '24px',
      },
    },
  },
  plugins: [],
};
