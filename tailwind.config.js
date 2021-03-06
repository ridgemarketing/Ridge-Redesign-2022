module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist:[
    'text-rm-green', 
    'bg-rm-green',
    'bg-rm-pale-grey',
    'bg-black',
    'bg-white',
    'bg-white-black',
    'md:pt-36',
    'pt-24',
    '-mb-12',
    'md:-mb-32'
  ],
  darkMode: false, 
  theme: {
    screens:{
      'sm'                 : '414px',
      'md'                 : '768px',
      'lg'                 : '1024px',
      'xl'                 : '1280px',
      '2xl'                : '1920px',
    },
    container: {
      center: true,
      screens: {
        'sm'                 : '640px',
        'md'                 : '700px',
        'lg'                 : '930px',
        'xl'                 : '1280px',
        '2xl'                : '1280px',      
      }
    },
    extend: {
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
        'rm-pale-teal'       : '#F3F9F9'
      },
      fontSize: {
          '18px'             : '1.125rem',
          '21px'             : '1.3125rem',
          '26px'             : '1.625rem',
          '30px'             : '1.875rem',
          '40px'             : '2.5rem',
          '45px'             : '2.8125rem',
          '50px'             : '3.125rem',
          '55px'             : '3.4375rem', 
          '60px'             : '3.75rem',
          '80px'             : '5rem',
          '100px'            : '6.25rem',
          '120px'            : '7.5rem',
          '160px'            : '10rem',
      },
      lineHeight: {
          '26px'            : '1.625rem',
          '28px'            : '1.75rem',
          '30px'            : '1.875rem',
          '32px'            : '2rem',
          //Q mobile
          '36px'            : '2.25rem',
          //H5 - 44px
          '44px'            : '2.75rem',
          //H2 - 49.75px
          'H2-H3'           : '3.10rem',
          //Pull Quote 54.725px
          'PULL-Q'          : '3.42rem',
          //H1 Mobile - 59.7px
          'H1-m'            : '3.73rem',
          // H1 - 79.6px
          'H1'              : '5.25rem',
          //Stats M
          '120px'           : '7.5rem',
          //Stats D
          '160px'           : '10rem',
      },
      boxShadow: {
        'block': '0px 0px 20px rgba(0, 0, 0, 0.2)'
      },
      gridTemplateColumns: {
        '75/25': '75% 25%'
      },
      keyframes: {
        quoteSlide: {
          '0%': { 
              opacity: '0',
              transform: 'translateX(-25px)'
          },
          '25%': {
              opacity: '0'
          },
          '100%': { 
              opacity: '1',
              transform: 'translateX(0px)'
          }
        }
      },
      animation: {
        quote: 'quoteSlide .75s ease-out forwards'
      },
      backgroundImage: {
        'white-black': 'linear-gradient( to bottom, #ffffff 0%, #ffffff 60%, #000000 60%, #000000 100%)'
      }
    }
  }
} 