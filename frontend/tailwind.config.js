/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'image-1': "linear-gradient(to right bottom, rgba(0,0,0,.9) 0%, rgba(0,0,0,.4) 50%, rgba(0,0,0,.8) 100%), url('../src/assets/test1.jpg')",
     },
    },
  },
  plugins: [],
}

