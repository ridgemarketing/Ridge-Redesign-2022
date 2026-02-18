import React, { useRef, useEffect, useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Container } from "../../../components/global/Wrappers"
import Parser from "../../../components/global/Parser"
import Buttons from "../../../components/global/Buttons"
import { theme } from "../../../static/theme"
import { Link } from "gatsby"

const PPCHeroCMO = ({data, setPersistantEmail}) => {

    const heading           = data.heading ?? false
    const subHeading        = data.subHeading ?? false
    const image             = data.image ?? false
    const buttonData        = data.componentButton ?? false
    const callout           = data.callout ?? false
    const list              = data.list ?? false

    const calloutRef                    = useRef(null)
    const [calloutHeight, setCalloutHeight] = useState(0)

    useEffect(() => {
        if (!calloutRef.current) return
        const update = () => setCalloutHeight(calloutRef.current.offsetHeight)
        update()
        window.addEventListener('resize', update)
        return () => window.removeEventListener('resize', update)
    }, [])

    const handleBlur = (e) => {
        setPersistantEmail(e.target.value)
    }

    return(<>
        <section className="relative bg-[#f3f1ee] overflow-hidden">
            {/* Teal gradient overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(147deg,rgba(0,171,182,0)_54%,rgba(0,171,182,0.6)_167%)]" />

            <Container container="default" classes="relative z-10 pb-[300px]">
                <div className="flex flex-col xl:flex-row items-center gap-12 xl:gap-0 pt-12 md:py-20 min-h-[500px] xl:min-h-[642px]">

                    {/* Left Column - Text Content */}
                    <div className="flex flex-col gap-6 xl:gap-8 xl:w-[55%] text-center xl:text-left pt-8 xl:pt-12">
                        {heading &&
                            <h1
                                dangerouslySetInnerHTML={{__html: Parser(heading)}}
                                className="font-stratos uppercase font-semibold text-[40px] md:text-[52px] xl:text-[64px] leading-[1] text-black"
                            />
                        }
                        {subHeading &&
                            <p
                                dangerouslySetInnerHTML={{__html: Parser(subHeading)}}
                                className={`${theme.text.H4_LTE} text-black`}
                            />
                        }
                        {list && list.length > 0 &&
                            <ul className="flex flex-col gap-1 xl:items-start items-center">
                                {list.map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 font-basic-sans text-[26px] leading-[1.7]">
                                        <svg className="w-[20px] shrink-0" viewBox="0 0 26 20" fill="none">
                                            <path d="M8.81055 19.0176L0.380859 10.5879C-0.126953 10.0801 -0.126953 9.2168 0.380859 8.70898L2.20898 6.88086C2.7168 6.37305 3.5293 6.37305 4.03711 6.88086L9.77539 12.5684L21.9629 0.380859C22.4707 -0.126953 23.2832 -0.126953 23.791 0.380859L25.6191 2.20898C26.127 2.7168 26.127 3.58008 25.6191 4.08789L10.6895 19.0176C10.1816 19.5254 9.31836 19.5254 8.81055 19.0176Z" fill="#A9CF38"/>
                                        </svg>
                                        <span className="text-black">{item.item}</span>
                                    </li>
                                ))}
                            </ul>
                        }
                    </div>

                    {/* Right Column - Image */}
                    <div className="relative xl:w-[45%] xl:min-w-[800px] xlz:-mr-[110px] flex items-center justify-center ">
                        {image && image.localFile?.childImageSharp?.gatsbyImageData &&
                            <GatsbyImage
                                image={image.localFile.childImageSharp.gatsbyImageData}
                                alt={image.altText || ''}
                                className="w-full"
                                objectFit="contain"
                            />
                        }
                        {image && !image.localFile?.childImageSharp?.gatsbyImageData && image.sourceUrl &&
                            <img src={image.sourceUrl} alt={image.altText || ''} className="w-full object-contain" />
                        }
                    </div>
                </div>
            </Container>
        </section>

        {/* Description and Quote Callout */}
        {callout && <>
            <section
                ref={calloutRef}
                className="relative z-10 -translate-y-1/2"
                style={{ marginBottom: calloutHeight ? `-${calloutHeight / 2}px` : undefined }}
            >
                <Container container="default">
                    <div className="bg-[#107d84] rounded-[21px] py-16 px-8 md:px-20 text-center text-white flex flex-col items-center gap-6">
                        {callout.heading &&
                            <h2 className={`${theme.text.H5} text-white`}>
                                {callout.heading}
                            </h2>
                        }
                        {callout.body &&
                            <p
                                dangerouslySetInnerHTML={{__html: Parser(callout.body)}}
                                className={`${theme.text.H4_LTE} text-white max-w-[1100px]`}
                            />
                        }
                        <input 
                            onBlur={(e) => handleBlur(e)}
                            placeholder="Your Business Email"
                            type={`email`} 
                            className={` ${theme.text.P_STD} w-full font-basic-sans text-center text-black rounded-xl border-solid border-4 border-[#D9D9D9] max-w-[715px] min-h-[60px] mx-auto`}/>
                        {buttonData?.link?.url &&
                            <Link
                                className={`${theme.button['BASE_STYLING']} ${theme.button[`SOLID_GREEN_HOVER_DARK`]} ${theme.text_links.FWD_BASE} ${theme.text_links.ARW_FWD_BLACK} ${theme.text_links.HOVER_ARW_FWD_WHITE} !inline-flex items-center cursor-pointer min-w-[210px]`}
                                to={buttonData.link.url}
                            >
                                {buttonData.link.title}
                            </Link>
                        }
                    </div>
                </Container>
            </section>
            <div className="mb-20 xl:mb-40 w-full"></div>
        </>}
    </>)
}

export default PPCHeroCMO
