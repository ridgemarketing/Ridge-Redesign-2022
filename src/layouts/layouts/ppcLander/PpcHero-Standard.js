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
                popupCircles.current.forEach( (item, key) => {
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

            <div className="relative w-full xl:hidden">
                 <svg ref={(el) => { if (el) popupCircles.current[0] = el }} className="w-full absolute top-0 left-0  -z-10" viewBox="0 0 1920 1121">
                    <circle className="scale-0 transition-all ease-in-out duration-300 delay-300" cx="592.2" cy="1077.9" r="26.2" transform="translate(-552.1 627.1) rotate(-39.7)" fill="#00abb6" style={{transformOrigin: '592.2px 1077.9px'}}/>
                    <path className="scale-0 transition-all ease-in-out duration-300 delay-150" d="M522.7,989c-.9,9.2,1.9,18.2,7.8,25.3,12.2,14.7,34,16.7,48.7,4.5,14.7-12.2,16.7-34,4.5-48.7-6.8-8.2-16.7-12.5-26.6-12.5s-15.6,2.6-22.1,8c-7.1,5.9-11.5,14.2-12.3,23.4Z" fill="#00abb6" style={{transformOrigin: '554.7px 1001.2px'}}/>
                    <circle className="scale-0 transition-all ease-in-out duration-300" cx="596.9" cy="892" r="47.1" fill="#00abb6" style={{transformOrigin: '596.9px 892px'}}/>
                </svg>

            </div>
    </>)

}
export default PPCHeroStandard


const CustomSplide = ({images, direction, position}) => {
    return (
        <Splide
            className       = {`!visible`}
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
                    1000: {
                        perPage: 3,
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