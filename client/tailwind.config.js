/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-pattern': "url('C:/Users/amal/Desktop/book-heven/BookHaven/client/img/bookbackgrnd.jpg')",
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
      },
     
    }},
  plugins: [],
}

