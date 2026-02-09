import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container } from "../../../components/global/Wrappers"
import Parser from "../../../components/global/Parser"
import { motion } from "framer-motion"
import { theme } from "../../../static/theme"

const StepNumber = ({number}) => (
    <div className="relative w-[49px] h-[49px] shrink-0">
        <div className="absolute inset-0 bg-black rounded-full" />
        <span className={`absolute inset-0 flex items-center justify-center ${theme.text.H4} text-white`}>
            {number}.
        </span>
    </div>
)

const IconItem = ({icon}) => (
    <div className="flex flex-col items-center xl:items-start gap-4 xl:gap-6 text-center xl:text-left">
        {icon.icon?.sourceUrl &&
            <img
                src={icon.icon.sourceUrl}
                alt={icon.icon.altText || ''}
                className="w-[60px] h-[60px] object-contain"
            />
        }
        <div className="flex flex-col gap-4 text-black">
            {icon.heading &&
                <h4 className={`${theme.text.H4}`}>
                    {icon.heading}
                </h4>
            }
            {icon.body &&
                <p
                    dangerouslySetInnerHTML={{__html: Parser(icon.body)}}
                    className={`${theme.text.P_STD}`}
                />
            }
        </div>
    </div>
)

const StepCard = ({step, index}) => {
    const heading   = step.heading ?? false
    const body      = step.body ?? false
    const subBody   = step.subBody ?? false
    const icons     = step.icons ?? false
    const image     = step.image ?? false
    const even      = index % 2 == 0

    const containerVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: index * 0.2 }
        }
    }

    return (
        <div className={`${even ? 'bg-rm-pale-teal' : 'bg-white py-20'}`}>
            <Container>
                <motion.div
                    variants={containerVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col gap-10"
                >
                    {/* Text/Image Row - stacked on mobile, side-by-side on xl */}
                    <div className="flex flex-col xl:flex-row gap-8 xl:gap-11 justify-between items-center">
                        {/* Text Content - centered on mobile */}
                        <div className="flex flex-col gap-6 items-center xl:items-start text-center xl:text-left xl:max-w-[620px]">
                            <StepNumber number={index + 1} />

                            {/* H3 - 34px style */}
                            {heading &&
                                <h3 className={`${theme.text.H3} !text-[34px] text-black`}>
                                    {heading}
                                </h3>
                            }

                            {/* H4-Light style */}
                            {body &&
                                <p
                                    dangerouslySetInnerHTML={{__html: Parser(body)}}
                                    className={`${theme.text.H4_LTE} text-black`}
                                />
                            }

                            {/* P style */}
                            {subBody &&
                                <p
                                    dangerouslySetInnerHTML={{__html: Parser(subBody)}}
                                    className={`${theme.text.P_STD} text-black`}
                                />
                            }
                        </div>
                        {/* Step Image - shows below text on mobile */}
                        {image && image.localFile?.childImageSharp?.gatsbyImageData &&
                            <div className="mt-6 xl:mt-0 hidden xl:block">
                                <GatsbyImage
                                    image={getImage(image.localFile)}
                                    alt={image.altText || ''}
                                    className="w-full max-w-[615px] xl:min-w-[615px]"
                                    objectFit="contain"
                                />
                            </div>
                        }
                    </div>

                    {/* Icons Grid - wraps and centers on mobile */}
                    {icons && icons.length > 0 &&
                        <div className="flex flex-col xl:flex-row flex-wrap xl:flex-nowrap gap-8 mt-4 items-center xl:items-start justify-center xl:justify-start">
                            {icons.map((icon, iconIndex) => (
                                <IconItem key={iconIndex} icon={icon} />
                            ))}
                        </div>
                    }

                    {image && image.localFile?.childImageSharp?.gatsbyImageData &&
                    <div className="mt-6 xl:mt-0 xl:hidden mx-auto">
                        <GatsbyImage
                            image={getImage(image.localFile)}
                            alt={image.altText || ''}
                            className="w-full max-w-[615px] xl:min-w-[615px]"
                            objectFit="contain"
                        />
                    </div>
                }
                </motion.div>
            </Container>
        </div>
    )
}

const AuditSteps = ({data}) => {

    const heading   = data.heading ?? false
    const body      = data.body ?? false
    const steps     = data.steps ?? false

    return (
        <section className="pt-20 bg-rm-pale-teal">
            <Container container="slim">
                {/* Section Header */}
                <div className="flex flex-col gap-6 text-center mb-16">
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
                            className={`${theme.text.H4_LTE} text-black max-w-[900px] mx-auto`}
                        />
                    }
                </div>
            </Container>
            {/* Steps */}
            {steps && steps.length > 0 &&
                <div className="flex flex-col gap-20">
                    {steps.map((step, index) => (
                        <StepCard key={index} step={step} index={index} />
                    ))}
                </div>
            }
        </section>
    )
}

export default AuditSteps
