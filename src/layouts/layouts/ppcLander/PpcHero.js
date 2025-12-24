import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide"
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll"
import { Container } from "../../../components/global/Wrappers"
import Parser from "../../../components/global/Parser"
import { DarkBlueCloud_Large, LightBlueCloud_Large } from "../../../static/clouds"
import Buttons from "../../../components/global/Buttons"

const PPCHero = ({data}) => {

    const heading               = data.heading ?? false
    const subHeading            = data.subHeading ?? false
    const circleImagesDown      = data.circleImagesDown ?? false 
    const circleImagesUp        = data.circleImagesUp ?? false 
    const componentButton       = data.componentButton ?? false 
    const popupCircles          = useRef([])
    const coverUp               = useRef(null)
    const mainSection           = useRef(null)
    const innerSection          = useRef(null)
    const backgroundCloud       = useRef(null)
    const splideRight           = useRef(null)
    const splideLeft            = useRef(null)
    const [height, setHeight]   = useState(0)
    const [wait, setWait]       = useState(0)

    useEffect(() => {
        const adjustHeight = () => {
            if (innerSection.current) {
                let ratio = 1.65
                if (window.innerWidth >= 1920) { // 2xl
                    ratio = 1.65
                } else if (window.innerWidth >= 1280) { // xl
                    ratio = 1.65 * (110 / 130)
                } else if (window.innerWidth >= 1024) { // lg
                    ratio = 1.65 * (110 / 160)
                }
                setHeight((window.innerWidth / ratio))
            }
        }
        adjustHeight()

        window.addEventListener('resize', adjustHeight)
        return () => window.removeEventListener('resize', adjustHeight)
    }, [])

    useEffect(() => {
        if (innerSection.current && splideLeft.current && splideRight.current && backgroundCloud.current) {
            innerSection.current.style.height                   = `${height}px`
            splideLeft.current.splideRef.current.style.height   = `${height}px`
            splideRight.current.splideRef.current.style.height  = `${height}px`
            backgroundCloud.current.style.height                = `${(height + 50)}px`
            setWait(1)
        }
    }, [height])

    useEffect(() => {
        if (wait === 1) {
            if (coverUp.current) {
                coverUp.current.style.opacity = `${0}`
            }
            setWait(2)
        }
        if (wait === 2) {
            if (coverUp.current) {
                coverUp.current.style.zIndex = `-100`
            }
        }
    }, [wait])

    useEffect(() => {

        const observer = new IntersectionObserver(([entry]) => {
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
    }, [])


    useEffect(() => {
        const slideAround = () => {
            if (backgroundCloud.current) {

                let topCounter          = 0.85
                let prevDirection       = 0
                let top                 = window.innerWidth >= 1366 ? -75 : 0 
   
                function inView() {
                    if (backgroundCloud.current) {
                        top = window.pageYOffset > prevDirection ? top - topCounter : top + topCounter
                        backgroundCloud.current.style.top = `${top}px`
                    }
                    prevDirection = window.pageYOffset
                }

                function reset() {
                    if (backgroundCloud.current) {
                        backgroundCloud.current.style.top = window.innerWidth >= 1366 ? `${-75}px` : `${0}px`
                    }
                }

                let observer = new IntersectionObserver( (entries) => {
                    entries.forEach ( entry => {
                        if( entry.isIntersecting ){
                            window.addEventListener('scroll',  inView, {passive: true})
                        } else {
                            reset()
                            window.removeEventListener('scroll',  inView, {passive: true})
                        }
                    })
                })
                observer.observe(backgroundCloud.current)
            }
        }

        slideAround()

    }, [])

    return(<>
        <div ref={coverUp} className="fixed top-0 left-0 h-full w-full z-30 bg-[#00abb6] transition-all duration-700 opacity-100 ease-out"></div>
        <div ref={mainSection} className="hidden xl:block overflow-hidden relative mx-auto">
            <section ref={innerSection} className="mx-auto w-full relative overflow-hidden bg-[#00abb6] overflow-x-hidden [mask-image:url(/cloudMask.svg)] [mask-repeat:no-repeat] [-webkit-mask-image:url(/cloudMask.svg)] [-webkit-mask-repeat:no-repeat] [mask-position:top_center] [-webkit-mask-position:top_center] xlz:[mask-position:0_-75px] xlz:[-webkit-mask-position:0_-75px] lg:[mask-size:160%_auto] lg:[-webkit-mask-size:160%_auto] xl:[mask-size:130%_auto] xl:[-webkit-mask-size:130%_auto] 2xl:[mask-size:110%_auto] 2xl:-webkit-mask-size:110%_auto]">
                <Container>
                    <div className="pt-40 2xl:pt-56 flex flex-col gap-9 relative z-10">
                        {heading &&
                            <h1 dangerouslySetInnerHTML={{__html: Parser(heading)}} className={`text-left text-[4.5rem] leading-[4.4775rem] font-stratos font-bold text-white uppercase max-w-[700px]`}></h1>
                        }
                        {subHeading &&
                            <p dangerouslySetInnerHTML={{__html: Parser(subHeading)}} className={`text-left font-stratos text-black text-[2.5rem] leading-[2.7rem] `}></p>
                        }
                        {componentButton && componentButton.link &&
                            <div className="w-max mt-3">
                                <Buttons content={componentButton} />
                            </div>
                        }
                    </div>
                    {circleImagesDown &&
                        <CustomSplide splideRef={splideRight} images={circleImagesDown} direction={'down'} position={'right'}/>
                    }
                    {circleImagesUp &&
                        <CustomSplide splideRef={splideLeft} images={circleImagesUp} direction={'up'} position={'left'}/>
                    }
                </Container>
                <div aria-hidden={true} className="absolute bottom-0 right-0 w-full h-[350px] bg-gradient-to-t from-[#00ABB6] via-[#00ABB6] via-20% to-transparent"></div>
            </section>
            <svg ref={(el) => { if (el) popupCircles.current[0] = el }} className="-mt-[calc(350px/2)] xlz:-mt-[calc(400px/2)]" viewBox="0 0 1920 307.6">
                <ellipse className="scale-0 transition-all ease-in-out duration-300 delay-[600ms]" transform="matrix(0.7693 -0.6389 0.6389 0.7693 -32.3279 439.3668)" fill="#00ABB6" cx="592.2" cy="264.4" style={{transformOrigin: '596.9px 264.4px'}} rx="26.2" ry="26.2"/>
                <path style={{transformOrigin: '554.7px 264.4px'}} className="scale-0 transition-all ease-in-out duration-150 delay-300" fill="#00ABB6" d="M522.7,175.5c-0.9,9.2,1.9,18.2,7.8,25.3c12.2,14.7,34,16.7,48.7,4.5c14.7-12.2,16.7-34,4.5-48.7
                    c-6.8-8.2-16.7-12.5-26.6-12.5c-7.8,0-15.6,2.6-22.1,8C527.9,158,523.5,166.3,522.7,175.5z"/>
                <circle className="scale-0 transition-all ease-in-out duration-300" fill="#00ABB6" cx="596.9" cy="78.6" r="47.1" style={{transformOrigin: '596.9px 78.6px'}}/>
            </svg>

            <LightBlueCloud_Large theRef={backgroundCloud} className={`w-[160%] xl:w-[130%] 2xl:w-[110%] absolute top-0 xlz:-top-[75px] left-0 -z-[3] transition-[top] ease-out duration-1000`} />
        </div>
    </>)

}
export default PPCHero


const CustomSplide = ({images, direction, position, splideRef}) => {
    return (
        <Splide
            ref             = {splideRef}
            className       = {`!absolute !visible top-0 ${position === 'right' ? '-right-[125px]' :'right-[235px]'}`}
            aria-label      = {`images ${direction} carousel`}
            hasTrack        = { false }
            extensions      = { { AutoScroll } }
            // onMoved         = { ( splide, newIndex, prevIndex, destIndex ) => { console.log( splide, newIndex, prevIndex, destIndex  ) } }
            // onVisible       = { ( splide, Slide ) => { console.log( splide, Slide ) } }
            options         = { {
                type        : `loop`,
                direction   : `ttb`,
                height      : `100%`,
                focus       : 'center',
                perPage     : 4,
                // perMove     : 1,
                gap         : `30px`,
                drag        : false,
                rewindByDrag: false,
                pagination  : false,
                lazyLoad    : false,
                arrows      : false,
                breakpoints: {
                    1650: {
                        perPage : 3,
                        gap     : `27px`,
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
                                    className   = {`flex self-start w-[300px] h-[300px] drop-shadow-md`} 
                                    objectFit   = {'contain'}/>
                            </SplideSlide>
                        )
                    })}
            </SplideTrack>
        </Splide>
    )
}