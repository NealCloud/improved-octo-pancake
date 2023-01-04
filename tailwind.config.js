/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {  
        "walter-primary": "#BED435", 
        "walter-secondry": "#004E71"  
      }
    },
    fontFamily: { 
      Kenia: ["Zen Dots"]
    }
  },  
  plugins: []  
}
