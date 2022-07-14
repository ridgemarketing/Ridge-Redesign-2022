import React from "react"
import { Section, Container } from "../../components/global/Wrappers"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { theme } from "../../static/theme"
import { graphql } from "gatsby"

const TwoColImageText = (props) => {


    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    const image = content.componentFlexibleMedia.image ? getImage(content.componentFlexibleMedia.image.localFile) : false;
    let order;
    order = (content.imagePosition) == 'left' ? 'lg:order-2' : '' ;

    return (
        <Section settings={settings}>
            <Container>
                <div className={'lg:grid grid-cols-2 gap-16 pt-16'}>
                    <div className={'pb-12 xl:px-20 xl:pt-12 lg:pb-0 ' + order}>
                        <h3 className={theme.text.H2}>
                            {content.heading}
                        </h3>
                        <p className={theme.text.P_STD + ' mt-8'}>
                            {content.body}  
                        </p>
                    </div>

                    <div className={"lg:text-left text-center"}>
                        <GatsbyImage image={image} />
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default TwoColImageText


export const query = graphql`
  fragment TwoColImageTextPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_TwoColImageText {
        fieldGroupName
        layoutTwoColImageText {
          layoutContent {
            body
            heading
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
export const serviceQuery = graphql`
  fragment TwoColImageTextService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_TwoColImageText {
        fieldGroupName
        layoutTwoColImageText {
          layoutContent {
            body
            heading
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

export const projectQuery = graphql`
  fragment TwoColImageTextProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_TwoColImageText {
        fieldGroupName
        layoutTwoColImageText {
          layoutContent {
            body
            heading
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