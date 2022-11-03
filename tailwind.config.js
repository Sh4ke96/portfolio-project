/** @type {import('tailwind.css').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#72e2ae",
        blue: "#0f172a",
        gray: "#bfbecb",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1350px",
      },
      borderWidth: {
        10: "10px",
      },
    },
  },
  plugins: [],
};
