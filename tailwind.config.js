// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primaryBg: '#FAFF00',
        secondaryBg: '#222',
        primaryColor: '#FFFFFF',
      },
      fontFamily: {
        sans: ['"MADE Outer Sans"', 'sans-serif'],
      },
      fontSize: {
        h1: ['64px', 'normal'],
        h2: ['48px', 'normal'],
        h6: ['18px', 'normal'],
        p: ['14px', '1.617'], // 161.7% line-height as per your specs
        'h1-sm': ['40px', 'normal'],
        'h2-sm': ['28px', 'normal'],
      },
      fontWeight: {
        light: 300,
        medium: 500,
        bold: 700,
      },
    },
  },
  plugins: [],
}
