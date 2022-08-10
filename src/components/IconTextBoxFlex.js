import React, { useRef, useState, useEffect } from "react"
import { GatsbyImage } from 'gatsby-plugin-image'
import { theme } from "../static/theme"
import Link from '../components/global/FlexibleLink'
import Parser from "./global/Parser"

const IconTextBoxFlex = (props) => {
    const content = props.content;

    const [height, setHeight] = useState(0);
    const [iconHeight, setIconHeight] = useState(0);
    const [customTop, setCustomTop] = useState('0px');
    const [customBottom, setCustomBottom] = useState('0px');
    const [windowWidth, setWindowWidth] = useState(0);

    const iconElement = useRef();
    const ref = useRef();

    let component = ''

    let wrapperClasses  = `flex w-full md:w-[48%] mb-16 items-start`;

    let marginClasses   = `ml-6 `;

    if (props.iconType === `icon` || props.iconType === `icon-number`) {
        var image = (content.image.localFile.ext === `.svg`) 
        ? <img className={''} src={content.image.sourceUrl} alt={content.image.altText} />
        : <GatsbyImage 
            image={content.image.localFile.childImageSharp.gatsbyImageData} 
            alt={content.image.altText} 
            className={ `flex self-start w-auto h-[55px]` } 
            objectFit={'contain'}/> ;
    }

    if (props.iconType === `icon`) {
        component = 
        <div className={`w-[55px]`} ref={iconElement}>
            {image}
        </div>
    }
    if (props.iconType === `number`) {
        component = 
        <div className={`text-center md:text-left ml-6`}>
            <span className={`${theme.text.CIRCLE_NUM}  w-[65px] h-[65px] ${props.textColor === `text-white` ? `text-white border-white` : `text-black border-black`}`}>{props.idx}</span>
        </div> 
    }

    if (props.iconType === `icon-number`) {
        component = 
        <div className={`flex items-start`}>
            <div className={`w-[75px]`} ref={iconElement}>
                {image}
            </div>
            <div className={"text-center md:text-left ml-6"}>
                <span className={`${theme.text.CIRCLE_NUM} h-[55px] w-[55px] ${props.textColor === `text-white` ? `text-white border-white` : `text-black border-black`}`}>{props.idx}</span>
            </div> 
        </div>
    }

    if (props.columns === 3){
        wrapperClasses += ` xl:w-[31%]`;
    }


    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        setTimeout(function() {

            setHeight(ref.current ? ref.current.clientHeight : 0 );
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

    return(
            <div className={wrapperClasses} key={`iconTextBoxFlex-item${Math.random()}`}>
                <div ref={iconElement}>
                    {component}
                </div>
                <div className={'flex-col flex flex-1'}>
                    {content.heading && 
                        <div className={`mb-4`}>
                            <p ref={ref}
                                style={{marginTop: customTop, marginBottom: customBottom, marginLeft: '24px'}}
                                className={ `${theme.text['H4']} block items-center ${props.color}` }>
                                { content.heading }
                            </p>
                        </div>
                    }
                    <div className={ `${marginClasses}`}>
                        <p dangerouslySetInnerHTML={{__html: Parser(content.body)}} className={ `${theme.text['FOOTER']}  ${props.color}` }></p>
                    </div>
                    <div className={ marginClasses + `mt-4`}>
                        <Link link={content.link} classes={`${theme.text_links.BASE_STYLING} ${theme.text_links.STD} ${theme.text_links['FWD_BASE']} ${theme.text_links['ARW_FWD_GREEN']} text-[#A9CF38]`} />
                    </div>
                </div>
            </div>
    )
}

export default IconTextBoxFlex;