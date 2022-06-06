module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/components/header/**/*.{js,ts,jsx,tsx}',
    './src/components/navbar/**/*.{js,ts,jsx,tsx}',
    './src/components/link/**/*.{js,ts,jsx,tsx}',
    './src/components/footer/**/*.{js,ts,jsx,tsx}',
    './src/components/titles/**/*.{js,ts,jsx,tsx}'
  ],
  content: [],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: '480px',
      // md: '768px',
      md: '900px',
      lg: '1080px',
      xl: '1080px'
      // xl: '1440px'
    },
    fontFamily: {
      necoblack: ["necoblack", "sans"],
      necobold: ["necobold", "sans"],
      necomedium: ["necomedium", "sans"],
      soralight: ["soralight", "sans"],
      soraregular: ["soraregular", "sans"],
      necoregular: ["necoregular", "sans"],
      sans: ['necoblack', 'necobold', 'necomedium', 'necomedium', 'soraregular'],
    },
    extend: {
      colors: {

        primary: '#F2F2F2',
        secondary: '#EE3D4E',
        defaultWhite: "#FFFFFF",
        white: "#FFFFFF",
        grey: "#CEDADD",
        darkGrey: '#4F5766',
        textPrimary: '#0E3749',
        // textPrimary: '#838D9F',
        textSecondary: 'rgba(131, 141, 159, .7)'
      }
    },
  },
  plugins: [],
}
