import React from "react"
import {Section, Container } from "../../components/global/Wrappers"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import theme from "../../static/theme"

const FullContainerImageTextBlock = (props) => {
    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;

    const image = getImage(content.image)

    return (
        <Section settings={settings}>
            <Container>
                <GatsbyImage image={image} alt={content.imageAlt} />
            </Container>
        </Section>
    )
}

export default FullContainerImageTextBlock