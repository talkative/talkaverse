/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      dropShadow: {
        'block-right': '15px 15px 0px',
        'block-left': '-15px 15px 0px',
        'dark-block-right': '15px 15px 0px rgba(248, 251, 255, 1)',
      },
      colors: {
        // Using modern `rgb`
        darkblue: 'rgb(var(--color-dark-blue) / <alpha-value>)',
        babyblue: 'rgb(var(--color-baby-blue) / <alpha-value>)',
        tulip: 'rgb(var(--color-tulip) / <alpha-value>)',
        chinesesilver: 'rgb(var(--color-chinese-silver) / <alpha-value>)',
        mustard: 'rgb(var(--color-mustard) / <alpha-value>)',
        almostwhite: 'rgb(var(--color-almost-white) / <alpha-value>)',
        gray: 'rgb(var(--color-gray) / <alpha-value>)',
        talkativeyellow: 'rgb(var(--color-talkative-yellow) / <alpha-value>)',
        talkativedarkpurple:
          'rgb(var(--color-talkative-darkpurple) / <alpha-value>)',
      },
      screens: {
        tiltedPhone: { raw: '(min-width: 800px), (max-height: 450px)' },
        standingiPad: '768px',
        iPad: '844px',
        laptop: '1510px',
        '13tum': '2560px',
        '16tum': '3072px',
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
