/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "mid-md-lg": "1024px", // Custom breakpoint starting at 1024px
        "lg-plus": "1091px", // Custom breakpoint starting at 1091px
      },
    },
  },
  plugins: [],
};
