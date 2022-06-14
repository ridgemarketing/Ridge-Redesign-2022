import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const IconCard = (props) => {
    let wrapperClasses  = `flex w-full md:w-[48%] lg:w-[31%] mb-12 md:mb-16 lg:mb-32`;
    let imageClasses    = ``;
    let marginClasses   = `ml-6 `;
    
    if (props.orientation == `stacked`) {
        let stacked = 'flex-col ';
        marginClasses = ` `;
    }
    if (props.twoCol){
        wrapperClasses = `flex w-full md:w-[48%] mb-12 md:mb-16 lg:mb-32`;
    }

    return(
        <>
           {/* loop items */}
           <div className={ stacked + wrapperClasses }>
                    <GatsbyImage 
                            image={ props.image } 
                            alt={ props.image.alt } 
                            className={ `flex self-start object-contain w-[55px] h-[55px]` } 
                    /> 
                    <div className="flex flex-col">
                        <div className={ marginClasses + `flex items-center ml-6`}>
                            <p 
                                className={ theme.text['H4'] + 'icon-block-title flex items-center' }>
                                { props.heading }
                            </p>
                        </div>
                        <div className={ marginClasses + `mt-4`}>
                            <p 
                                className={ theme.text['FOOTER'] }>
                                { props.bodyText }
                            </p>
                        </div>
                    </div>  
                </div>
            {/* end loop */}
        </>
    )
}

export default IconCard;