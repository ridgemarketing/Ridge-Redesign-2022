import React from "react"
import Parser from "../../../components/global/Parser"
import { theme } from "../../../static/theme"
import { Container } from "../../../components/global/Wrappers"
import { motion } from "framer-motion"

const PPCStats = ({data}) => {
    
    const heading   = data.heading ?? false
    const body      = data.body ?? false
    const stats     = data.columns ?? false

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
        <section className="my-[120px]">
            <Container classes={`flex flex-col gap-16`}>
                <div className="flex flex-col gap-6">
                    {heading &&
                        <h2 dangerouslySetInnerHTML={{__html: Parser(heading)}} className={`text-center text-[2.5rem] leading-[2.75rem] font-stratos text-black uppercase`}></h2>
                    }
                    {body &&
                        <p dangerouslySetInnerHTML={{__html: Parser(body)}} className={`text-center ${theme.text.P_STD} text-black`}></p>
                    }
                </div>
                {stats && 
                    <motion.ul 
                        variants    ={containerVariant}   
                        viewport    ={{ once: true }}                      
                        initial     ="hidden"
                        whileInView ="visible" 
                        className   ="flex items-stretch gap-y-20 gap-x-12 flex-wrap xl:flex-nowrap w-full justify-center items-center">
                        {stats.map((stat, key) => {
                            return (
                                <motion.li key={key} variants={variantItems}  className="flex flex-col w-full md:w-[calc(50%-24px)] xl:w-[calc(25%-24px)] gap-6 text-center font-stratos">
                                    <span className="text-[10rem] leading-[9.95rem] text-rm-green uppercase font-semibold -tracking-[0.75rem]">{stat.number === null ? `0` : stat.number}</span>
                                    <span className={`${theme.text.H5} text-black`}>{stat.body}</span>
                                </motion.li>
                            )
                        })}
                    </motion.ul>
                }
            </Container>
        </section>
    </>)
}
export default PPCStats