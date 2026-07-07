/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FBF3E8',
        ink: '#241914',
        coffee: '#5C4A3F',
        mocha: '#7A6558',
        amber: '#F59333',
        orange: '#E86A17',
        brick: '#C0392B',
        peach: '#FFE0BE',
        blush: '#FFD2C2',
        leaf: '#22A65A',
        leafbright: '#22C767',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        floatY: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-22px)' } },
        floatY2: { '0%,100%': { transform: 'translateY(0) rotate(-5deg)' }, '50%': { transform: 'translateY(-16px) rotate(5deg)' } },
        floatY3: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-32px)' } },
        spinSlow: { to: { transform: 'rotate(360deg)' } },
        pulseGlow: { '0%,100%': { opacity: '.4', transform: 'scale(1)' }, '50%': { opacity: '.8', transform: 'scale(1.09)' } },
        marquee: { to: { transform: 'translateX(-50%)' } },
      },
      animation: {
        floatY: 'floatY 7s ease-in-out infinite',
        floatY2: 'floatY2 5.5s ease-in-out infinite',
        floatY3: 'floatY3 7.5s ease-in-out infinite',
        spinSlow: 'spinSlow 24s linear infinite',
        pulseGlow: 'pulseGlow 9s ease-in-out infinite',
        marquee: 'marquee 26s linear infinite',
      },
    },
  },
  plugins: [],
};
