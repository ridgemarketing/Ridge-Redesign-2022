import React from "react"
import { Container } from "../../../components/global/Wrappers"
import Parser from "../../../components/global/Parser"
import Buttons from "../../../components/global/Buttons"
import { motion } from "framer-motion"
import { theme } from "../../../static/theme"

const PriceBox = ({box, index, isRecommended}) => {
    const heading       = box.heading ?? false
    const subHeading    = box.subHeading ?? false
    const price         = box.price ?? false
    const body          = box.body ?? false

    const containerVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, delay: index * 0.15 }
        }
    }

    return (
        <motion.div
            suppressHydrationWarning
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`flex flex-col p-8 xl:p-12 border border-[#cdcdcd] bg-white relative w-full xlz:min-w-[400px] xl:w-auto ${isRecommended ? 'pt-14 xl:-mt-6 xl:pt-16' : ''}`}
        >
            {isRecommended &&
                <div className="absolute -top-4 left-8 xl:left-1/2 xl:-translate-x-1/2 bg-rm-blog-blue px-6 py-2">
                    <span className="font-basic-sans text-[26px] leading-[36px] font-semibold text-white uppercase whitespace-nowrap">
                        Recommended
                    </span>
                </div>
            }

            <div className="flex flex-col gap-6">

                <div className="flex flex-col">
                    {/* H3 - 34px - Light style */}
                    {heading &&
                        <h3 className={`font-stratos text-[50px] leading-[60px] font-bold text-black`}>
                            {heading}
                        </h3>
                    }

                    {/* Footer Text style */}
                    {subHeading &&
                        <p className={`${theme.text.H4_LTE} !font-light text-black`}>
                            {subHeading}
                        </p>
                    }
                </div>

                {/* Footer Text style */}
                {body &&
                    <p
                        dangerouslySetInnerHTML={{__html: Parser(body)}}
                        className={`${theme.text.FOOTER} !font-light text-black`}
                    />
                }

                {/* H2 style */}
                {price &&
                    <p className={`text-[34px] font-bold font-basic-sans !leading-[1] text-black`}>
                        {price}
                    </p>
                }
            </div>
        </motion.div>
    )
}

const AuditPricing = ({data}) => {
    
    const heading       = data.heading ?? false
    const body          = data.body ?? false
    const priceBoxes    = data.priceBoxes ?? false
    const buttons       = data.componentButtonGroup ?? false

    return (
        <section id="pricing" className="py-20 bg-[#f3f9f9]">
            <Container container={"slim"}>
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
                        <div
                            dangerouslySetInnerHTML={{__html: Parser(body)}}
                            className={`${theme.text.H4_LTE} text-black max-w-[900px] mx-auto`}
                        />
                    }
                </div>

                {/* Price Boxes */}
                {priceBoxes && priceBoxes.length > 0 &&
                    <div className="flex flex-col xl:flex-row justify-center xl:flex-nowrap gap-[60px] xl:gap-7 items-center xl:items-end mb-12">
                        {priceBoxes.map((box, index) => (
                            <PriceBox
                                key={index}
                                box={box}
                                index={index}
                                isRecommended={box.recommended}
                            />
                        ))}
                    </div>
                }

                {/* CTA Buttons */}
                {buttons && buttons.length > 0 &&
                    <div className="flex justify-center">
                        {buttons.map((button, index) => {
                            if (button?.componentButton?.link?.url) {
                                return (
                                    <Buttons
                                        key={index}
                                        content={button.componentButton}
                                        sectionBackground="paleGrey"
                                    />
                                )
                            }
                            return null
                        })}
                    </div>
                }
            </Container>
        </section>
    )
}

export default AuditPricing
