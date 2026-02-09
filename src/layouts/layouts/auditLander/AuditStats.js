import React from "react"
import { Container } from "../../../components/global/Wrappers"
import Parser from "../../../components/global/Parser"
import { motion } from "framer-motion"
import { theme } from "../../../static/theme"

const StatItem = ({stat, index, cmo}) => {
    const statValue     = stat.stat ?? false
    const heading       = stat.heading ?? false
    const subHeading    = stat.subHeading ?? false

    const containerVariant = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, delay: index * 0.2 }
        }
    }

    return (
        <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-4 text-center w-full md:w-[446px]"
        >
            <div className="flex flex-col gap-3">
                {/* STATS style with custom size */}
                {statValue &&
                    <p className={`${theme.text.STATS} !text-[80px] md:!text-[120px] !leading-[1] text-rm-green tracking-[-6px]`}>
                        {statValue}
                    </p>
                }
                {/* H3 style */}
                {heading &&
                    <p className={`${theme.text.H3} !leading-[1] ${cmo ? ' text-white' : 'text-black' }`}>
                        {heading}
                    </p>
                }
            </div>
            {/* H4-Light style */}
            {subHeading &&
                <p className={`${theme.text.H4_LTE}  ${cmo ? ' text-white' : 'text-black' }`}>
                    {subHeading}
                </p>
            }
        </motion.div>
    )
}

const AuditStats = ({data, cmo}) => {

    const heading   = data.heading ?? false
    const body      = data.body ?? false
    const subBody   = data.subBody ?? false
    const stats     = data.stats ?? false

    return (
        <section className={`py-20 bg-white ${cmo && 'bg-rm-carbon'}`}>
            <Container container="none" classes="max-w-[1450px] mx-auto px-4">
                {/* Section Header */}
                <div className="flex flex-col gap-6 text-center mb-16">
                    {/* H5 style */}
                    {heading &&
                        <h2
                            dangerouslySetInnerHTML={{__html: Parser(heading)}}
                            className={`${theme.text.H5}  ${cmo ? ' text-white' : 'text-black' }`}
                        />
                    }
                    {/* H4-Light style */}
                    {body &&
                        <p
                            dangerouslySetInnerHTML={{__html: Parser(body)}}
                            className={`${theme.text.H4_LTE}  ${cmo ? ' text-white' : 'text-black' } max-w-[1110px] mx-auto`}
                        />
                    }
                </div>

                {/* Stats Intro - H3 - 34px style */}
                {subBody &&
                    <div className="text-center mb-12">
                        <p
                            dangerouslySetInnerHTML={{__html: Parser(subBody)}}
                            className={`${theme.text.H3} !text-[34px] text-black`}
                        />
                    </div>
                }

                {/* Stats Grid */}
                {stats && stats.length > 0 &&
                    <div className="flex flex-col xl:flex-row gap-12 xl:gap-0 px-4 xl:px-0 items-center flex-nowrap justify-center">
                        {stats.map((stat, index) => (
                            <StatItem key={index} stat={stat} index={index} cmo={cmo} />
                        ))}
                    </div>
                }
            </Container>
        </section>
    )
}

export default AuditStats
