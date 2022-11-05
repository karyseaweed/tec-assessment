/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      primary: ['Montserrat', 'sans-serif'],
      secondary: ['Lora', 'serif'],
    },
    fontSize: {
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.1875rem'],
      base: ['1rem', '1.375rem'],
      heading: ['1.5rem', '1.875rem'],
    },
    colors: {
      grey: {
        50: '#FAFAFA',
        200: '#E4E4E7',
        300: '#D4D4D8',
        400: '#A1A1AA',
        500: '#71717A',
        600: '#52525B',
        800: '#27272A',
      },
      blue: {
        DEFAULT: '#002E5D',
        light: '#256BA2',
        muted: '#406286',
      },
      white: '#FFFFFF',
      transparent: 'transparent',
    },
    maxWidth: {
      large: '1200px',
    },
    extend: {},
  },
  plugins: [],
};
