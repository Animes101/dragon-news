/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'popines': ['"Poppins", sans-seri"'],
      },
    },
  },
  plugins: [require("daisyui")],
}
