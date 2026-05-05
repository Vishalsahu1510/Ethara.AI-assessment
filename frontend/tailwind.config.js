export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        soft: '0 20px 50px rgba(15, 118, 110, 0.12)',
      },
      colors: {
        brand: {
          50: '#ecfdf5',
          100: '#d1fae5',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          900: '#134e4a',
        },
        ink: {
          900: '#10201c',
          950: '#071311',
        },
      },
    },
  },
  plugins: [],
}
