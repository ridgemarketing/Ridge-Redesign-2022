import React, { useRef, useState, useEffect } from "react"
import { GatsbyImage } from 'gatsby-plugin-image'
import { theme } from "../static/theme"
import Link from '../components/global/FlexibleLink'

const IconTextBoxFlex = (props) => {
    const content = props.content;

    console.log(content);

    let wrapperClasses  = `flex w-full md:w-[48%] mb-16 items-start`;
    let marginClasses   = `ml-6 `;

    if (props.iconType == 'icon') {
        var image = (content.image.localFile.ext === ".svg") 
        ? <img className={''} src={content.image.sourceUrl} />
        : <GatsbyImage 
            image={content.image.localFile.childImageSharp.gatsbyImageData} 
            alt={ ' ' } 
            className={ `flex self-start w-auto h-[55px]` } 
            objectFit={'contain'}/> ;
    }

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


    if (props.columns === 3){
        wrapperClasses += ` xl:w-[31%]`;
    }

    return(
            <div className={wrapperClasses}>
                <div className={'h-[54px]'} ref={iconElement}>
                        {image}
                </div>
                <div className={'flex-col flex flex-1'}>
                    <div>
                        <p ref={ref}
                            style={{marginTop: customTop, marginBottom: customBottom, marginLeft: '24px'}}
                            className={ `${theme.text['H4']} block items-center ${props.color}` }>
                            { content.heading }
                        </p>
                    </div>
                    <div className={ `${marginClasses} mt-4`}>
                        <p 
                            className={ `${theme.text['FOOTER']}  ${props.color}` }>
                            { content.body }
                        </p>
                    </div>
                    <div className={ marginClasses + `mt-4`}>
                    <Link link={content.link} classes={`${theme.text_links.BASE_STYLING} ${theme.text_links.STD} ${theme.text_links['FWD_BASE']} ${theme.text_links['ARW_FWD_GREEN']} text-[#A9CF38]`} />
                    </div>
                </div>
            </div>
    )
}

export default IconTextBoxFlex;