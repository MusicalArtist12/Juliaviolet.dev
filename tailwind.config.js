module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'header_bk': '#a06ffd',
      'block-bk': '#573499',
      'footer-bk': '#6FDEFC',
      'text_light': '#FCCAD2',
      'text_dark': '#000000',
    },
    fontFamily: {
      sans: ['sans-serif'],
      serif: ['serif'],
    },

  },
  plugins: [],
}

