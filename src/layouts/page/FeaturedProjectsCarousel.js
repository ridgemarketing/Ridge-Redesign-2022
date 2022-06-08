import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import Link from "../../components/global/FlexibleLink"
import {Section, Container, BackgroundImage} from "../../components/global/Wrappers"
import theme from "../../static/theme"

const FeaturedProjectsCarousel = (props) => {
    return (
        <Section settings={props.settings}>
            <Container>
                <div className={`lg:flex`}>
                    <div className={`w-full max-w-[712px] h-[734px] text-right`}>
                        <h2 className={theme.text.H2 + `absolute top-6 right-4`}>{props.content.heading[0]}</h2>
                        <BackgroundImage image={current.image} />
                    </div>
                    <div className={`flex flex-col`}>
                        <h2 className={theme.text.H2 + `mt-6 ml-4`}>{props.content.heading[1]}</h2>
                        <div className={`justify-self-end`}>
                            <div className={`px-8 pt-7 pb-10 bg-white md:px-12 md:pt-9 shadow-block`}>
                                <span>{current.company}</span>
                                <h3>{current.heading}</h3>
                                <div>
                                    <Link link={current.link}></Link>
                                </div>
                            </div>
                            <div className={`w-36 flex bg-rm-pale-grey`}>
                                <button className={`flex-1 px-5 py-3`}>
                                    <i></i>
                                </button>
                                <button className={`flex-1 px-5 py-3`}>
                                    <i></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default FeaturedProjectsCarousel