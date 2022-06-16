import React, { useRef, useEffect, useState } from "react"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { theme } from "../static/theme"

const IconTextBoxFlex = (props) => {
    let wrapperClasses  = `flex w-full md:w-[48%] mb-12 md:mb-16 lg:mb-32 items-start`;
    let imageClasses    = ``;
    let marginClasses   = `ml-6 `;

    const iconElement = useRef();
    const headingElement = useRef();

    useEffect(() => {
        const alignIconCards = () => {
            const heading = headingElement.current;
            const icon = iconElement.current;
    
            const headingHeight = heading.scrollHeight;
            const iconHeight = icon.clientHeight;
    
            let difference = iconHeight - headingHeight;
    
            if (difference > 0) {
                var mt = difference / 2;
                heading.style.marginTop = mt + 'px';
            }
            heading.style.marginBottom = (mt + 6) + 'px';
        }

        window.addEventListener('resize', alignIconCards);

        return () => window.removeEventListener('resize', alignIconCards);
    }, [])
  
    if (props.threeCol){
        wrapperClasses += ` lg:w-[31%]`;
    }

    return(
        <>
           <div className={wrapperClasses}>
                <div className={'w-[55px]'}  ref={iconElement}>
                        <GatsbyImage 
                                image={ props.content.image } 
                                alt={ props.content.image.alt } 
                                className={ `flex self-start w-[54px] h-[55px]` } 
                                objectFit={'contain'}
                        /> 
                </div>
                <div className="flex flex-col">
                    <div className={ marginClasses + `flex items-center ml-6`}>
                        <div>
                        <p  ref={headingElement}
                            className={ theme.text['H4'] + 'icon-block-title flex items-center' }>
                            { props.content.heading }
                        </p>
                        </div>
                    </div>
                    <div className={ marginClasses + `mt-4`}>
                        <p 
                            className={ theme.text['FOOTER'] }>
                            { props.content.text }
                        </p>
                    </div>
                </div>  
            </div>
        </>
    )
}

export default IconTextBoxFlex;