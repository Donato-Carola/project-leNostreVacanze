import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Scansiona tutti i file React
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui], // Usa l'importazione eseguita sopra
  daisyui: {
    themes: ["light"],
  },
}

