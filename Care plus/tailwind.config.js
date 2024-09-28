/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '0', // Equivalent to px-5 (20px padding)
        screens: {
          DEFAULT: '100%', // Full width by default
          lg: '1336px', // Max width of 1336px for larger screens
        },
        margin: {
          'mt-20': '80px', // Top margin of 80px
        },
      },
      backgroundColor: {
        'custom-beige': '#faeada', // Custom background color with the hex value
      },
      fontFamily: {
        manrope: ['Manrope-sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
