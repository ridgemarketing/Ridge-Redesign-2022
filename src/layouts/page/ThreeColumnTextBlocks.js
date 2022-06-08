import React from 'react'
import {Section, Container } from "../../components/global/Wrappers"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { theme } from "../../static/theme"

const ThreeColumnTextBlocks = (props) => {
    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;

    const textBlocks = content.list.map(item => {
        const image = getImage(item.image)
        return (
            <div>
                <div className={"max-w-[54px]"}>
                    <GatsbyImage image={image} />
                </div>
                <p className={`px-4 mt-4 text-left`}>{item.WYSIWYG_text}</p>
            </div>
        )
    })


    return (
        <Section settings={settings}>
            <Container>
                <div>
                <h3>
                    <span className={theme.text.H2}>{content.heading}</span>
                </h3>
                <p className={"mt-6 max-w-5xl mx-auto"}>
                    <span className={theme.text.P_STD}>{content.bodyText}</span>
                </p>
            
                <p>
                    <span className={theme.text.H4}>{content.subheading}</span>
                </p>
                </div>

                <div className={'md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1100px] mx-auto mt-12'}>
                    {textBlocks}
                </div>
            </Container>
        </Section>
    )
}

export default ThreeColumnTextBlocks