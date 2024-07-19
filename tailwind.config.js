/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'half-screen': '0 0 50vw 15vw rgba(16, 28, 92,0.5)', // Custom shadow
      },
    },
  },
  plugins: [],
}