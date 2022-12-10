/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('media/Desktop1.png')",
        'hero-2': "url('media/Desktop2.png')",
        'hero-3': "url('media/Desktop3.png')",}
    },
  },
  plugins: [],
}
