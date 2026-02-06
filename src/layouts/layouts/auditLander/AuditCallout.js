import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container } from "../../../components/global/Wrappers"
import Parser from "../../../components/global/Parser"
import Buttons from "../../../components/global/Buttons"
import { motion } from "framer-motion"
import { theme } from "../../../static/theme"

const AuditCallout = ({data}) => {

    const heading               = data.heading ?? false
    const subHeading            = data.subHeading ?? false
    const body                  = data.body ?? false
    const componentButtonGroup  = data.componentButtonGroup ?? false
    const backgroundImage       = data.backgroundImage ?? false

    const containerVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    }

    return (
        <section className="relative py-20 xl:py-28 overflow-hidden">
       
            {backgroundImage && backgroundImage.localFile?.childImageSharp?.gatsbyImageData &&
                <div className="absolute inset-0 w-full h-full ">
                    <GatsbyImage
                        image={backgroundImage.localFile?.childImageSharp?.gatsbyImageData}
                        alt={backgroundImage.altText || ''}
                        className="w-full h-full"
                        objectFit="cover"
                        style={{ position: 'absolute', inset: 0 }}
                    />
                </div>
            }

            <Container container="slim" classes="relative z-10">
                <motion.div
                    variants={containerVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col gap-6 items-center text-center max-w-[1286px] mx-auto"
                >
                
                    {/* H2 style */}
                    {heading &&
                        <h2
                            dangerouslySetInnerHTML={{__html: Parser(heading)}}
                            className={`${theme.text.H2} !leading-[1] text-black`}
                        />
                    }

                    {/* H4 style */}
                    {subHeading &&
                        <p
                            dangerouslySetInnerHTML={{__html: Parser(subHeading)}}
                            className={`${theme.text.H4} !leading-[36px] text-black max-w-[1110px]`}
                        />
                    }

                    {/* P style */}
                    {body &&
                        <p
                            dangerouslySetInnerHTML={{__html: Parser(body)}}
                            className={`${theme.text.P_STD} text-black max-w-[1030px]`}
                        />
                    }

                    {/* Buttons */}
                    {componentButtonGroup && componentButtonGroup.length > 0 &&
                        <div className="flex flex-wrap justify-center gap-4 mt-6">
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
                </motion.div>
            </Container>
        </section>
    )
}

export default AuditCallout
