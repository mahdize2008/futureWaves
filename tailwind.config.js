/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  darkMode: 'dark',
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
    },
    container: {
      padding: '1rem',
      center: true,
    },
    colors: {
      white: '#ffffff',
      transparent: 'transparent',
      black: '#000',
      
      primary: '#0b45e5',
      'primary-dark': '#1b1825',
      'primary-dark-alpha': '#17141f',
      secondary: '#ffa200',


      natural: '#818087',
      'natural-alpha': '#f5f5f5',
      'natural-beta': '#666666',


      light: '#f8f8f8',
      dark: '#4c4c4c',
      darker: '#a0a0a0',
      'dark-alpha': '#f3f3f3',

      // 'natural-tetha': 'rgba(244, 244, 244, 0.93)',
      // 'natural-gamma': '#6c6c6c',
      // primary: '#FDCF08',
      // orange: '#FF8256',
      // lighter: '#D9D9D9',
    },
    fontSize: {
      '3xs': '8px',
      '2xs': '10px',
      xs: '12px',
      '2sm': '13px',
      sm: '14px',
      '2base': '15px',
      base: '16px',
      md: '18px',
      lg: '20px',
      xl: '22px',
      '2xl': '24px',
      '3xl': '26px',
      '4xl': '28px',
      '5xl': '30px',
      '6xl': '32px',
      '7xl': '34px',
      '8xl': '36px',
      '9xl': '38px',
      '10xl': '40px',
      '11xl': '42px',
      '12xl': '44px',
      '13xl': '46px',
      '14xl': '48px',
      '15xl': '50px',
      '20xl': '60px',
    },

    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '750',
      black: '800',
      extrablack: '900',
    },
    boxShadow: {
      lighter:'3px 5.196px 40px 0px rgba(0, 0, 0, 0.08),inset 0px 1px 0px 0px rgba(255, 255, 255, 0.08)',
      'lighter-alpha':'0px 8px 60px 0px rgba(0, 0, 0, 0.08)',
      'lighter-beta':'0px 10px 100px 0px rgba(0, 0, 0, 0.06)',
      'lighter-tetha':'3px 5.196px 60px 0px rgba(0, 0, 0, 0.1)'
    },
  },
  plugins: [],
}
