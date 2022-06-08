import React from "react"
import {Section, Container } from "../../components/global/Wrappers"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { theme } from "../../static/theme"

const FullWidthTextImage = (props) => {

    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    const image = getImage(content.componentFlexibleMedia.image)

    return (
        <Section settings={settings}>
            <Container>
                <div class="text-center">
                    <h1 className={theme.text.H2 + ' z-10 relative'}>Full Width Text Image</h1>
                    <div className={'max-w-[328px] mx-auto relative bottom-6 z-0'}>
                        <GatsbyImage image={image} />
                    </div>
                    <p className={'mt-8'}>
                        Test text to view spacing below positioned image
                    </p>
                </div>
            </Container>
        </Section>
    )
}

export default FullWidthTextImage
