/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Abril: ["Abril"],
        Abhaya: ["Abhaya"],
        AbhayaSemi: ["AbhayaSemi"],
        Jua: ["Jua"],
        CBYG: ["CBYG"]
      },
      animation: {
        blob1: "blob1 7s infinite",
        blob2: "blob2 4s infinite",
      },
      keyframes: {
        blob1: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(50px, -30px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-50px, 30px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        blob2: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(-50px, 30px) scale(1.1)",
          },
          "66%": {
            transform: "translate(50px, -30px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
      colors: {
        transparent: 'transparent',
        'gradient-1': '#FFDDD4',
        'gradient-2': '#FF6A43',
        'maroon': '#631A1A',
        'gray-md': '#DADADA',
        'light-pink': '#FFE1D9', 
        'med-pink':'#FFCEC1',
        'dark-pink': '#FFBBA9',
        'darker-pink': '#FF8D6E',
        'brown': '#A2442B',
        'red-gradient': '#E9656A', 
        'orange-gradient': '#FF9C7D',
        'med-red': '#F497AA', 
        'bg': '#ECECFF'
      },
    },
  },
  plugins: [require("daisyui")],
}
