import React from "react"
import { GatsbyImage } from 'gatsby-plugin-image'
import { theme } from "../static/theme"
import Parser from "./global/Parser"

const IconTextBoxStack = (props) => {
    const content = props.content;
    const iconType = props.iconType;
    
    let component =  <span className={'block w-[138px] ml-auto mr-auto md:ml-0 md:mr-0 border-t-2 border-t-rm-green mb-7'}></span>;

    const body = content.body && Parser(content.body);
    const heading = content.heading && Parser(content.heading);

    if (iconType === 'icon') {
            var image = (content.image.localFile.ext === ".svg") 
            ? <img className={`h-full w-auto`} src={content.image.sourceUrl} alt={content.image.altText} />
            : <GatsbyImage objectFit={`contain`} className={`h-full w-auto`} image={content.image.localFile.childImageSharp.gatsbyImageData} alt={content.image.altText} /> ;
    }
                                                                         
    if (iconType === 'icon') {
        component = 
        <div className={"mb-8 text-center md:text-left lg:mx-0 h-[105px]"}>
            {image}
        </div> 
    } 
    if (iconType === 'number') {
        component = 
        <div className={"mb-5 text-center md:text-left lg:mx-0"}>
            <span className={`${theme.text.CIRCLE_NUM}  w-[65px] h-[65px] text-rm-green border-rm-green`}>{props.idx}</span>
        </div> 
    }
    
    if (props.iconType === `icon-number`) {
        component = 
        <div className={`flex items-start`}>
            <div className={`w-[75px]`}>
                {image}
            </div>
            <div className={"text-center md:text-left ml-6"}>
                <span className={`${theme.text.CIRCLE_NUM} h-[55px] w-[55px] ${props.textColor === `text-white` ? `text-white border-white` : `text-black border-black`}`}>{props.idx}</span>
            </div> 
        </div>
    }
            return (
            <div className={'py-4'} key={`iconTextBoxFlex-item${Math.random()}`}>
                {component}
                <h5 dangerouslySetInnerHTML={{__html: heading}} className={theme.text.H5 + ` text-center md:text-left ${props.color}`}></h5>        
                <p dangerouslySetInnerHTML={{__html: body}} className={ theme.text.P_STD + `mt-4 text-left ${props.color}`}></p>
            </div>
            )
}

export default IconTextBoxStack;