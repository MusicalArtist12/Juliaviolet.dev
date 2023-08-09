/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    '.public/*.json'
  ],
  theme: {
    extend: {
      boxShadow: {
        'box': '5px 5px 0px 0px rgba(0, 0, 0, 1)',
      }
    },
  },
  plugins: [],
}