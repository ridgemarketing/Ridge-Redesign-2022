import React from "react"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { theme } from "../static/theme"

const IconTextBoxFlex = (props) => {
    let wrapperClasses  = `flex w-full md:w-[48%] lg:w-[31%] mb-12 md:mb-16 lg:mb-32`;
    let imageClasses    = ``;
    let marginClasses   = `ml-6 `;
    
    if (props.twoCol){
        wrapperClasses = `flex w-full md:w-[48%] mb-12 md:mb-16 lg:mb-32`;
    }

    return(
        <>
           {/* loop items */}
           <div className={wrapperClasses}>
                    <GatsbyImage 
                            image={ props.content.image } 
                            alt={ props.content.image.alt } 
                            className={ `flex self-start object-contain w-[54px] h-[55px]` } 
                    /> 
                    <div className="flex flex-col">
                        <div className={ marginClasses + `flex items-center ml-6`}>
                            <p 
                                className={ theme.text['H4'] + 'icon-block-title flex items-center' }>
                                { props.content.heading }
                            </p>
                        </div>
                        <div className={ marginClasses + `mt-4`}>
                            <p 
                                className={ theme.text['FOOTER'] }>
                                { props.content.text }
                            </p>
                        </div>
                    </div>  
                </div>
            {/* end loop */}
        </>
    )
}

export default IconTextBoxFlex;