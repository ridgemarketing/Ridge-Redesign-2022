import React from "react"
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide"
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll"
import { GatsbyImage } from "gatsby-plugin-image"

const PPCProjectSlider = ({data}) => {

    console.log('project slider', data)

    return(<>
        {data.images &&
            <Splide
                className       = {`w-full ppcProjectSlider`}
                hasTrack        = { false }
                // extensions      = { { AutoScroll } }
                onMove          = { ( splide, newIndex, prevIndex, destIndex ) => { console.log( 'move', newIndex, prevIndex, destIndex  ) } }
                // onMoved         = { ( splide, newIndex, prevIndex, destIndex ) => { console.log( 'moved', splide, newIndex, prevIndex, destIndex  ) } }
                // onVisible       = { ( splide, Slide ) => { console.log( 'visible', splide, Slide ) } }
                options         = { {
                    type        : `loop`,
                    focus       : 'center',
                    perPage     : 3,
                    perMove     : 1,
                    padding     : `12px`,
                    drag        : true,
                    rewindByDrag: false,
                    pagination  : false,
                    lazyLoad    : false,
                    arrows      : true,
                    autoplay    : true,
                    interval    : 3000, 
                    speed       : 1200,
                    rewindSpeed : 1200,
                    breakpoints: {
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
                <div className="splide__arrows" />
            </Splide>
        }
    </>)
}
export default PPCProjectSlider