import React, { useState, useRef, useEffect } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Container } from "../../../components/global/Wrappers"
import Parser from "../../../components/global/Parser"
import { theme } from "../../../static/theme"

const PpcCaseStudies = ({ data }) => {
    const heading   = data.heading ?? false
    const body      = data.body    ?? false
    const items     = data.items   ?? []


    const [slide, setSlide]                     = useState(0)
    const [slideInteraction, setInteraction]    = useState(false)
    const [isVisible, setIsVisible]             = useState(false)
    const carouselRef                           = useRef(null)
    const activeVideo                           = useRef(null)

    const textEl                                = useRef(null)
    const [breakEl, setBreakEL]                 = useState('')

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting)
        )
        if (carouselRef.current) observer.observe(carouselRef.current)
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (activeVideo.current) {
            activeVideo.current.play().catch(() => {})
        }
    }, [slide])

    useEffect(() => {
        const interval = setInterval(() => {
            if (isVisible && !slideInteraction) {
                setSlide(i => (i === items.length - 1) ? 0 : i + 1)
            }
        }, 6000)
        return () => clearInterval(interval)
    })

    const nextSlide = () => {
        setInteraction(true)
        setSlide(i => (i === items.length - 1) ? 0 : i + 1)
    }

    const prevSlide = () => {
        setInteraction(true)
        setSlide(i => (i === 0) ? items.length - 1 : i - 1)
    }

    useEffect( () => {
        if (!textEl.current) {
            return
        }

        let total = 0
        textEl.current.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
                const range = document.createRange()
                range.selectNode(node)
                total += range.getBoundingClientRect().width
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                const style = getComputedStyle(node)
                total += node.offsetWidth + parseFloat(style.marginLeft) + parseFloat(style.marginRight)
            }
        })

        setBreakEL(total > textEl.current.offsetWidth ? 'block' : '')

    }, [slide])

    if (!items.length) {
        return null
    }

    const current       = items[slide]
    const renderImage   = current.image
        ? current?.image?.localFile?.childImageSharp?.gatsbyImageData
            ?  <>
                {current?.mobileImage && 
                    <GatsbyImage
                        image={current.mobileImage.localFile.childImageSharp.gatsbyImageData}
                        alt={current.mobileImage.altText || ''}
                        className="w-full h-full aspect-video xl:!hidden"
                        objectFit="contain"
                    />
                }
                <GatsbyImage
                    image={current.image.localFile.childImageSharp.gatsbyImageData}
                    alt={current.image.altText || ''}
                    className={`w-full h-full aspect-video ${current?.mobileImage ?? 'hidden xl:!block'}`}
                    objectFit="contain"
                />
              </>
            : current.image.sourceUrl
                ? <img src={current.image.sourceUrl} alt={current.image.altText || ''} className="w-full h-full object-cover" />
                : null
        : null
    // const renderImage = current.image.sourceUrl
    //             ? <img src={current.image.sourceUrl} alt={current.image.altText || ''} className="w-full h-full object-contain" />
    //             : null

    const renderVideo = current.video?.mediaItemUrl
        ? <video key={current.video.mediaItemUrl} ref={activeVideo} autoPlay muted playsInline loop className="w-full h-full aspect-video">
               <source src={current.video.mediaItemUrl} type={current.video.mimeType} />
          </video>
        : null

    return (
        <section className="py-20 xl:pt-0 xl:pb-40">

            {(heading || body) && (
                <Container container="default" classes="mb-12 lg:mb-20 text-center">
                    {heading &&
                        <h2 className={`${theme.text.H5} text-black`}>{heading}</h2>
                    }
                    {body &&
                        <div
                            dangerouslySetInnerHTML={{ __html: Parser(body) }}
                            className={`${theme.text.H4_LTE} text-black mt-4 max-w-[800px] mx-auto`}
                        />
                    }
                </Container>
            )}

            <div ref={carouselRef} className="flex flex-col xl:flex-row xl:mr-[calc((100%-1224px)/2)] max-w-[2000px] 3xl:mx-auto items-center justify-start">

                <div className="w-full xl:w-[55%] xlz:w-[65%] xlz:max-w-[945px] aspect-video overflow-hidden shrink-0">
                    {current.mediaType === 'image' ? (renderImage) : (renderVideo)}
                </div>

                <div className="w-full xl:w-[45%] xlz:w-[35%] flex flex-col justify-center gap-10 px-8 md:px-14 xl:pl-20 xl:pr-0 py-12 xl:py-0">

                    <div className="flex flex-col gap-6">
                        {current.heading &&
                            <h3 className="font-stratos font-normal text-[2.5rem] md:text-[2.875rem] leading-[1.2] text-black">
                                {current.heading}
                            </h3>
                        }
                        {current.body &&
                            <div
                                dangerouslySetInnerHTML={{ __html: Parser(current.body) }}
                                className={`${theme.text.P_STD} !leading-[2rem] text-black`}
                            />
                        }
                        {(current.industry || current.tactic) &&
                            <p ref={textEl} className={`${theme.text.FOOTER} text-black`}>
                                {current.industry && <><strong>Industry:</strong> <span>{current.industry}</span></>}
                                {current.industry && current.tactic && <span className="text-[#cdcdcd] mx-3">|</span>}
                                <span className={`${breakEl} w-0`}></span>
                                {current.tactic && <><strong>Tactic:</strong> <span>{current.tactic}</span></>}
                            </p>
                        }
                    </div>

                    {items.length > 1 &&
                        <div className="flex items-center bg-rm-pale-grey w-[138px] h-[68px]">
                            <button
                                onClick={prevSlide}
                                aria-label="Previous case study"
                                className="flex items-center justify-center w-[46px] h-full shrink-0 transition-opacity hover:opacity-60"
                            >
                                <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
                                    <path d="M9 1L1 9L9 17" stroke="#474848" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                            <span className={`${theme.text.FOOTER} text-black text-center flex-1`}>
                                {slide + 1} / {items.length}
                            </span>
                            <button
                                onClick={nextSlide}
                                aria-label="Next case study"
                                className="flex items-center justify-center w-[46px] h-full shrink-0 transition-opacity hover:opacity-60"
                            >
                                <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
                                    <path d="M1 1L9 9L1 17" stroke="#474848" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    }

                </div>
            </div>

        </section>
    )
}

export default PpcCaseStudies
