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
    screens:{
      sm: '480px',
      // md: '768px',
      md: '900px',
      lg: '1080px',
      xl: '1440px'
    },
    extend: {
      colors: {
        primary: '#093749',
        primaryLight: '#CEDADD',
        secondary: '#EE3F4F',
        defaultWhite: "#ffffff",
        white: '#F2F2F2',
        textPrimary: '#838D9F',
        textSecondary: 'rgba(131, 141, 159, .5)'
      }
    },
  },
  plugins: [],
}
