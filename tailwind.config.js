/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        smooth: '0 8px 24px -12px rgba(2,6,23,0.25)',
      }
    },
  },
  plugins: [],
}
