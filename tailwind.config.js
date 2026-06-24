/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0F4C81',
        'primary-light': '#1E88E5',
        accent: '#4CAF50',
        'bg-light': '#F8FAFC',
        'bg-dark': '#0B1120',
        'text-main': '#1F2937',
        'text-muted': '#6B7280',
        emergency: '#EF4444',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
