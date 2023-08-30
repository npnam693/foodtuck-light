/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    content: {
      'star': "url('/textures/stars.png')",
      'limb': "url('/textures/limb.png')"
    },
    colors: {
      'primary': '#195A00',
      'text': '#333',
      'content': "#4f4f4f",
      'disabledGreen': "rgba(168,188,161,.3)",
      'white': '#fff',
      'black': '#000',
    },
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
      'attractive': ['Miniver', 'cursive']
    }, 
    extend: {},
  },
  plugins: [],
}

