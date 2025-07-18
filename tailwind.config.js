/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          50: "#AFC7CE",
          100: "#D1DCDF",
          200: "#C1D3D8",
          300: "#A2C5CD",
          400: "#8EA0A5",
          500: "#183B46",
          600: "#0D4856",
          800: "#01242D",
        },
        "secondary": "#77EB3D",
        "disable": "#707070",
      },
      fontFamily: {
        "alliance": ["var(--font-alliance-no2)"],
        "ppMori": ["var(--font-ppmori)"]
      }
    },
  },
  plugins: [],
}