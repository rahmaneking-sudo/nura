/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  theme: {
    extend: {
      colors: {
        emerald: {
          primary: '#0F6E56',
          dark: '#085041',
          light: '#E1F5EE',
          surface: '#C0DD97',
        },
        gold: {
          DEFAULT: '#F5C842',
          dark: '#D4A017',
          light: '#FDF3CC',
        },
        nura: {
          bg: '#FFFFFF',
          text: '#1a1a1a',
          muted: '#4a4a4a',
          border: '#E1F5EE',
        }
      },
      fontFamily: {
        arabic: ['Amiri', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-left': 'slideLeft 0.6s ease forwards',
        'slide-up': 'slideUp 0.6s ease forwards',
        'shake': 'shake 0.4s ease',
        'pulse-gold': 'pulseGold 2s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: { from: { opacity: 0, transform: 'translateY(20px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        slideLeft: { from: { opacity: 0, transform: 'translateX(-40px)' }, to: { opacity: 1, transform: 'translateX(0)' } },
        slideUp: { from: { opacity: 0, transform: 'translateY(40px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        shake: { '0%,100%': { transform: 'translateX(0)' }, '25%': { transform: 'translateX(-8px)' }, '75%': { transform: 'translateX(8px)' } },
        pulseGold: { '0%,100%': { boxShadow: '0 0 0 0 rgba(245,200,66,0.4)' }, '50%': { boxShadow: '0 0 0 12px rgba(245,200,66,0)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
      },
      boxShadow: {
        'nura': '0 4px 24px rgba(15,110,86,0.12)',
        'gold': '0 4px 24px rgba(245,200,66,0.25)',
      },
      borderRadius: {
        'nura': '12px',
        'nura-sm': '8px',
      }
    }
  },
  plugins: []
}
