module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'basic-sans'      : ['basic-sans', 'sans-serif'],
      'stratos'         : ['stratos', 'sans-serif'],
      'stratos-lights'  : ['stratos-lights', 'sans-serif']
    },
    colors: {
      'green'           : '#A9CF38',
      'aqua'            : '#24B6BF',
      'white'           : '#FFFFFF',
      'black'           : '#000000',
      'carbon'          : '#1F1F1F',
      'grey'            : '#474848',
      'pale-grey'       : '#F1F5F5',
      'pale-teal'       : '#F3F9F9',
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontFamily: theme('fontFamily.stratos'),
            },

          }
        }
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 