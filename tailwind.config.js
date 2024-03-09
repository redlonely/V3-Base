/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "768px",
      lg: "960px",
      xl: "1200px",
      // "2xl": '1440px',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
