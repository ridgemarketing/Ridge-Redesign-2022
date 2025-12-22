import React from "react"
import Parser from "../../../components/global/Parser"
import { theme } from "../../../static/theme"
import { motion } from "framer-motion"
import { GatsbyImage } from "gatsby-plugin-image"
import { Container } from "../../../components/global/Wrappers"

const PPCTools = ({data}) => {

    const heading   = data.heading ?? false
    const logos     = data.logos ?? false

    const containerVariant = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.4
            }
        }
    }

    const variantItems = {
        hidden: {
            opacity : 0,
            scale   : 0.3
        },
        visible: {
            opacity : 1,
            scale   : [0.3, 1]
        }
    }

    return(<>
        <section className="pt-[35px] mb-[120px]">
            <Container classes="flex flex-col gap-20">
                {heading &&
                    <h2 className={`${theme.text['H5']} text-center`} dangerouslySetInnerHTML={{__html: heading}}></h2>
                }
                {logos &&
                    <motion.div 
                        className={"mt-12 flex w-full flex-wrap justify-center items-center lg:justify-around gap-y-6 md:gap-y-8 gap-x-10 sm:gap-x-12 md:gap-x-20 lg:gap-x-6"}
                        variants={containerVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {logos.map((logo, index) => {
                            const image = (logo.logo.localFile.ext === ".svg") 
                            ? <img key={logo.logo.sourceUrl} className={`w-full object-contain`} src={logo.logo.sourceUrl} alt={logo.logo.altText}/>
                            : <GatsbyImage key={logo.logo.sourceUrl} className={`w-full`} objectFit="contain" image={logo.logo.localFile.childImageSharp.gatsbyImageData} alt={logo.logo.altText} /> ;
                            return(
                            <motion.div key={`LogoCloudItem__${image.id}__${index}`} variants={variantItems} className={"w-[24%] lg:w-[15%] h-full"}>
                                {image}                        
                            </motion.div>
                            )
                        })}
                    </motion.div>
                }
            </Container>
        </section>
    </>)
}

export default PPCTools