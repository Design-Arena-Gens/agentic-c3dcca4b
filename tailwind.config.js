/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        night: {
          900: "#0b0c10",
          800: "#0f1117",
          700: "#151a23"
        },
        ember: {
          400: "#fdbb2d",
          500: "#df4e1f",
          600: "#b32d00"
        }
      },
      fontFamily: {
        display: ['"Cinzel"', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 60px rgba(253,187,45,0.25)'
      },
      backgroundImage: {
        'hero-texture': "radial-gradient(1200px 500px at 70% -10%, rgba(253,187,45,0.12), rgba(0,0,0,0))",
        'grid-glow': "linear-gradient(rgba(253,187,45,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(253,187,45,0.12) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
