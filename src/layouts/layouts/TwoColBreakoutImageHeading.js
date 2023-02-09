import React from "react"
import {Section, Container } from "../../components/global/Wrappers"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { theme } from "../../static/theme"
import { graphql } from "gatsby"

const TwoColBreakoutImageHeading = (props) => {
    const content       = props.layoutData.layoutContent;
    const settings      = props.layoutData.layoutSettings;
    const image         = getImage(content.image.localFile);
    let imgWrapperCss   = 'lg:left-[calc(50%+2.25rem)] xl:left-[calc(655px+3.5rem)]';
    let FlexWrapperCss  = 'lg:flex';
    let headingCss      = 'lg:mr-9 xl:mr-14';
    
    if (content.imagePosition && content.imagePosition === 'left') {
      imgWrapperCss   = 'lg:right-[calc(50%+2.25rem)] xl:right-[calc(655px+3.5rem)]';
      FlexWrapperCss  = 'lg:flex lg:flex-row-reverse';
      headingCss      = 'lg:ml-9 xl:ml-14';
    }

    const bgColor = settings.backgroundColor ? settings.backgroundColor : `white`;

    return (
        <Section settings={settings} classes={`relative bg-transparent`}>
          <div className={`bg-${theme.backgroundColor[bgColor]} absolute top-32 left-0 right-0 bottom-0 w-full h-full`}></div>
          <Container size={`slim`}>
            <div className={`relative`}>
              <div className={`relative overflow-hidden lg:absolute lg:top-0 max-w-[810px] lg:w-[calc(50%+50vw-465px-2.25rem)] xl:w-[calc(100%-655px+3.5rem+50vw-640px)] ${imgWrapperCss}`}>
                <div className={`pt-[54.64%] w-full h-0`}>
                  <GatsbyImage className={`absolute top-0 left-0 w-full h-full object-cover object-top`} image={image} />
                </div>
              </div>
              <div className={`pt-16 lg:pt-48 2xl:pt-64 ${FlexWrapperCss}`}>
                  <div className={`lg:w-1/2 xl:w-[655px] ${headingCss}`}>
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