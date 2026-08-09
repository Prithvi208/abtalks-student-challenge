/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          950: '#070B16',
          900: '#0B1120',
          850: '#0F1729',
          800: '#141E33',
          700: '#1C2742',
          600: '#28365A',
          500: '#3A4A72',
        },
        paper: {
          50: '#FAFBFC',
          100: '#F4F6FA',
          200: '#E8ECF4',
          300: '#D4DAE8',
        },
        accent: {
          50: '#FFF8EC',
          100: '#FFEACB',
          200: '#FFD79A',
          300: '#FFC069',
          400: '#FFA52E',
          500: '#FF8A00',
          600: '#E67600',
          700: '#C25E00',
          800: '#914400',
          900: '#612D00',
        },
        success: {
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
        },
        danger: {
          400: '#FB7185',
          500: '#F43F5E',
          600: '#E11D48',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,138,0,0.15), 0 8px 30px -8px rgba(255,138,0,0.35)',
        card: '0 1px 2px rgba(7,11,22,0.4), 0 12px 32px -16px rgba(0,0,0,0.5)',
        pop: '0 10px 40px -10px rgba(255,138,0,0.45)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'pop': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '60%': { transform: 'scale(1.08)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'shimmer': {
          '100%': { transform: 'translateX(100%)' },
        },
        'grow-bar': {
          '0%': { width: '0%' },
          '100%': { width: 'var(--bar-width)' },
        },
        'float': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out both',
        'fade-in': 'fade-in 0.4s ease-out both',
        'scale-in': 'scale-in 0.35s ease-out both',
        'pop': 'pop 0.5s cubic-bezier(0.34,1.56,0.64,1) both',
        'shimmer': 'shimmer 1.8s infinite',
        'grow-bar': 'grow-bar 1s ease-out both',
        'float': 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
