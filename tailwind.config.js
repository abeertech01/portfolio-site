/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      cursor: {
        torch: "url('/src/assets/cursor-smaller.png'), pointer",
      },
      fontFamily: {
        inter: ["Inter"],
        roboto: ["Roboto"],
        poppins: ["Poppins"],
      },
      colors: {
        white: "#e6f0f4",
        grayish: "#95b2bc",
        background: "#0c2732",
        blue: "#34a0e2",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
