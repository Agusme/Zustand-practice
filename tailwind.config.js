/** @type {import('tailwindcss').Config} */
export default {
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'main': 'url(/fondo1.png)'
      },
      backgroundColor:{
        'footer': '#1A1927'
      }
    },
  },
 plugins: [require("daisyui")],
}

