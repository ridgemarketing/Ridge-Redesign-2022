import React from "react"
import { GatsbyImage } from "gatsby-plugin-image";
import { theme } from '../../static/theme'

export const Section = (props) => {

    const defaults = {
        padding:  `py-12 px-0`,
        bgColor:  `bg-white`,
        position: `relative`,
        id: ``,
        classes: ``,
        role: ``,
    }

    if (props.settings && props.settings.padding) {
        var pt = theme.paddingTop[`${props.settings.padding.top}`];
        var pb = theme.paddingBottom[`${props.settings.padding.bottom}`];
    }

    let bg              =  props.settings && props.settings.backgroundColor ? props.settings.backgroundColor : defaults.bgColor;
    let position        =  props.settings && props.settings.position ? props.settings.position : defaults.position;
    let id              =  props.settings && props.settings.id ? props.settings.id : defaults.id;
    let anchorId        =  props.settings && props.settings.anchorId ? props.settings.anchorId : defaults.id;
    let classes         =  props.settings && props.settings.classes ? props.settings.classes : defaults.classes;
    let classes_temp    =  props.classes ? props.classes : ''; //used for testing until we pull class data from props
    let role            =  props.role ? props.role : defaults.role;

    if(props.transparent){
        bg ='transparent';
    }

    return (
        <>
            {anchorId !== `` &&
                <div id={anchorId} className={`relative -top-[100px]`}></div>
            }
            <section 
                id={id} 
                className={`-mt-px ${pt} ${pb} bg-${theme.backgroundColor[bg]} ${position} ${classes} ${classes_temp}`}
                role={role}> 
                    {props.children}
            </section>
        </>

    )
}

export const Container = (props) => {
    let size = {
        default: 'container',
        slim: 'container xl:max-w-[1224px]',
        mini: 'container lg:max-w-[750px] xl:max-w-[930px]',
        none: ''
    }
    let container = (props.container) ? size[props.container] : size['slim'];
    return (
        <div className={`${container} relative ${props.classes || ''}`}>
            {props.children}
        </div>
    )
}

export const BackgroundImage = (props) => {

    const defaults = {
        position: `absolute`,
        bgSize: `bg-cover`,
        top: `top-0`,
        left: `left-0`,
        width: `w-full`,
        height: `h-full`,
        bgRepeat: `bg-no-repeat`,
        id: ``
    }
    
    let position  =  props.position ? props.position : defaults.position;
    let bgSize    =  props.bgSize ? props.bgSize : defaults.bgSize;
    let top       =  props.top ? props.top : defaults.top;
    let left      =  props.left ? props.left : defaults.left;
    let width     =  props.width ? props.width : defaults.width;
    let height    =  props.height ? props.height : defaults.height;
    let bgRepeat  =  props.bgRepeat ? props.bgRepeat : defaults.bgRepeat;
    let id        =  props.id ? props.id : defaults.id;

    return (
        <div 
        id={id}
        className={`${position} ${bgSize} ${top} ${left} ${width} ${height} ${bgRepeat} ${props.classes}`}>
            { props.image && <GatsbyImage objectFit={'cover'} className={'z-[-10] hidden xl:block'} image={props.image} alt={``}/> }
            { props.mobile && <GatsbyImage objectFit={'cover'} className={'z-[-10] md:hidden block'} image={props.mobile} alt={``} /> }
            { props.tablet && <GatsbyImage objectFit={'cover'} className={'z-[-10] hidden md:block xl:hidden'} image={props.tablet} alt={``} /> }
        </div>
    )
}


