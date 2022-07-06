import React from "react"
import {Section, Container } from "../../components/global/Wrappers"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { theme } from "../../static/theme"
import { graphql } from "gatsby"

const TwoColBreakoutImageHeading = (props) => {
    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    const image = getImage(content.image.localFile)

    return (
        <Section settings={settings} classes={'2xl:max-w-[1920px] 2xl:mx-auto'}>
            <div className={'px-6 order-2 mt-16 mx-auto max-w-[812px] xl:absolute xl:mt-0 xl:mx-0 xl:right-0 xl:top-0 '}>
              <GatsbyImage image={image} />
            </div>
            <Container>
                <div className={'flex justify-start xl:mt-20 xl:mb-[600px] order-1 relative z-10'}>
                    <div className={'flex-1 px-5 xl:pl-10'}>
                        <h2>
                            <span className={theme.text.H2}>{content.heading}</span>
                        </h2>
                    </div>
                    <div className={`hidden xl:block xl:w-[calc(726px-(50vw-640px))] 2xl:w-[calc(726px-(50vw-640px)+(50vw-960px))] ml-8`}></div>
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