/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login': "url('/src/assets/login.jpg')"
      }
    },
  },
  plugins: [require('flowbite/plugin')],
   
}

