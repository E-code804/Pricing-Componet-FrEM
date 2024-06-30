/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-gradient-start": "var(--primary-gradient-start)",
        "primary-gradient-end": "var(--primary-gradient-end)",
        "very-light-grayish-blue": "var(--very-light-grayish-blue)",
        "light-grayish-blue": "var(--light-grayish-blue)",
        "grayish-blue": "var(--grayish-blue)",
        "dark-grayish-blue": "var(--dark-grayish-blue)",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(to right, var(--primary-gradient-start), var(--primary-gradient-end))",
      },
    },
  },
  plugins: [],
};
