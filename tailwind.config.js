/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'custom-xl': "200px",
      },

      lineHeight: {
        'custom-xl':"220px",
      },
       
      backgroundImage: {
        'india-flag': "url('/public/assets/images/webp/india-flag.webp')",
      },
    },
  },
  plugins: [],
}

