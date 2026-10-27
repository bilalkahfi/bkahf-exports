/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          950: '#0a0d12',
          900: '#11151c',
          850: '#171d26',
          800: '#1f2633',
          700: '#2c3545',
          600: '#434e63',
        },
        brand: {
          amber: '#f59e0b',
          amberDark: '#d97706',
          amberLight: '#fbbf24',
          gold: '#eab308',
          green: '#10b981',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
