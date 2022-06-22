import React, { useRef, useState, useEffect } from "react"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { theme } from "../static/theme"

const IconTextBoxFlex = (props) => {
    let wrapperClasses  = `flex w-full md:w-[48%] mb-12 md:mb-16 lg:mb-32 items-start`;
    let imageClasses    = ``;
    let marginClasses   = `ml-6 `;

    const [height, setHeight] = useState(0);
    const [iconHeight, setIconHeight] = useState(0);
    const [customTop, setcustomTop] = useState('0px');

    const iconElement = useRef();
    const ref = useRef();

    useEffect(() => {
        setTimeout(function() {
            setHeight(ref.current.clientHeight);
            setIconHeight(iconElement.current.clientHeight);
        }, 0)
    })

    useEffect(() => {
            let difference = iconHeight - height;
            setcustomTop((difference > 0) ? (difference / 2) + 'px' : '0px');
    }, [height, iconHeight])


    if (props.threeCol){
        wrapperClasses += ` lg:w-[31%]`;
    }

    return(
            <div className={wrapperClasses}>
                <div className={'w-[55px]'} ref={iconElement}>
                        <GatsbyImage 
                                image={ props.content.image } 
                                alt={ props.content.image.alt } 
                                className={ `flex self-start w-[54px] h-[55px]` } 
                                objectFit={'contain'}
                        /> 
                </div>
                <div className={'flex-col flex'}>
                    <div>
                        <p ref={ref}
                            style={{marginTop: customTop, marginLeft: '24px'}}
                            className={ theme.text['H4'] + 'block items-center' }>
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
    )
}

export default IconTextBoxFlex;