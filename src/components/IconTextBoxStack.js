import React from "react"
import { GatsbyImage } from 'gatsby-plugin-image'
import { theme } from "../static/theme"
import Parser from "./global/Parser"
import Link from '../components/global/FlexibleLink'
//import { motion } from "framer-motion"

const IconTextBoxStack = (props) => {
    const content   = props.content;
    const iconType  = props.iconType;
    
    let component   =  <span className={'block w-[138px] ml-auto mr-auto md:ml-0 md:mr-0 border-t-2 border-t-rm-green mb-7'}></span>;

    const body      = content.body && Parser(content.body);
    const heading   = content.heading && Parser(content.heading);

    if (iconType === 'icon' && content.image) {
            var image = (content.image.localFile.ext === ".svg") 
            ? <img className={`h-full w-auto mx-auto md:ml-0`} src={content.image.sourceUrl} alt={content.image.altText} />
            : <GatsbyImage objectFit={`contain`} className={`h-full w-auto mx-auto md:ml-0`} image={content.image.localFile.childImageSharp.gatsbyImageData} alt={content.image.altText} /> ;
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
            <span className={`${theme.text.CIRCLE_NUM}  w-[65px] h-[65px] text-rm-green border-rm-green mx-auto sm:mr-auto sm:ml-0`}>{props.idx}</span>
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
                <p dangerouslySetInnerHTML={{__html: body}} className={ theme.text.P_STD + `text-center md:text-left mt-4 ${props.color}`}></p>
                {content.link && 
                    <div className={`mt-4`}>
                        <Link link={content.link} classes={`${theme.text_links.BASE_STYLING} ${theme.text_links.STD} ${theme.text_links['FWD_BASE']} ${theme.text_links['ARW_FWD_GREEN']} ${theme.text_links.HOVER_ARW_FWD_WHITE} ${theme.text_links.HOVER_WHITE} text-[#A9CF38]`} />
                    </div>
                }
            </div>
            )
}

export default IconTextBoxStack;