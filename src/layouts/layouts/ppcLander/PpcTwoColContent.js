import React from "react"
import { TopCloud_Large, TopCloudPiece_Large } from "../../../static/clouds"
import { Container } from "../../../components/global/Wrappers"
import Parser from "../../../components/global/Parser"

const PPCTwoColContent = ({data}) => {

    const checklist     = data.checklist ?? false
    const videoText     = data.videoText ?? false

    
    console.log('twoCol', data)

    return(<>
        <section className="pt-[60px] pb-20 relative bg-gradient-to-t from-[#edf8f9] via-[#f3f9f9] via-47% to-white">
            <Container classes={``}>
                {videoText.heading &&
                    <h2 dangerouslySetInnerHTML={{__html: Parser(videoText.heading)}} className={`text-left text-[2.5rem] leading-[2.75rem] font-stratos text-black uppercase max-w-[700px]`}></h2>
                }
                {videoText.body &&
                    <p dangerouslySetInnerHTML={{__html: Parser(videoText.body)}} className={`text-left font-basic-sans`}></p>
                }
                {}
            </Container>
        </section>
        <TopCloudPiece_Large className={`w-full mb-20`} />
    </>)
}

export default PPCTwoColContent