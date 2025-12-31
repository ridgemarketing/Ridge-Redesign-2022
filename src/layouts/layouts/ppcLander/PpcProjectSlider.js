import React,  { useEffect, useRef, useState } from "react"
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide"
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll"
import { GatsbyImage } from "gatsby-plugin-image"
import Buttons from "../../../components/global/Buttons"

const PPCProjectSlider = ({data}) => {

    const container                     = useRef(null)
    const [moving, setMoving]           = useState(false)
    const [prevIndex, setPrevIndex]     = useState(0)
    const [newIndex, setNewIndex]       = useState(1)

    const handleMove = (newIndex, prevIndex) => {
        console.log('moving...', newIndex, prevIndex)
        setNewIndex(newIndex)
        setPrevIndex(prevIndex)
        setMoving(true)
        console.log()
    }
    const handlePostMove = (newIndex, prevIndex) => {
        console.log('done moved', newIndex, prevIndex)
        setMoving(false)
    }

    useEffect( () => {
        console.log('state has updated')
    }, [moving])

    return(<>
        {moving && (newIndex > prevIndex) && <>
            <style>{`
                .ppcProjectSlider .is-active [data-gatsby-image-wrapper] { transform : scale(0.9) }
                .ppcProjectSlider .is-next [data-gatsby-image-wrapper] { transform : scale(1) }
            `}</style>
        </>}
        {moving && (newIndex < prevIndex) && <>
            <style>{`
                .ppcProjectSlider .is-active [data-gatsby-image-wrapper] { transform : scale(0.9) }
                .ppcProjectSlider .is-prev [data-gatsby-image-wrapper] { transform : scale(1) }
            `}</style>
        </>}
        {!moving && <>
            <style>{`
                .ppcProjectSlider .is-active [data-gatsby-image-wrapper] { transform : scale(1) }
            `}</style>
        </>}
        <div ref={container} className="overflow-hidden">
            {data.images &&
                <Splide
                    className       = {` w-[175%] -ml-[35%] xl:w-[120%] xl:-ml-[10%] ppcProjectSlider`}
                    hasTrack        = { false }
                    // extensions      = { { AutoScroll } }
                    onMove          = { ( splide, newIndex, prevIndex, destIndex ) => { handleMove(newIndex, prevIndex) } }
                    onMoved         = { ( splide, newIndex, prevIndex, destIndex ) => { handlePostMove(newIndex, prevIndex) } }
                    // onVisible       = { ( splide, Slide ) => { console.log( 'visible', splide, Slide ) } }
                    options         = { {
                        type        : `loop`,
                        focus       : `center`,
                        perPage     : 5,
                        perMove     : 1,
                        padding     : `12px`,
                        drag        : true,
                        rewindByDrag: false,
                        pagination  : false,
                        lazyLoad    : false,
                        arrows      : true,
                        autoplay    : true,
                        // interval    : 3500, 
                        interval    : 30500, 
                        speed       : 1200,
                        rewindSpeed : 1200,
                        breakpoints : {
                            768: {
                                perPage: 3,
                            },
                            500: {
                                perPage: 3,
                            }
                        },
                        // autoScroll  : {
                        //     pauseOnHover    : false,
                        //     pauseOnFocus    : false,
                        //     rewind          : true,
                        //     speed           : 0.2,
                        // },
                }}>
                    <SplideTrack>
                        {data.images.map((circle, key) => {
                            return (
                                <SplideSlide key={key}>
                                    <GatsbyImage 
                                        image       = {circle.image.localFile.childImageSharp.gatsbyImageData} 
                                        alt         = {circle.image.altText} 
                                        className   = {`flex self-start rounded-3xl`} 
                                        objectFit   = {'contain'}/>
                                </SplideSlide>
                            )
                        })}
                    </SplideTrack>
                    <div className="splide__arrows flex justify-center mt-10 gap-14">
                        <svg aria-label="button" className="cursor-pointer rotate-180 !h-[35px] splide__arrow--prev" width="19" height="35" viewBox="0 0 19 35" fill="none">
                            <path d="M0.839844 34.5898C1.23047 34.9805 1.77734 34.9805 2.16797 34.5898L18.6523 18.1055C19.043 17.7148 19.043 17.168 18.6523 16.7773L2.16797 0.292969C1.77734 -0.0976562 1.23047 -0.0976562 0.839844 0.292969L0.292969 0.839844C-0.0976562 1.23047 -0.0976562 1.77734 0.292969 2.16797L15.5273 17.4023L0.292969 32.7148C-0.0976562 33.1055 -0.0976562 33.6523 0.292969 34.043L0.839844 34.5898Z" fill="#474848"/>
                        </svg>
                        <svg aria-label="button"  className="cursor-pointer !h-[35px] splide__arrow--next" width="19" height="35" viewBox="0 0 19 35" fill="none">
                            <path d="M0.839844 34.5898C1.23047 34.9805 1.77734 34.9805 2.16797 34.5898L18.6523 18.1055C19.043 17.7148 19.043 17.168 18.6523 16.7773L2.16797 0.292969C1.77734 -0.0976562 1.23047 -0.0976562 0.839844 0.292969L0.292969 0.839844C-0.0976562 1.23047 -0.0976562 1.77734 0.292969 2.16797L15.5273 17.4023L0.292969 32.7148C-0.0976562 33.1055 -0.0976562 33.6523 0.292969 34.043L0.839844 34.5898Z" fill="#474848"/>
                        </svg>
                    </div>
                </Splide>
            }
            {data.componentButtonGroup && <>
                <div className="w-max mt-10  mx-auto flex gap-4 text-white">
                    {data.componentButtonGroup.map((button, key) => {
                        if (button?.componentButton?.link?.url) {
                            return <Buttons key={key} content={button.componentButton} sectionBackground={'white'} />
                        }
                    })}
                </div>
            </>}
        </div>
    </>)
}
export default PPCProjectSlider