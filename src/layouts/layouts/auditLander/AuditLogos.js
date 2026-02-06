import React from "react"
import { Container } from "../../../components/global/Wrappers"
import { GatsbyImage } from "gatsby-plugin-image"
import Parser from "../../../components/global/Parser"
import { theme } from "../../../static/theme"

const AuditLogos = ({data}) => {

    const heading   = data.heading ?? false
    const body      = data.body ?? false
    const logos     = data.logos ?? false

    // Duplicate logos for seamless loop
    const allLogos = logos ? [...logos, ...logos] : []

    return(<>
        {data &&
            <section className="pb-20">
                <Container container="slim">
                    {/* Section Header */}
                    <div className="flex flex-col gap-6 text-center mb-8 pt-20 border-t border-t-[#CDCDCD]">
                        {/* H5 style */}
                        {heading &&
                            <h2
                                dangerouslySetInnerHTML={{__html: Parser(heading)}}
                                className={`${theme.text.H5} text-black`}
                            />
                        }
                        {/* H4-Light style */}
                        {body &&
                            <p
                                dangerouslySetInnerHTML={{__html: Parser(body)}}
                                className={`${theme.text.H4_LTE} text-black max-w-[1100px] mx-auto`}
                            />
                        }
                    </div>
                </Container>

                {/* Logo Carousel - CSS Animation */}
                {logos && logos.length > 0 &&
                    <div className="w-full relative overflow-hidden max-w-[1450px] mx-auto">
                        <div aria-hidden="true" className="w-[200px] h-full absolute left-0 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
                        <div aria-hidden="true" className="w-[200px] h-full absolute right-0 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

                        <div
                            className="flex animate-scroll"
                            style={{
                                width: 'fit-content',
                                animation: 'scroll 30s linear infinite',
                            }}
                        >
                            {allLogos.map((logo, index) => {
                                const image = (logo.image.localFile?.ext === ".svg")
                                    ? <img className="max-w-[180px] max-h-[80px] object-contain" src={logo.image.sourceUrl} alt={logo.image.altText || ''}/>
                                    : logo.image.localFile?.childImageSharp?.gatsbyImageData
                                        ? <GatsbyImage className="max-w-[180px]" objectFit="contain" image={logo.image.localFile.childImageSharp.gatsbyImageData} alt={logo.image.altText || ''} />
                                        : null;
                                return(
                                    <div key={`AuditLogoItem__${index}`} className="h-[110px] w-[180px] flex-shrink-0 flex items-center justify-center mx-8">
                                        {image}
                                    </div>
                                )
                            })}
                        </div>

                        <style>{`
                            @keyframes scroll {
                                0% {
                                    transform: translateX(0);
                                }
                                100% {
                                    transform: translateX(-50%);
                                }
                            }
                        `}</style>
                    </div>
                }
            </section>
        }
    </>)
}

export default AuditLogos
