import React from "react"
import { Container } from "../../components/global/Wrappers"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { theme } from "../../static/theme"

const PageHeader = (props) => {
    const content       = props.layoutContent;
    const image         = getImage(content.backgroundImage.localFile);

    return (
        <section className={`relative`}>
          <GatsbyImage className={`absolute top-0 left-0 w-full h-0 pt-[580px] object-cover`} image={image} />
          <div className={`lg:mx-28`}> 
            <Container classes={`relative pt-80`}>
              <div className={`bg-black text-white py-12 px-6 lg:px-12 xl:pt-14 xl:pb-12 xl:pl-20 xl:pr-16`} style={{maxWidth:content.maxWidth}}>
                <span className={`block mb-8 ${theme.text.H4}`}>
                  {content.eyebrow}
                </span>
                <h1>
                  <span className={`block ${theme.text.HERO}`}>
                    {content.heading}
                  </span>
                  <span className={`block ${theme.text.H1_LTE}`}>
                    {content.subheading}
                  </span>
                </h1>
              </div>
            </Container>
          </div>
        </section>
    )
}

export default PageHeader;