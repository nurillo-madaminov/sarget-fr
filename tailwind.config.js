/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'red'
      },
      backgroundImage: {
        'course-image': "url('https://via.placeholder.com/415x300')"
      }
    },
    screens: {
      '2xl': { max: '1535px' },
      custom: { max: '1350px' },
      xl: { max: '1280px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' }
    }
  },
  plugins: []
}
