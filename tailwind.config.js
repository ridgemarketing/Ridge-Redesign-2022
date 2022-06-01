module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false, 
  theme: {
    screens:{
      'sm'                 : '414px',
      'md'                 : '768px',
      'lg'                 : '1024px',
      'xl'                 : '1920px'
    },
    fontFamily: {
      'basic-sans'         : ['basic-sans', 'sans-serif'],
      'stratos'            : ['stratos', 'sans-serif'],
      'stratos-lights'     : ['stratos-lights', 'sans-serif']
    },
    colors: {
      'rm-green'           : '#A9CF38',
      'rm-aqua'            : '#24B6BF',
      'rm-white'           : '#FFFFFF',
      'rm-black'           : '#000000',
      'rm-carbon'          : '#1F1F1F',
      'rm-grey'            : '#474848',
      'rm-pale-grey'       : '#F1F5F5',
      'rm-pale-teal'       : '#F3F9F9',
    },
    fontSize: {
        '21px'             : '1.3125rem',
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