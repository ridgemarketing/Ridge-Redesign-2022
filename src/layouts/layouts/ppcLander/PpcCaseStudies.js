import React, { useState, useRef, useEffect } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Container } from "../../../components/global/Wrappers"
import Parser from "../../../components/global/Parser"
import { theme } from "../../../static/theme"

const PpcCaseStudies = ({ data }) => {
    const heading = data.heading ?? false
    const body    = data.body    ?? false
    const items   = data.items   ?? []

    const [slide, setSlide]               = useState(0)
    const [slideInteraction, setInteraction] = useState(false)
    const [isVisible, setIsVisible]       = useState(false)
    const carouselRef                     = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting)
        )
        if (carouselRef.current) observer.observe(carouselRef.current)
        return () => observer.disconnect()
    }, [])

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

    if (!items.length) return null

    const current = items[slide]

    const renderImage = current.image
        ? current.image.localFile?.childImageSharp?.gatsbyImageData
            ? <GatsbyImage
                image={current.image.localFile.childImageSharp.gatsbyImageData}
                alt={current.image.altText || ''}
                className="w-full h-full"
                objectFit="cover"
              />
            : current.image.sourceUrl
                ? <img src={current.image.sourceUrl} alt={current.image.altText || ''} className="w-full h-full object-cover" />
                : null
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

            <div ref={carouselRef} className="flex flex-col xl:flex-row xl:mr-[calc((100%-1224px)/2)]">

                {/* Left: Image */}
                <div className="w-full xl:w-[55%] h-[360px] md:h-[500px] lg:h-[600px] xl:h-[720px] xlz:min-w-[945px] overflow-hidden bg-rm-pale-grey shrink-0">
                    {renderImage}
                </div>

                {/* Right: Text + Nav */}
                <div className="w-full xl:w-[45%] flex flex-col justify-center gap-10 px-8 md:px-14 xl:pl-20 xl:pr-0 py-12 xl:py-0">

                    <div className="flex flex-col gap-6">
                        {current.heading &&
                            <h3 className="font-stratos font-normal text-[40px] md:text-[50px] leading-[1.3] text-black">
                                {current.heading}
                            </h3>
                        }
                        {current.body &&
                            <div
                                dangerouslySetInnerHTML={{ __html: Parser(current.body) }}
                                className={`${theme.text.H4_LTE} text-black`}
                            />
                        }
                        {(current.industry || current.tactic) &&
                            <p className={`${theme.text.FOOTER} text-black`}>
                                {current.industry && <><strong>Industry:</strong> {current.industry}</>}
                                {current.industry && current.tactic && <span className="text-[#cdcdcd] mx-3">|</span>}
                                {current.tactic && <><strong>Tactic:</strong> {current.tactic}</>}
                            </p>
                        }
                    </div>

                    {/* Nav counter */}
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
