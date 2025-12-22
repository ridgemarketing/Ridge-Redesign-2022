import React from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import { motion } from "framer-motion"
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll"
import { Container } from "../../../components/global/Wrappers"
import { GatsbyImage } from "gatsby-plugin-image"

const PPCLogos = ({data}) => {

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
        {data &&
            <section className="mb-[200px]">
                <Container classes="px-0">
                    <div aria-hidden="true" className="w-[200px] h-full absolute left-0 z-10 bg-gradient-to-r from-white to-transparent"></div>
                    <div aria-hidden="true" className="w-[200px] h-full absolute right-0 z-10 bg-gradient-to-l from-white to-transparent"></div>
                    <Splide
                        className       ={`w-full`}
                        extensions      ={ { AutoScroll } }
                        options         ={ {
                            type        : 'loop',
                            autoWidth   : true,
                            gap         : '4rem',
                            drag        : 'free',
                            focus       : 'center',
                            arrows      : false,
                            perMove     : 1,
                            pagination  : false,
                            autoScroll  : {
                                pauseOnHover: false,
                                pauseOnFocus: false,
                                rewind: true,
                                speed: 0.6,
                            }
                        } }
                    >
                        {data.map((logo, index) => {
                            const image = (logo.image.localFile.ext === ".svg") 
                            ? <img key={logo.image.sourceUrl} className={`w-full object-contain h-auto grayscale opacity-75`} src={logo.image.sourceUrl} alt={logo.image.altText}/>
                            : <GatsbyImage key={logo.image.sourceUrl} className={`w-full grayscale opacity-75`} objectFit="contain" image={logo.image.localFile.childImageSharp.gatsbyImageData} alt={logo.image.altText} /> ;
                            return(
                                <SplideSlide key={`LogoCloudItem__slide__${index}`}>
                                    <motion.div key={`LogoCloudItem__inner__${index}`} variants={variantItems} className={"h-[110px] flex flex-col items-center justify-center"}>
                                        {image}                        
                                    </motion.div>
                                </SplideSlide>
                            )
                        })}
                    </Splide>
                </Container>
            </section>
        }
    </>)
}

export default PPCLogos