/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F0C9D9", // ורוד בייבי (מהעיצוב)
        accent: "#704724",  // חום כהה (מהעיצוב - לטקסטים וכפתורים)
        background: "#ffffff",
      },
    },
  },
  plugins: [],
} 