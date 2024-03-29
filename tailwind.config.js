/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     fontFamily:{
      'Archivo':['Archivo', 'sans-serif'],
      'DM':['DM Serif Display', 'serif'],
      'Hanken':['Hanken Grotesk', 'sans-serif']
     },
     listStyleType: {
        'circle':'circle'
     }
    },
  },
  plugins: [],
}
