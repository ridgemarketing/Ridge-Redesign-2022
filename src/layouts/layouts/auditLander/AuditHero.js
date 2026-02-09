import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container } from "../../../components/global/Wrappers"
import Parser from "../../../components/global/Parser"
import Buttons from "../../../components/global/Buttons"
import { theme } from "../../../static/theme"

const AuditHero = ({data}) => {

    const preHeading            = data.preHeading ?? false
    const heading               = data.heading ?? false
    const body                  = data.body ?? false
    const graphic               = data.graphic ?? false
    const componentButtonGroup  = data.componentButtonGroup ?? false
    const desktopBg             = data.desktopBackground ?? false
    const tabletBg              = data.tabletBackground ?? false
    const mobileBg              = data.mobileBackground ?? false
    const largeDesktopBg        = data.largeDesktop ?? false

    return(
        <section className="relative min-h-[975px] md:min-h-[1115px] xl:min-h-min">
            {largeDesktopBg && largeDesktopBg.localFile?.childImageSharp?.gatsbyImageData &&
                <div className="absolute !bottom-0 inset-0 hidden 2xl:block">
                    <GatsbyImage
                        image={largeDesktopBg.localFile?.childImageSharp?.gatsbyImageData}
                        alt=""
                        className="w-full h-full [&_img]:!bottom-0 "
                        objectFit="cover"
                        objectPosition="bottom"
                    />
                </div>
            }
            {desktopBg && desktopBg.localFile?.childImageSharp?.gatsbyImageData &&
                <div className="absolute !bottom-0 inset-0 hidden xl:block 2xl:hidden">
                    <GatsbyImage
                        image={desktopBg.localFile?.childImageSharp?.gatsbyImageData }
                        alt=""
                        className="w-full h-full [&_img]:!bottom-0 "
                        objectFit="cover"
                        objectPosition="bottom"
                    />
                </div>
            }
            {tabletBg && tabletBg.localFile?.childImageSharp?.gatsbyImageData &&
                <div className="absolute inset-0 hidden sm:block xl:hidden">
                    <GatsbyImage
                        image={tabletBg.localFile?.childImageSharp?.gatsbyImageData}
                        alt=""
                        className="w-full h-full"
                        objectFit="cover"
                    />
                </div>
            }
            {mobileBg && mobileBg.localFile?.childImageSharp?.gatsbyImageData &&
                <div className="absolute inset-0 sm:hidden bottom-0">
                    <GatsbyImage
                        image={mobileBg.localFile?.childImageSharp?.gatsbyImageData}
                        alt=""
                        className="w-full h-full object-bottom"
                        objectFit="cover"
                        objectPosition="bottom"
                    />
                </div>
            }

            <Container container="default" classes="relative z-10">
                <div className="flex flex-col xl:flex-row items-center xl:items-start gap-12 xl:gap-0 pt-12 md:py-20 min-h-[500px] xl:min-h-[642px]">

                    {/* Left Column - Text Content */}
                    <div className="flex flex-col gap-6 xl:gap-9 xl:w-[677px] xl:pr-12 text-center xl:text-left">

                        {/* Pre-heading - H4 style with 36px line height */}
                        {preHeading &&
                            <p className={`${theme.text.H4} !leading-[36px] text-rm-blog-blue`}>
                                {preHeading}
                            </p>
                        }

                        {/* Headline Group */}
                        <div className="flex flex-col gap-4">
                            {/* Main headline - PAGE_HEADER style */}
                            {heading &&
                                <h1
                                    dangerouslySetInnerHTML={{__html: Parser(heading)}}
                                    className={`${theme.text.PAGE_HEADER} text-black`}
                                />
                            }
                            {/* Sub body - H5 style but regular weight */}
                            {body &&
                                <p
                                    dangerouslySetInnerHTML={{__html: Parser(body)}}
                                    className={`${theme.text.H5} !font-normal text-black`}
                                />
                            }
                        </div>

                        {/* Buttons */}
                        {componentButtonGroup && componentButtonGroup.length > 0 &&
                            <div className="flex flex-wrap justify-center xl:justify-start gap-6 mt-2">
                                {componentButtonGroup.map((button, index) => {
                                    if (button?.componentButton?.link?.url) {
                                        return (
                                            <Buttons
                                                key={index}
                                                content={button.componentButton}
                                                sectionBackground="paleTeal"
                                            />
                                        )
                                    }
                                    return null
                                })}
                            </div>
                        }
                    </div>

                    {/* Right Column - Laptop Graphic */}
                    <div className="relative flex-1 flex items-center justify-center xl:justify-end xl:absolute xl:right-0 xl:top-1/2 xl:-translate-y-1/2 xl:w-[55%] 2xl:w-[50%]">
                        {graphic && graphic.localFile?.childImageSharp?.gatsbyImageData &&
                            <div className="relative w-full max-w-[500px] xl:max-w-none">
                                <GatsbyImage
                                    image={graphic.localFile?.childImageSharp?.gatsbyImageData}
                                    alt=""
                                    className="w-full"
                                    objectFit="contain"
                                />
                            </div>
                        }
                        {/* If no gatsby image, try sourceUrl */}
                        {graphic && !graphic.localFile?.childImageSharp?.gatsbyImageData && graphic.sourceUrl &&
                            <div className="relative w-full max-w-[500px] xl:max-w-none">
                                <img
                                    src={graphic.sourceUrl}
                                    alt=""
                                    className="w-full object-contain"
                                />
                            </div>
                        }
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default AuditHero
