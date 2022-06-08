import React from "react"
import { GatsbyImage } from "gatsby-plugin-image";

export const Section = (props) => {

    const defaults = {
        padding:  `py-12 px-0`,
        bgColor:  `bg-white`,
        position: `relative`,
        id: ``,
        classes: ``
    }
    
    let padding         =  props.settings.padding ? props.settings.padding : defaults.padding;
    let backgroundColor =  props.settings.bgColor ? props.settings.bgColor : defaults.bgColor;
    let position        =  props.settings.position ? props.settings.position : defaults.position;
    let id              =  props.settings.id ? props.settings.id : defaults.id;
    let classes          =  props.settings.classes ? props.settings.classes : defaults.classes;

    return (
        <section 
        id={id} 
        className={`${padding} ${backgroundColor} ${position} ${classes}`}>
            {props.children}
        </section>
    )
}

export const Container = (props) => {
    let containerClass = props.size == `slim` ? `container xl:max-w-[1120px] relative` : `container`;
    
    return (
        <div className={containerClass}>
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
    let id        =  props. id ? props.id : defaults.id;

    return (
        <div 
        id={id}
        className={`${position} ${bgSize} ${top} ${left} ${width} ${height} ${bgRepeat}`}>
            <GatsbyImage image={props.image} />
        </div>
    )
}


