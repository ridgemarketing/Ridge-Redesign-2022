module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist:[
    {
      pattern: /p(\w?)-[0-9]+/g,
      variants: ['sm', 'md', 'lg', 'xl', 'xlz', '2xl'],
    },
    'text-rm-green', 
    'bg-rm-green',
    'bg-rm-pale-grey',
    'bg-black',
    'bg-white',
    'bg-white-black',
    'md:pt-36',
    'pt-24',
    '-mb-12',
    'md:-mb-32',
    'overflow-hidden',
    '-lg:after:transition-all', 
    '-lg:after:ease-out',
    '-lg:after:inline-block',
    '-lg:after:bg-contain',
    '-lg:after:bg-center',
    '-lg:after:bg-no-repeat',
    '-lg:after:w-[20px]',
    '-lg:after:h-[20px]', 
    '-lg:after:ml-2', 
    '-lg:hover:after:translate-x-2',
    '-lg:before:hidden', 
    '-lg:after:bg-[url("../static/arrow-right-black.svg")]',
    'pb-40',
    'xl:ml-24',
    'pb-16',
    'pt-16',
    'bg-rm-pale-teal',
    'pt-6',
    'pt-7',
    'pt-8',
    'pt-12',
    'pt-44',
    'xl:pt-40',
    'xl:pt-44',
    'pt-5',
    'md:pt-0',
    'lg:pt-0',
    'xl:pt-0',
    'md:pt-20',
    'lg:pt-20',
    'xl:pt-20',
    'pt-[56.25%',
    'pt-[100%]',
    'xl:p-24'
  ],
  theme: {
    screens:{
      'sm'                 : '640px',
      'md'                 : '768px',
      'lg'                 : '1024px',
      'xl'                 : '1280px',
      'xlz'                : '1366px',
      '2xl'                : '1920px',
    },
    container: {
      center: true,
      screens: {
        'sm'                 : '640px',
        'md'                 : '700px',
        'lg'                 : '930px',
        'xl'                 : '1280px',
        'xlz'                : '1280px',
        '2xl'                : '1280px',      
      },
      padding: {
        DEFAULT: '1.5rem',
        md: '0',
        lg: '0',
        xl: '3rem',
        'xlz': '0',
        '2xl': '0',
      },
    },
    extend: {
      screens:{
        '-lg' : { max: '1023px'},
        '-xl' : { max: '1279px'}
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
        'rm-blog-blue'       : '#1f9da5'
      },
      fontSize: {
          '18px'             : '1.125rem',
          '21px'             : '1.3125rem',
          '26px'             : '1.625rem',
          '30px'             : '1.875rem',
          '40px'             : '2.5rem',//2.5rem
          '45px'             : '2.8125rem',
          '50px'             : '2.9rem',//3.125rem
          '55px'             : '3.4375rem', 
          '60px'             : '3.75rem',
          '80px'             : '4.25rem',//5rem
          '100px'            : '5.2rem',//6.25rem
          '120px'            : '7.5rem',
          '160px'            : '10rem',
      },
      lineHeight: {
          '26px'            : '1.625rem',
          '28px'            : '2rem', //1.75rem
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
          'H1'              : '4.75rem',//5.25rem
          //Stats M
          '120px'           : '7.5rem',
          //Stats D
          '160px'           : '10rem',
      },
      boxShadow: {
        'block': '0px 0px 20px rgba(0, 0, 0, 0.2)',
        'lightbox': '0 4px 4px rgba(0, 0, 0, 0.8)',
        'brandcard': '0 4px 4px rgba(0, 0, 0, 0.25)'
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
        },
        cycleOut: {
          '0%': {
            opacity: '1',
            transform: 'translateY(0px)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(-100%)',
            display: 'none'
          }
        },
        cycleIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(100%)',
            display: 'block'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        quote: 'quoteSlide .75s ease-out forwards',
        textFadeIn: 'cycleIn 1s ease-out forwards',
        textFadeOut: 'cycleOut 1s ease-out forwards'
      },
      backgroundImage: {
        'white-black': 'linear-gradient( to bottom, #ffffff 0%, #ffffff 60%, #000000 60%, #000000 100%)'
      }
    }
  }
} 