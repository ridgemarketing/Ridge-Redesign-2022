import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Container } from "../../../components/global/Wrappers"
import Parser from "../../../components/global/Parser"
import Buttons from "../../../components/global/Buttons"
import { theme } from "../../../static/theme"

const PPCAudit = ({data}) => {

    const heading           = data.heading ?? false
    const subHeading        = data.subHeading ?? false
    const body              = data.body ?? false
    const list              = data.list ?? false
    const image             = data.image ?? false
    const componentButton   = data.componentButton ?? false

    return(<>
        <section className="py-20">
            <Container container="default">
                <div className="bg-[#F3F1EE] rounded-[21px] overflow-hidden flex flex-col xl:flex-row gap-8 xl:gap-12 p-8 md:p-12 xl:p-16">

                    {/* Left - Text Content */}
                    <div className="flex flex-col gap-5 xl:w-1/2">
                        {heading &&
                            <h2
                                dangerouslySetInnerHTML={{__html: Parser(heading)}}
                                className={`${theme.text.H5} text-black`}
                            />
                        }
                        {subHeading &&
                            <p
                                dangerouslySetInnerHTML={{__html: Parser(subHeading)}}
                                className={`${theme.text.H4} text-black mb-8`}
                            />
                        }
                        {body &&
                            <p
                                dangerouslySetInnerHTML={{__html: Parser(body)}}
                                className={`${theme.text.H4_LTE} text-black max-w-[535px]`}
                            />
                        }
                        {list && list.length > 0 &&
                            <ul className="flex flex-col gap-4 mt-2">
                                {list.map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 font-basic-sans font-semibold text-[26px] leading-[1.4]">
                                        <svg className="w-[24px] shrink-0" viewBox="0 0 24 24" fill="none">
                                            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#1F9DA5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <span className="text-black">{item.item}</span>
                                    </li>
                                ))}
                            </ul>
                        }
                        {componentButton?.link?.url &&
                            <div className="mt-4">
                                <Buttons content={componentButton} sectionBackground="paleTeal" />
                            </div>
                        }
                    </div>

                    {/* Right - Image */}
                    <div className="xl:w-1/2 flex items-center justify-center">
                        {image && image.localFile?.childImageSharp?.gatsbyImageData &&
                            <GatsbyImage
                                image={image.localFile.childImageSharp.gatsbyImageData}
                                alt={image.altText || ''}
                                className="w-full rounded-xl"
                                objectFit="contain"
                            />
                        }
                        {image && !image.localFile?.childImageSharp?.gatsbyImageData && image.sourceUrl &&
                            <img src={image.sourceUrl} alt={image.altText || ''} className="w-full rounded-xl object-contain" />
                        }
                    </div>
                </div>
            </Container>
        </section>
    </>)
}

export default PPCAudit
