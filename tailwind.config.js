/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login': "url('/src/assets/login.jpg')",
        'leave': "url('/src/assets/managerbg.png')",
        'dashboard': "url('/src/assets/managerbg.png')",
        'announcement': "url('/src/assets/managerbg.png')"
      }
    },
  },
  plugins: [require('flowbite/plugin')],
   
}

