import React from "react"
import {Section, Container } from "../../components/global/Wrappers"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { theme } from "../../static/theme"
import { graphql } from "gatsby"

const TwoColBreakoutImageHeading = (props) => {
    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    const image = getImage(content.image.localFile);

    const bgColor = settings.backgroundColor ? settings.backgroundColor : `white`;

    return (
        <Section settings={settings} classes={`overflow-hidden relative`}>
            <div className={`bg-white absolute top-0 left-0 right-0 w-full h-32`}></div>
            <div className={`bg-${bgColor} absolute top-32 left-0 right-0 bottom-0 w-full h-full`}></div>
            <Container size={`slim`}>
              <div className={`relative xl:min-h-[510px]`}>
                <div className={`lg:absolute lg:top-0 max-h-[510px] max-w-[810px] lg:left-[calc(50%+2.25rem)] lg:w-[calc(50%+50vw-465px)] xl:left-[calc(655px+3.5rem)] xl:w-[calc(655px+50vw-640px)]`}>
                  <GatsbyImage image={image} />
                </div>
                <div className={`py-16 lg:pt-48 lg:flex xl:pt-64`}>
                    <div className={`lg:w-1/2 lg:mr-9 xl:mr-14 xl:w-[655px]`}>
                        <h2 className={theme.text.H1_STD}>
                            {content.heading}
                        </h2>
                    </div>
                    <div className={`lg:max-w-1/2`}></div>
                </div>
                </div>
            </Container>
        </Section>
    )
}

export default TwoColBreakoutImageHeading


export const pageQuery = graphql`
  fragment TwoColBreakoutImageHeadingPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_TwoColBreakoutImageHeading {
        fieldGroupName
        layoutTwoColBreakoutImageHeading {
          layoutContent {
            heading
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            imagePosition
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

export const serivceQuery = graphql`
  fragment TwoColBreakoutImageHeadingService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_TwoColBreakoutImageHeading {
        fieldGroupName
        layoutTwoColBreakoutImageHeading {
          layoutContent {
            heading
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            imagePosition
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

export const projectQuery = graphql`
  fragment TwoColBreakoutImageHeadingProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_TwoColBreakoutImageHeading {
        fieldGroupName
        layoutTwoColBreakoutImageHeading {
          layoutContent {
            heading
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            imagePosition
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