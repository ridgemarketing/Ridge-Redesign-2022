import React from "react"
import { GatsbyImage } from 'gatsby-plugin-image'
import { theme } from "../static/theme"

const IconTextBoxStack = (props) => {
    const content = props.content;
    const iconType = props.iconType;

    let component =  <span className={'block w-[138px] border-t-2 border-t-rm-green mb-7'}></span>;

    const image = (content.image.localFile.ext === ".svg") 
    ? <img className={'h-full w-auto'} src={content.image.sourceUrl} />
    : <GatsbyImage objectFit={'contain'} className={'h-full w-auto'} image={content.image.localFile.childImageSharp.gatsbyImageData} /> ;
                                       
    if (iconType === 'icon') {
        component = 
        <div className={"mb-8 text-center md:text-left lg:mx-0 h-[105px]"}>
            {image}
        </div> 
    } 
    if (iconType === 'number') {
        component = 
        <div className={"mb-5 text-center md:text-left lg:mx-0"}>
            <span className={`${theme.text.CIRCLE_NUM} text-rm-green border-rm-green`}>{props.idx}</span>
        </div> 
    }                   
            return (
            <div className={'py-4'}>
                {component}
                <h5 className={theme.text.H5 + ` text-center md:text-left ${props.color}`}>{content.heading}</h5>        
                <p className={`mt-4 text-center md:text-left ${props.color}`}>{content.body}</p>
            </div>
            )
}

export default IconTextBoxStack;