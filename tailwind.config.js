/** @type {import('tailwindcss').Config} */



module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily: {
        'sans':'Segoe UI',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors : {
        light: {
          primary: "#FFFFFF",
          secondary: "#F5F5F5",
        },
        dark: {
          primary: "#232425",
          secondary: "#1F1F1F",
        }
      },
    },
  },
  plugins: [],
}
