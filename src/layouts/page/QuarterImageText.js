import React from "react"
import {Section, Container } from "../../components/global/Wrappers"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { theme } from "../../static/theme"
import { graphql } from "gatsby"
import Link from "../../components/global/FlexibleLink"

const QuarterImageText = (props) => {


    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    const image = getImage(content.componentFlexibleMedia.image.localFile);
    let order;
    order = (content.imagePosition) == 'left' ? '' : 'flex-reverse' ;

    return (
        <Section settings={settings}>
            <Container size={`slim`}>
                <div className={`mb-12`}>
                  <p className={theme.text.H4_LTE}>
                    {content.introText}
                  </p>
                </div>
                <div className={`lg:flex ${order}`}>
                    <div className={`lg:text-left text-center mb-12 lg:w-1/4 lg:mr-12 lg:flex-grow-1 lg:flex-shrink-0`}>
                        <GatsbyImage image={image} />
                    </div>
                    <div className={``}>
                        <p className={`${theme.text.P_STD}`}>
                            {content.body}  
                        </p>
                        
                        {content.componentButton &&  
                          <div className={`mt-28`}>
                            <Link
                              link={content.componentButton.link}
                            />
                          </div>

                        }
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default QuarterImageText


export const query = graphql`
  fragment QuarterImageTextPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_QuarterImageText {
        fieldGroupName
        layoutQuarterImageText {
          layoutContent {
            introText
            body
            imagePosition
            componentFlexibleMedia {
              video
              type
              lottie
              image {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            componentButton {
              colors {
                resting
              }
              link {
                target
                title
                url
              }
              style
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