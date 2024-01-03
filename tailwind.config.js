/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          DEFAULT: 'ffd25d',
          50: '#fffbef',
          100: '#fff6df',
          200: '#ffedbe',
          300: '#ffe49e',
          400: '#ffdb7d',
          500: '#ffd25d',
          600: '#cca84a',
          700: '#997e38',
          800: '#665425',
          900: '#332a13',
        },
        red: {
          DEFAULT: 'ff7272',
          50: '#fff1f1',
          100: '#ffe3e3',
          200: '#ffc7c7',
          300: '#ffaaaa',
          400: '#ff8e8e',
          500: '#ff7272',
          600: '#cc5b5b',
          700: '#994444',
          800: '#662e2e',
          900: '#331717',
        },
        blue: {
          DEFAULT: '9fc1f4',
          50: '#f5f9fe',
          100: '#ecf3fd',
          200: '#d9e6fb',
          300: '#c5daf8',
          400: '#b2cdf6',
          500: '#9fc1f4',
          600: '#7f9ac3',
          700: '#5f7492',
          800: '#404d62',
          900: '#202731',
        },
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};
