/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1180px",
        },
      },

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

