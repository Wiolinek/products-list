/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'green-gradient': 'radial-gradient(100% 246.25% at 100% 50%, #B1CA52 0%, #418241 100%)',
        'yellow-gradient': 'radial-gradient(100% 513.85% at 0% 66.67%, #F89446 0%, #F5B730 100%)',
        'neutral-grandient':
          'radial-gradient(102.89% 88.03% at 117.2% 102.58%, #FFFBF2 0%, #F8F3E9 0.01%, #FFFFFF 100%)',
      },
      boxShadow: {
        'custom-box-shadow': '0px 0px 10px 0px rgba(0, 0, 0, 0.070588)',
      },
      dropShadow: {
        'custom-shadow': '0px 0px 20px rgba(0, 0, 0, 0.070588)',
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      textColor: {
        default: '#151515',
      },
    },
  },
  plugins: [],
};