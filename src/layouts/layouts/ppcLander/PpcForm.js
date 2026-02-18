import React from "react"
import { BottomCloudPiece_Large, BottomCloudPiece_Medium, BottomCloudPiece_Small } from "../../../static/clouds"
import { Container } from "../../../components/global/Wrappers"
import Parser from "../../../components/global/Parser"
import { theme } from "../../../static/theme"
import { GatsbyImage } from "gatsby-plugin-image"
import { FormLander2026 } from "../../../components/global/Forms"

const PPCForm = ({data, cmo, persistantEmail}) => {

    const heading   = data.heading ?? false
    const body      = data.body ?? false
    const image     = data.image ?? false
    let textColor   = `rm-white`
    let btnStyle    = `SOLID_GREEN_HOVER_DARK`

    return(<>
        <section className="bg-white -mt-[1px]">
            {!cmo && <>
                <BottomCloudPiece_Large className={`w-full hidden xl:block cloudAnimation-Bottom z-10 relative`} />
                <BottomCloudPiece_Medium className={`w-full hidden md:block xl:hidden cloudAnimation-Bottom z-10 relative`} />
                <BottomCloudPiece_Small className={`w-full md:hidden cloudAnimation-Bottom z-10 relative`} />
            </>}
            <div id="form" className={`pb-[160px] relative ${cmo ? `pt-[160px] bg-[#f3f1ee] bg-[linear-gradient(225deg,rgba(0,171,182,0.25)_0%,transparent_35%,transparent_65%,rgba(0,171,182,0.25)_100%)]` : `bg-gradient-to-t from-white via-[#f3f9f9] via-47% to-[#edf8f9]` } z-20`}>
                <Container classes={`flex flex-col gap-[100px]`}>
                    <div className="flex flex-col-reverse items-center justify-center xl:flex-row xl:flex-wrap flex-nowrap gap-20 xl:gap-6">
                        <div className="flex flex-col gap-6 text-left flex-1">
                            {heading &&
                                <h2 dangerouslySetInnerHTML={{__html: Parser(heading)}} className={`text-center xl:text-left text-[2.5rem] leading-[2.7rem] md:text-[4.5rem] md:leading-[4.475rem] font-stratos font-semibold text-black uppercase`}></h2>
                            }
                            {body &&
                                <p dangerouslySetInnerHTML={{__html: Parser(body)}} className={`text-center xl:text-left ${theme.text.H4_LTE} text-rm-grey max-w-[835px] mx-auto`}></p>
                            }
                        </div>
                        {image &&
                            // <GatsbyImage 
                            //     image       = {image.localFile.childImageSharp.gatsbyImageData} 
                            //     alt         = {image.altText} 
                            //     className   = {`flex self-start w-[459px] h-[459px]`} 
                            //     objectFit   = {`contain`}/>
                            <img 
                                src         = {image.sourceUrl} 
                                alt         = {image.altText} 
                                className   = {`flex xl:self-start w-[459px] h-[459px] object-contain`} />
                        }
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className={`${theme.text.H5} font-semibold text-black text-center xl:text-left`}>Let's Talk</h2>
                        <FormLander2026 
                            classes             ={`w-full`} 
                            submitLabel         ={`Submit`} 
                            btnContainerClasses ={`md:col-span-2 text-center`} 
                            btnStyle            ={btnStyle} 
                            textColor           ={textColor} 
                            bgColor             ={`white`} 
                            redirectForm        ={true}
                            persistantEmail     ={persistantEmail} />
                    </div>
                </Container>
            </div>
        </section>
    </>)
}

export default PPCForm