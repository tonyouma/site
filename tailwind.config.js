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
    screens:{
      sm: '480px',
      // md: '768px',
      md: '900px',
      lg: '1080px',
      xl: '1080px'
      // xl: '1440px'
    },
    fontFamily:{
      CeraRoundProNormal: ["Cera Round Pro Regular", "sans"],
      CeraRoundProBold: ["Cera Round Pro Bold"],
      SatoshiBold: ['Satoshi-Bold'],
      SatoshiBlack: ['Satoshi-Black'],
      SatoshiNormal: ['Satoshi-Medium'],
      sans:['Satoshi-Regular','Satoshi-Bold','Satoshi-Black','Satoshi-Medium','Cera Round Pro Regular','Cera Round Pro Bold'],
    },
    extend: {
      colors: {

        primary: '#F2F2F2', 
        secondary: '#EE3F4F',
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
