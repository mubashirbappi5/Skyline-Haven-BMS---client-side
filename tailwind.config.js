/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#050c05',
        'background': '#fafdfa',
        'primary': '#39d42c',
        'secondary': '#94f08c',
        'accent': '#61f554',
       },
    },
  },
  plugins: [require('daisyui'),],

  daisyui: {
    themes: [
      
      'light', 
    ],
  },
}

