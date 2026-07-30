/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F0C9D9", // Baby pink (brand palette)
        accent: "#704724",  // Dark brown (brand palette, text and buttons)
        background: "#ffffff",
      },
    },
  },
  plugins: [],
} 