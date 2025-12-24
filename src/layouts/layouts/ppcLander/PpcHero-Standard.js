import React, { useEffect, useRef } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide"
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll"
import { Container } from "../../../components/global/Wrappers"
import Parser from "../../../components/global/Parser"
import { DarkBlueCloud_Piece_Large, LightBlueCloud_Piece_Large, DarkBlueCloud_Piece_Medium, LightBlueCloud_Piece_Medium, DarkBlueCloud_Piece_Small, LightBlueCloud_Piece_Small } from "../../../static/clouds"
import Buttons from "../../../components/global/Buttons"
import { theme } from "../../../static/theme"

const PPCHeroStandard = ({data}) => {

    const heading               = data.heading ?? false
    const subHeading            = data.subHeading ?? false
    const circleImagesDown      = data.circleImagesDown ?? false 
    const circleImagesUp        = data.circleImagesUp ?? false 
    const componentButton       = data.componentButton ?? false 
    const popupCircles          = useRef([])

    useEffect(() => {

        const observer = new IntersectionObserver(([entry]) => {
            console.log(entry)
            if (entry.isIntersecting) {
                const shapes = [...entry?.target?.children] ?? false
                if (shapes) {
                    shapes.forEach(shape => {
                        if(shape.classList.contains('scale-0')){
                            shape.classList.remove('scale-0')
                            shape.classList.add('scale-100')
                        }
                    })
                }
            }
          },
          {
            root        : null,
            rootMargin  : '0px',
            // rootMargin  : '-50px',
            threshold   : 0.5,
          }
        )
    
        if (popupCircles.current) {
            popupCircles.current.forEach( item => {
                observer.observe(item)
            })
        }
    
        return () => {
            if (popupCircles.current) {
                popupCircles.current.forEach(item => {
                    observer.unobserve(item)
                })
            }
            observer.disconnect()
        }
    }, [popupCircles])

    return(<>
            <section className="relative xl:hidden">
                <div className="mx-auto w-full relative bg-[#00abb6] overflow-hidden">
                    <Container>
                        <div className="pt-40 pb-20 flex flex-col gap-9 relative z-10">
                            {heading &&
                                <h1 dangerouslySetInnerHTML={{__html: Parser(heading)}} className={` ${theme.text.H2} text-center md:text-[4.5rem] md:leading-[4.4775rem] font-stratos font-bold text-white uppercase`}></h1>
                            }
                            {subHeading &&
                                <p dangerouslySetInnerHTML={{__html: Parser(subHeading)}} className={`text-center font-stratos text-black text-[2.5rem] leading-[2.7rem] `}></p>
                            }
                            {componentButton && componentButton.link &&
                                <div className="w-max mx-auto mt-3">
                                    <Buttons content={componentButton} />
                                </div>
                            }
                        </div>
                    </Container>
                    {circleImagesDown && 
                        <CustomSplide images={circleImagesDown} direction={'down'} position={'right'}/>
                    }
                    {circleImagesUp && 
                        <CustomSplide images={circleImagesUp} direction={'up'} position={'left'}/>
                    }
                    <div aria-hidden={true} className="absolute bottom-0 right-0 w-full h-[150px] bg-gradient-to-t from-[#00ABB6] via-[#00ABB6] via-20% to-transparent"></div>
                </div>
                <div className="relative">
                    {/* <LightBlueCloud_Piece_Large className={`w-full absolute top-0 left-0 -z-10 hidden xl:block`} /> 
                    <DarkBlueCloud_Piece_Large className={`w-full relative z-10 hidden xl:block`} />  */}

                    <LightBlueCloud_Piece_Small className={`w-full absolute top-0 left-0 -z-10 hidden md:block lg:hidden`} /> 
                    <DarkBlueCloud_Piece_Small className={`w-full relative z-10 hidden md:block lg:hidden`} /> 

                    <LightBlueCloud_Piece_Medium className={`w-full absolute top-0 left-0 -z-10 block md:hidden lg:block`} /> 
                    <DarkBlueCloud_Piece_Medium className={`w-full relative z-10 block md:hidden lg:block`} /> 
                </div>
            </section>

            <div className="bubbles relative w-full xl:hidden">
                <svg ref={(el) => { if (el) popupCircles.current[0] = el }} className="bubbles max-w-[125px] sm:max-w-[280px] -mt-[50px] xs:-mt-[75px] md:-mt-[175px] md:mb-[50px] lg:mb-0" viewBox="0 0 280 302" fill="none">
                    <circle className="scale-0 transition-all ease-in-out duration-300 delay-[600ms]" cx="133.169" cy="259.875" r="26.2331" transform="rotate(-39.7117 133.169 259.875)" fill="#00ABB6" style={{transformOrigin: '133.169px 259.875px'}}/>
                    <circle className="scale-0 transition-all ease-in-out duration-300 delay-300" cx="98.0808" cy="174.153" r="36.0611" transform="rotate(-39.7117 98.0808 174.153)" fill="#00ABB6" style={{transformOrigin: '98.0808px 174.153px'}}/>
                    <circle className="scale-0 transition-all ease-in-out duration-300 " cx="137.916" cy="74.0084" r="47.0585" transform="rotate(-39.7117 137.916 74.0084)" fill="#00ABB6" style={{transformOrigin: '137.916px 74.0084px'}}/>
                </svg>
                {/* <svg ref={(el) => { if (el) popupCircles.current[0] = el }} className="bubbles -mt-[calc(350px/2)] xlz:-mt-[calc(400px/2)] mb-[100px] w-full" viewBox="0 0 1920 307.6">
                    <ellipse className="scale-0 transition-all ease-in-out duration-300 delay-[600ms]" transform="matrix(0.7693 -0.6389 0.6389 0.7693 -32.3279 439.3668)" fill="#00ABB6" cx="592.2" cy="264.4" style={{transformOrigin: '596.9px 264.4px'}} rx="26.2" ry="26.2"/>
                    <path style={{transformOrigin: '554.7px 264.4px'}} className="scale-0 transition-all ease-in-out duration-150 delay-300" fill="#00ABB6" d="M522.7,175.5c-0.9,9.2,1.9,18.2,7.8,25.3c12.2,14.7,34,16.7,48.7,4.5c14.7-12.2,16.7-34,4.5-48.7
                        c-6.8-8.2-16.7-12.5-26.6-12.5c-7.8,0-15.6,2.6-22.1,8C527.9,158,523.5,166.3,522.7,175.5z"/>
                    <circle className="scale-0 transition-all ease-in-out duration-300" fill="#00ABB6" cx="596.9" cy="78.6" r="47.1" style={{transformOrigin: '596.9px 78.6px'}}/>
                </svg> */}
            </div>
    </>)

}
export default PPCHeroStandard


const CustomSplide = ({images, direction, position}) => {
    return (
        <Splide
            className       = {`!visible ${direction == 'up' ? 'mt-4' : ''}`}
            aria-label      = {`images ${direction} carousel`}
            hasTrack        = { false }
            extensions      = { { AutoScroll } }
            onMoved         = { ( splide, newIndex, prevIndex, destIndex ) => { console.log( splide, newIndex, prevIndex, destIndex  ) } }
            onVisible       = { ( splide, Slide ) => { console.log( splide, Slide ) } }
            options         = { {
                type        : `loop`,
                // direction   : `ttb`,
                // height      : `850px`,
                focus       : 'center',
                perPage     : 3,
                // perMove     : 1,
                gap         : `27px`,
                drag        : false,
                rewindByDrag: false,
                pagination  : false,
                lazyLoad    : false,
                arrows      : false,
                breakpoints: {
                    640: {
                        perPage: 1,
                    },
                    700: {
                        perPage: 3,
                    },
                    1000: {
                        perPage: 2,
                    }
                },
                autoScroll  : {
                    pauseOnHover    : false,
                    pauseOnFocus    : false,
                    rewind          : true,
                    speed           : direction === 'down' ? -0.2 : 0.2,
                },
        }}>
            <SplideTrack>
                    {images.map((circle, key) => {
                        return (
                            <SplideSlide className="" key={key}>
                                <GatsbyImage 
                                    image       = {circle.image.localFile.childImageSharp.gatsbyImageData} 
                                    alt         = {circle.image.altText} 
                                    className   = {`flex self-start w-[335px] h-[335px]`} 
                                    objectFit   = {'contain'}/>
                            </SplideSlide>
                        )
                    })}
            </SplideTrack>
        </Splide>
    )
}