import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        // Strict monochrome palette
        'mono': {
          'black': '#000000',
          'white': '#FFFFFF', 
          'gray-50': '#F8F9FA',
          'gray-100': '#F1F3F4',
          'gray-200': '#E8EAED',
          'gray-300': '#DADCE0',
          'gray-400': '#BDC1C6',
          'gray-500': '#9AA0A6',
          'gray-600': '#80868B',
          'gray-700': '#5F6368',
          'gray-800': '#3C4043',
          'gray-900': '#202124',
        },
        // Override shadcn defaults with monochrome
        background: '#FFFFFF',
        foreground: '#000000',
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#000000',
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#000000',
        },
        primary: {
          DEFAULT: '#000000',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#F8F9FA',
          foreground: '#000000',
        },
        muted: {
          DEFAULT: '#F8F9FA',
          foreground: '#5F6368',
        },
        accent: {
          DEFAULT: '#F1F3F4',
          foreground: '#000000',
        },
        destructive: {
          DEFAULT: '#DC2626',
          foreground: '#FFFFFF',
        },
        border: '#E8EAED',
        input: '#E8EAED',
        ring: '#000000',
      },
      keyframes: {
        'fade-in': {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(10px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
        'slide-in': {
          '0%': { 
            opacity: '0', 
            transform: 'translateX(-20px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateX(0)' 
          },
        },
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-in': 'slide-in 0.5s ease-out',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
