/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        bounce: "bounce 1s ease infinite",
        slideInLeft: "slideInLeft 1s ease-out 0s 1",
      },
    },
    fontFamily: {
      "cormorant-garamond": ['"Cormorant Garamond"', "serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
