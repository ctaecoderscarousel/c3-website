/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0671DD",
        "primary-light": "#00A9F2",
        "secondary": "#FE16A1",
        "tertiary": "#08173C"
      }
    },
  },
  plugins: [],
}
