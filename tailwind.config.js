/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  
    
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#0d1117', // Customize the dark blue as per your design
      },
    },
  },
  plugins: [
    require('daisyui'),
  
  ],
  
}