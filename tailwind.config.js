/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['nord', {
      dim: {
        ...require('daisyui/src/theming/themes')['dim'],
        secondary: '#D4F1F4',
        accent: '#145DA0'
      }
    }]
  }
}

