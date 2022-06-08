import React from "react"
import {Section, Container } from "../../components/global/Wrappers"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import theme from "../../static/theme"

const FullWidthTextImage = (props) => {

    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    const image = getImage(content.componentFlexibleMedia.image)

    return (
        <div class="lg:grid grid-cols-16 gap-4">
            <h1>Full Width Text Image</h1>
            <div className={'max-w-[164px]'}>
            <GatsbyImage image={image} />
            </div>
        </div>
    )
}

export default FullWidthTextImage
