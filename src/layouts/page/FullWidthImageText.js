import React from "react"
import {Section, Container } from "../../components/global/Wrappers"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import theme from "../../static/theme"

const FullWidthImageText = (props) => {
    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;

    const image = getImage(content.image)

    return (
        <Section settings={settings}>
            <Container>
                <div class="text-center">
                    <h1 className={theme.text.H2 + ' z-10 relative'}>{content.headingText}</h1>

                    <div className={'mx-auto relative bottom-6 z-0'}>
                        <GatsbyImage image={image} alt={content.imageAlt} />
                    </div>

                    <p className={'mt-8'}>
                            {content.bodyText}
                    </p>

                </div>     
            </Container>
        </Section>
    )
}

export default FullWidthImageText