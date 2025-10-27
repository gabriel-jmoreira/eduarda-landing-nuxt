/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app.vue',
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.{vue,js,ts,jsx,tsx}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0b132b',
        accent: '#c5a572',
        cream: '#f8f7f4',
        muted: '#e6e6e6'
      },
      fontFamily: {
        serif: ['Playfair Display', 'ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif']
      }
    }
  },
  plugins: []
}
