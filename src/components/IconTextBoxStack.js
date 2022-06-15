import React from "react"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from "gatsby"
import { theme } from "../static/theme"

const IconTextBoxStack = (props) => {
    const content = props.content;

    const iconType = content.iconType;
    let component =     
            <span className={'block w-[138px] border-t-2 border-t-rm-green mb-7'}>
            </span>;
                                       
    if (iconType == 'icon' && content.image) {
        component = 
        <div className={"mb-8 text-center md:text-left lg:mx-0 min-h-[108px]"}>
            <GatsbyImage image={content.image} />
        </div> 
    } 
    if (iconType == 'numbers') {
        component = 
        <div className={"mb-5 text-center md:text-left lg:mx-0 min-h-[54px]"}>
            <GatsbyImage image={content.image} />
        </div> 
    }                   
            return (
            <div className={'py-4'}>
                {component}
                <h5 className={theme.text.H5}>{content.heading}</h5>        
                <p className={`mt-4 text-center md:text-left`}>{content.text}</p>
            </div>
            )
}

export default IconTextBoxStack;