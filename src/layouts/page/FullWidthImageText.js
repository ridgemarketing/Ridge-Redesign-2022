import React from "react"
import { Section, Container } from "../../components/global/Wrappers"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { theme } from "../../static/theme"
import { graphql } from "gatsby"

const FullWidthImageText = (props) => {
  console.log(props);

  const content = props.layoutData.layoutContent;
  console.log(content);
  const settings = props.layoutData.layoutSettings;
  const image = getImage(content.image.gatsbyImage);

    return (
      <Section settings={settings}>
        <Container>
          <div class="text-center">
              <h1 className={theme.text.H2 + ' z-10 relative'}>{content.headingText}</h1>

              <div className={'mx-auto relative bottom-6 z-0'}>
                  <GatsbyImage image={image} alt={content.imageAlt} />
              </div>

              <p className={'mt-8'}>
                {content.body}
              </p>
          </div>     
        </Container>
      </Section>
    )
}

export default FullWidthImageText


export const query = graphql`
  fragment FullWidthImageText on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_FullWidthImageText {
        fieldGroupName
        layoutFullWidthImageText {
          layoutContent {
            body
            heading
            intro
            image {
                gatsbyImage(width: 108, formats: AUTO)
            }
          }
          layoutSettings {
            padding {
              bottom
              top
            }
            anchorId
            backgroundColor
            classes
            id
          }
        }
      }
  }
`