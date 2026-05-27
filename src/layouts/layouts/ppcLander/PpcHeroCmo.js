import React, { useRef, useEffect, useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Container } from "../../../components/global/Wrappers"
import Parser from "../../../components/global/Parser"
import Buttons from "../../../components/global/Buttons"
import { theme } from "../../../static/theme"
import { Link } from "gatsby"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'

const PPCHeroCMO = ({data, setPersistantEmail}) => {

    const heading           = data.heading ?? false
    const subHeading        = data.subHeading ?? false
    const image             = data.image ?? false
    const mediaType         = data.mediaType ?? 'image'
    const video             = data.video ?? false
    const videoFallback     = data.videoFallback ?? false
    const buttonData        = data.componentButton ?? false
    const callout           = data.callout ?? false
    const list              = data.list ?? false

    const backgroundImageDesktop = data.backgroundImageDesktop ?? false
    const carousel               = data.carousel ?? false

    const handleBlur = (e) => {
        setPersistantEmail(e.target.value)
    }

    return(<>
        <section className="relative bg-[#f3f1ee] overflow-hidden mb-20">
            <div className="bg-[linear-gradient(170deg,#F3F1EE_25.61%,#E1DED9_88.95%)] absolute inset-0 pointer-events-none" />
            <div className="bg-[linear-gradient(125deg,rgba(0,171,182,0.00)_54.21%,rgba(0,171,182,0.60)_112.49%)] absolute inset-0 pointer-events-none" />
            {backgroundImageDesktop &&
                <GatsbyImage 
                    className={`w-full absolute top-0 left-0`} 
                    objectFit="contain" 
                    image={backgroundImageDesktop.localFile.childImageSharp.gatsbyImageData} 
                    alt={backgroundImageDesktop.altText} />
            }

            <div className="flex flex-col gap-6 text-center py-20 z-10 mx-auto max-w-[700px] lg:min-w-[700px] relative">
                {heading &&
                    <h1
                        dangerouslySetInnerHTML={{__html: Parser(heading)}}
                        className="font-stratos uppercase xl:text-[3.75rem] leading-[3.10938rem] text-black text-center"
                    />
                }
                {subHeading &&
                    <p
                        dangerouslySetInnerHTML={{__html: Parser(subHeading)}}
                        className={`text-[1.5rem] leading-[2rem] font-basic-sans font-light text-[#1F1F1F]`}
                    />
                }
                

            </div>

            {carousel && carousel.length > 0 &&
                <div className="relative pb-20">
                    <Splide
                        extensions={ { AutoScroll } }
                        options={ {
                            type: 'loop',
                            perPage: 4,
                            gap: '4rem',
                            drag: 'free',
                            focus: 'center',
                            arrows: false,
                            perMove: 1,
                            pagination: false,
                            breakpoints: {
                                1024: { perPage: 5 },
                                768:  { perPage: 2 },
                                480:  { perPage: 1 },
                            },
                            autoScroll: {
                                pauseOnHover: false,
                                pauseOnFocus: false,
                                rewind: true,
                                speed: 0.6,
                            }
                        } }
                    >
                        {carousel.map((slide, index) => {
                            if (!slide.image) return null
                            const img = (slide.image.localFile?.ext === ".svg")
                                ? <img key={slide.image.sourceUrl} className="w-full object-contain h-auto" src={slide.image.sourceUrl} alt={slide.image.altText}/>
                                : <GatsbyImage key={slide.image.sourceUrl} className="w-full" objectFit="contain" image={slide.image.localFile.childImageSharp.gatsbyImageData} alt={slide.image.altText} />
                            return(
                                <SplideSlide key={`PpcHeroCmoCarousel__${index}`}>
                                    <div className="h-[110px] flex flex-col items-center justify-center">
                                        {img}
                                    </div>
                                </SplideSlide>
                            )
                        })}
                    </Splide>
                </div>
            }

            <div className="relative rounded-[21px] overflow-hidden py-16 px-8 md:px-20 mb-20 max-w-[700px] mx-auto">
                <div className="bg-[#107d84] mix-blend-soft-light w-full h-full absolute top-0 left-0"></div>
                <div className="bg-[#107d84] opacity-10 mix-blend-multiply w-full h-full absolute top-0 left-0"></div>
                
                <div className="z-10 text-center text-black flex flex-col items-center gap-6 relative">
                    {callout.heading &&
                        <h2 className={`${theme.text.H4}`}>
                            Let's Talk
                        </h2>
                    }
                    <input 
                        onBlur={(e) => handleBlur(e)}
                        placeholder="Your Name"
                        type={`email`} 
                        className={` ${theme.text.P_STD} placeholder:text-black w-full font-basic-sans text-center text-black rounded-xl border-solid border-2 border-[#A7A7A7] max-w-[715px] min-h-[60px] mx-auto`}/>
                    <input 
                        onBlur={(e) => handleBlur(e)}
                        placeholder="Your Business Email"
                        type={`email`} 
                        className={` ${theme.text.P_STD} placeholder:text-black w-full font-basic-sans text-center text-black rounded-xl border-solid border-2 border-[#A7A7A7] max-w-[715px] min-h-[60px] mx-auto`}/>
                    {buttonData?.link?.url &&
                        <Link
                            className={`border-white border border-solid ${theme.button['BASE_STYLING']} ${theme.button[`SOLID_GREEN_HOVER_DARK`]} ${theme.text_links.FWD_BASE} ${theme.text_links.ARW_FWD_BLACK} ${theme.text_links.HOVER_ARW_FWD_WHITE} !inline-flex items-center cursor-pointer min-w-[210px]`}
                            to={buttonData.link.url}
                        >
                            {buttonData.link.title}
                        </Link>
                    }
                </div>
            </div>
        
        </section>

    </>)
}

export default PPCHeroCMO
