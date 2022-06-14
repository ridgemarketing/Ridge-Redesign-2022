import React from "react"
import {Section, Container } from "../../components/global/Wrappers"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { theme } from "../../static/theme"

const TwoColTextBreakoutImage = (props) => {
    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    const image = getImage(content.image)

    return (
        <Section settings={settings} classes={'2xl:max-w-[1920px] 2xl:mx-auto'}>
            <div className={'xl:absolute xl:left-[-202px] px-6 order-2 mt-16 xl:mt-0 mx-auto xl:mx-0'}>
            <GatsbyImage image={image}/>
            </div>
            <Container>
                <div className={'flex justify-start xl:mt-20 xl:mb-[600px] order-1'}>
                    <div className={`hidden xl:block xl:w-[calc(726px-(50vw-640px))] 2xl:w-[calc(726px-(50vw-640px)+(50vw-960px))] mr-8`}></div>

                    <div className={'flex-1 px-5 xl:pr-10'}>
                        <h4>
                            <span className={theme.text.H3}>{content.heading}</span>
                        </h4>
                        <p className={theme.text.P_STD + ' my-8 text-rm-grey'}>
                            {content.body}
                        </p>
                        <ul>
                            <li>
                                item for the li
                            </li>
                            <li>
                                item for the li
                            </li>
                            <li>
                                item for the li
                            </li>
                            <li>
                                item for the li
                            </li>
                            <li>
                                item for the li
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default TwoColTextBreakoutImage