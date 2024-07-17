/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#001F3F',  
        secondary: '#007BFF',  
        accent: '#FF851B',
      },
    },
  },
  plugins: [],
}

