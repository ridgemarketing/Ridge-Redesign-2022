import React, { useRef, useState, useEffect } from "react"
import { GatsbyImage } from 'gatsby-plugin-image'
import { theme } from "../static/theme"

const IconTextBoxFlex = (props) => {
    let wrapperClasses  = `flex w-full md:w-[48%] mb-12 md:mb-16 lg:mb-32 items-start`;
    // let imageClasses    = ``;
    let marginClasses   = `ml-6 `;

    const [height, setHeight] = useState(0);
    const [iconHeight, setIconHeight] = useState(0);
    const [customTop, setCustomTop] = useState('0px');
    const [customBottom, setCustomBottom] = useState('0px');
    const [windowWidth, setWindowWidth] = useState(0);

    const iconElement = useRef();
    const ref = useRef();

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        setTimeout(function() {
            setHeight(ref.current.clientHeight);
            setIconHeight(iconElement.current.clientHeight);
        }, 0)

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    })

    useEffect(() => {
            let difference = iconHeight - height;
            setCustomTop((difference > 0) ? (difference / 2) + 'px' : '0px');
            setCustomBottom((difference > 0) ? (difference / 2 + 6) + 'px' : '0px');
    }, [height, iconHeight, windowWidth])


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
                            style={{marginTop: customTop, marginBottom: customBottom, marginLeft: '24px'}}
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