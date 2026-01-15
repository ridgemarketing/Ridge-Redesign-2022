import React, { useState, useRef, useEffect } from "react" 
import { theme } from "../../../static/theme"
import Parser from "../../../components/global/Parser"
import { Container } from "../../../components/global/Wrappers"
import { ArrowTallLeftBlack } from "../../../static/arrow-tall-left-black"
import { ArrowTallRightBlack } from "../../../static/arrow-tall-right-black"

const PPCQuotes = ({data}) => { 

    // COPYPASTA from LAYOUTS->Quotes.js 

    const slides                                = data.quotes ? data.quotes : []
    const [slide, setSlide]                     = useState(0)
    const [slidedata, setslidedata]             = useState({})
    const [slideInteraction, setInteraction]    = useState(false)
    const parallaxContainer                     = useRef(null)
    const quoteLeft                             = useRef(null)
    const quoteRight                            = useRef(null)
    const slidedataFetchedRef                   = useRef(false)
    let arrows                                  = false

    useEffect(() => {
        setslidedata(slides[0])
    }, [data])

    const nextSlide = () => {
        let i = (slide === slides.length - 1) ? 0 : slide + 1
        setSlide(i)
        setslidedata(slides[i])
    }

    const prevSlide = () => {
        let i = (slide - 1 + slides.length) % slides.length
        setslidedata(slides[i])
        setSlide(i)
    }

    const handleClick = (next) => {
        setInteraction(true)
        next ? nextSlide() : prevSlide()
        return
    }

    function useIsVisible(ref) {
        const [isIntersecting, setIntersecting] = useState(false)
    
        useEffect(() => {
        const observer = new IntersectionObserver(([entry]) =>
            setIntersecting(entry.isIntersecting)
        )
    
        observer.observe(ref.current)
            return () => {
                observer.disconnect()
            }
        }, [ref])
    
        return isIntersecting
    }

    const sliderRef = useRef()
    const isVisible = useIsVisible(sliderRef)

    useEffect(() => {
        const interval = setInterval(() => {
            if (isVisible && !slideInteraction) {
                nextSlide()
            }
        }, 6000)
    
        return () => clearInterval(interval)
    }, [])

    const quoteFunc = () => {
        if (slides.length > 0) {

            let topLeft              = 25
            let topRight             = 75
            let topCounter           = 0.15
            let prevDirection        = `0`

            if (window.innerWidth < 768) {
                // topCounter  = 0.35
                topLeft     = 15
                topRight    = 50
            }

            function inView(){
                if (quoteLeft.current !== null && quoteRight.current !== null) {
                    if (window.pageYOffset > prevDirection) {
                        topLeft                         = topLeft - topCounter
                        topRight                        = topRight + topCounter
                        quoteLeft.current.style.top     = topLeft + '%'
                        quoteRight.current.style.top    = topRight + '%'
                    }
                    if (window.pageYOffset < prevDirection) {
                        topLeft                         = topLeft + topCounter
                        topRight                        = topRight - topCounter
                        quoteLeft.current.style.top     = topLeft + '%'
                        quoteRight.current.style.top    = topRight + '%'
                    }
                }
                prevDirection = window.pageYOffset
            }

            function reset() {
                if (quoteLeft.current !== null && quoteRight.current !== null) {
                    if (window.innerWidth < 768) {
                        topLeft                       = 15
                        topRight                      = 50
                        quoteLeft.current.style.top   = `${topLeft}%`
                        quoteRight.current.style.top  = `${topRight}%`
                    } else {
                        topLeft                       = 25
                        topRight                      = 74
                        quoteLeft.current.style.top   = `${topLeft}%`
                        quoteRight.current.style.top  = `${topRight}%`
                    }
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
            observer.observe(parallaxContainer.current)
        }
    }

    useEffect(() => {
        if (slidedataFetchedRef.current) {
            return
        }
        slidedataFetchedRef.current = true
        quoteFunc()
    }, [])

    if (slides.length > 1) {
        arrows = true
    }

    return(<>
        <div ref={parallaxContainer} className={`block my-20 relative max-w-[1600px] mx-auto`}>
            <section classes="overflow-hidden bg-transparent">
                <Container classes={`bg-transparent`}>
                    <div ref={sliderRef} className={`mt-12 flex w-full flex-wrap justify-between relative`}>
                        <div className={`p-8 lg:p-14 w-full`}>
                            <div key={Math.random()}  className={`animate-quote text-center`}>
                                <div dangerouslySetInnerHTML={{__html: Parser(slidedata.content)}} className={ theme.text['Q'] + slide.class + ' block transition-all ease-in-out font-semibold text-black' }></div>
                                <p className={ theme.text.P_BLD +  `pt-8 pb-2` }>
                                    { slidedata.title }
                                </p>
                                <small className={ theme.text.FOOTER  }>
                                    { slidedata?.reviewsFields?.titleCompany }
                                </small>
                            </div>
                        </div>
                        {arrows &&
                            <div className={`flex justify-center items-center bg-rm-pale-grey mx-auto`}>
                                <button className={`flex-1 px-5 py-3 text-40px`} onClick={() => handleClick(false)}>
                                    <ArrowTallLeftBlack/>
                                </button>
                                <span className={ theme.text.FOOTER + 'flex items-center font-basic-sans'}> {slide + 1} / {slides.length}</span>
                                <button className={`flex-1 px-5 py-3 text-40px`} onClick={() => handleClick(true)}>
                                    <ArrowTallRightBlack/>
                                </button>
                            </div>
                        }
                    </div> 
                    <span ref={quoteLeft}  aria-hidden="true" className={`font-stratos text-3xl uppercase font-bold transition-all ease-out duration-1000 text-rm-green opacity-20 absolute scale-[7] lg:scale-[10] top-[15%] left-[40px] sm:left-[88px] md:left-16 lg:left-18 xl:left-28 md:top-1/4 -z-10`}> “</span>
                    <span ref={quoteRight} aria-hidden="true" className={`hidden md:block font-stratos text-3xl uppercase font-bold transition-all ease-out duration-1000 text-rm-green opacity-20 absolute scale-[7] lg:scale-[10] top-3/4 right-[40px] sm:right-[88px] md:right-16 lg:right-18 xl:right-28 md:top-3/4  -z-10`}>” </span>
                </Container>
                
            </section>
      </div>
    </>)
}

export default PPCQuotes