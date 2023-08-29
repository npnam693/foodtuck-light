/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    content: {
      'star': "url('/decoration/stars.png')",
      'limb': "url('/decoration/limb.png')"
    },
    colors: {
      'primary': '#195A00',
      'text': '#333',
      'content': "#4f4f4f",
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

