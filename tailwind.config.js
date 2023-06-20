/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fullscript: "#437256",
        soplugged: "#4e3505",
        dribbble: "#EA4C89",
        hashnode: "#3367F6",
      },
    },
  },
  plugins: [],
};
