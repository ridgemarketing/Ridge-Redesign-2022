import React from "react" 
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { theme } from '../../static/theme.js'
import { Container, Section } from '../../components/global/Wrappers.js'

const ImageOverlapBackground = ({ props }) => {

    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    const image = getImage(content.componentFlexibleMedia.image);

    let img_size  = content.imgSize == 'full' ? 'w-full -mt-[calc(50%)] ' : 'w-1/2 -mt-[calc(12.5%)]';

    return(
        <Section Settings={ settings }>
            <Container>
                <div className="flex w-full">
                    <GatsbyImage
                        image       = { image }
                        alt         = { content.alt.image }
                        className   = { img_size +  ' block ml-auto mr-auto' }
                    />
                </div>
            </Container>
        </Section>
    )
}

export default ImageOverlapBackground
