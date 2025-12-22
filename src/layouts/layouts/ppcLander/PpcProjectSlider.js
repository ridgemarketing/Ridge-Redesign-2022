import React from "react"
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide"
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll"
import { GatsbyImage } from "gatsby-plugin-image"
import Buttons from "../../../components/global/Buttons"

const PPCProjectSlider = ({data}) => {

    return(<>
        <div className="overflow-hidden">
            {data.images &&
                <Splide
                    className       = {`w-[120%] -ml-[10%] ppcProjectSlider`}
                    hasTrack        = { false }
                    // extensions      = { { AutoScroll } }
                    onMove          = { ( splide, newIndex, prevIndex, destIndex ) => { console.log( 'move', newIndex, prevIndex, destIndex  ) } }
                    // onMoved         = { ( splide, newIndex, prevIndex, destIndex ) => { console.log( 'moved', splide, newIndex, prevIndex, destIndex  ) } }
                    // onVisible       = { ( splide, Slide ) => { console.log( 'visible', splide, Slide ) } }
                    options         = { {
                        type        : `loop`,
                        focus       : 'center',
                        perPage     : 5,
                        perMove     : 1,
                        padding     : `12px`,
                        drag        : true,
                        rewindByDrag: false,
                        pagination  : false,
                        lazyLoad    : false,
                        arrows      : true,
                        autoplay    : true,
                        interval    : 3500, 
                        speed       : 1200,
                        rewindSpeed : 1200,
                        breakpoints : {
                            500: {
                                perPage: 1,
                            },
                            768: {
                                perPage: 3,
                            },
                            // 1000: {
                            //     perPage: 5,
                            // }
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
                                <SplideSlide className="" key={key}>
                                    <GatsbyImage 
                                        image       = {circle.image.localFile.childImageSharp.gatsbyImageData} 
                                        alt         = {circle.image.altText} 
                                        className   = {`flex self-start w-[542] rounded-3xl`} 
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
                            return <Buttons key={key} content={button.componentButton} />
                        }
                    })}
                </div>
            </>}
        </div>
    </>)
}
export default PPCProjectSlider