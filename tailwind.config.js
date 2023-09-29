/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html'],
  theme: {
    extend: {
      colors: {
        primary1: "#222831",
        primary2: "#393E46",
        primary3: "#FFD369",
        primary4: "#EEEEEE",
        primary5: "#FFFFFF",
        primary6: "#CBCBCB",
      },
      backgroundImage: {
        'my-image':"url('img/bgSatu.jpg')",
      }
    },
  },
  plugins: [],
}

