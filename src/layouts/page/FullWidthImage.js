import React from "react"
import {Section, Container } from "../../components/global/Wrappers"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { theme } from "../../static/theme"

const FullWidthImage = (props) => {
    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    const desktopImage = getImage(content.flexibleMedia.image);
    const mobileImage = getImage(content.responsiveImages.mobile);
    const image = mobileImage 
        ? 
            <>
            <GatsbyImage className={'md:hidden'} image={mobileImage} alt={content.imageAlt} />
            <GatsbyImage className={'hidden md:block'} image={desktopImage} alt={content.imageAlt} />
            </>
        :
            <GatsbyImage image={desktopImage} alt={content.imageAlt} />;    
    

    return (
        <Section settings={settings}>
            <Container>
                <div className={'max-w-[1120px] mx-auto'}> 
                    {image}
                </div>
            </Container>
        </Section>
    )
}

export default FullWidthImage