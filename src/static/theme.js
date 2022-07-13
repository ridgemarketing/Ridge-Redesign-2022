export const theme = {
    
    text:{
        HERO:               'font-stratos uppercase font-bold text-60px lg:text-100px leading-H1-m lg:leading-H1 ',
        H1_STD:             'font-stratos uppercase font-bold text-60px lg:text-80px leading-H1-m lg:leading-H1 ',
        H1_LTE:             'font-stratos-lights uppercase text-60px lg:text-80px leading-H1 ',
        H2:                 'font-stratos uppercase font-bold text-50px leading-H2-H3 ',
        H3:                 'font-basic-sans font-semibold text-50px leading-H2-H3 ',
        H4:                 'font-basic-sans font-semibold text-26px leading-30px ',
        H4_LTE:             'font-basic-sans font-light text-26px leading-36px ',
        H5:                 'font-stratos uppercase font-bold text-40px leading-44px ',
        P_STD:              'font-basic-sans font-light text-21px leading-28px ',
        P_BLD:              'font-basic-sans font-bold text-21px leading-28px ',
        LINK:               'font-basic-sans font-light underline text-21px leading-28px ',
        FOOTER:             'font-basic-sans font-normal text-18px leading-26px ',
        Q:                  'font-basic-sans italic font-normal text-30px lg:text-40px leading-36px lg:leading-44px ',
        PULL_Q:             'font-basic-sans italic font-semibold text-30px lg:text-55px leading-36px lg:leading-PULL-Q ',
        STATS:              'font-stratos uppercase font-bold text-120px lg:text-160px leading-120px lg:leading-160px ',
        CIRCLE_NUM:         'font-stratos font-bold text-45px leading-26px flex items-center justify-center w-[65px] h-[65px] border-solid border-[3px] rounded-full '
    },

    button: {
        BASE_STYLING:              'inline-block text-21px font-stratos uppercase py-3 px-16 text-center font-normal border-2 border-solid transition-all ease-in-out ',
        
        GHOST_GREEN_HOVER_DARK:    'text-rm-black border-rm-green bg-transparent hover:bg-rm-green ',
        GHOST_GREEN_HOVER_LIGHT:   'text-rm-white border-rm-green bg-rm-black hover:bg-rm-green hover:text-rm-black ',
        
        SOLID_GREEN_HOVER_DARK:    'text-rm-black border-rm-green bg-rm-green hover:bg-rm-white hover:text-rm-black hover:border-rm-white ',
        SOLID_GREEN_HOVER_LIGHT:     'text-rm-black border-rm-green bg-rm-green hover:bg-rm-black hover:text-rm-white hover:border-rm-black ',
        
        SOLID_BLACK_HOVER_LIGHT:    'text-rm-white border-rm-black bg-rm-black hover:bg-rm-green hover:text-rm-black hover:border-rm-green ',
    
        GHOST_WHITE_HOVER_DARK:     'text-rm-white border-rm-green hover:bg-rm-green hover:text-rm-black ',
        GHOST_WHITE_HOVER_LIGHT:    'text-rm-white border-rm-white hover:bg-rm-green hover:text-rm-black ',
    },
    
    text_links: {
        BASE_STYLING:       'flex items-center font-stratos uppercase ',
        FWD_BASE:           'after:transition-all after:ease-out after:inline-block after:bg-contain after:bg-center after:bg-no-repeat after:w-[20px] after:h-[20px] after:ml-2 hover:after:translate-x-2 ',
        BACK_BASE:          'before:transition-all before:ease-out before:inline-block before:bg-contain before:bg-center before:bg-no-repeat before:w-[20px] before:h-[20px] before:mr-2 hover:before:-translate-x-2 ',
        
        STD:                'text-21px ',
        LARGE:              'text-40px after:w-[40px] before:w-[40px] ', 
        
        ARW_FWD_WHITE:      'before:hidden after:bg-[url("../static/arrow-right-white.svg")] ',
        ARW_FWD_BLACK:      'before:hidden after:bg-[url("../static/arrow-right-black.svg")] ',
        ARW_FWD_GREEN:      'before:hidden after:bg-[url("../static/arrow-right-green.svg")] ',
        ARW_BACK_GREEN:     'after:hidden before:bg-[url("../static/arrow-left-green.svg")] ',
    },

    forms:{
        INPUT:              'font-basic-sans border-b border-solid h-[30px] ',
        LABEL:              '-translate-y-10 transition-all ease-out ',
        CONTAINER:          'form-group font-basic-san w-full flex flex-col mb-12 ',
        
        BASE_STYLING:       'translate-form my-7 flex p-11 ',
        FULL:               'form-two-col w-full flex-row justify-around flex-wrap ',
        HALF:               'form-one-col w-1/2 flex-col ',
    },
    paddingTop:{
        standard: 'pt-20',
        none: 'pt-0'
    },
    paddingBottom:{
        standard: 'pb-20',
        none: 'pb-0',
        footer: 'pb-24'
    },
    backgroundColor: {
        black: 'black',
        white: 'white',
        paleGrey: 'rm-pale-grey',
        paleTeal: 'rm-pale-teal',
        transparent: 'transparent'
    }
}