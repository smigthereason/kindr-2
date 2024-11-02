/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",

  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1600px",
        "2xl": "1400px",
      },
    },
    fontFamily: {
      inter: ['"Inter"', "sans-serif"],
    },
    extend: {
      colors: {
        accent: "#FF6633",
        primary: "#191615",
        secondary: "#29221D",
        creme: "#FFF5EA",
      },
      backgroundImage: {
        'world': "url('/src/assets/images/world-background.png')",
        'story1': "url('/src/assets/images/story1.png')",
        'story2': "url('/src/assets/images/story2.png')",
        'story3': "url('/src/assets/images/story3.png')",
        'story4': "url('/src/assets/images/story4.png')",
        'story5': "url('/src/assets/images/story5.png')",
        'about' : "url('/src/assets/images/about.png')",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        accent: "#FF6633",
        secondary:"#29221D",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};


