import React from "react"
import { Section, Container } from "../../components/global/Wrappers"
import { theme } from "../../static/theme"
import { graphql } from "gatsby"
import FlexibleMedia from "../../components/global/FlexibleMedia"
import Parser from "../../components/global/Parser"
import Buttons from "../../components/global/buttons"

const TwoColImageText = (props) => {

    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    let order;
    order = (content.imagePosition) === 'left' ? 'lg:order-2' : '' ;

    return (
        <Section settings={settings}>
            <Container>
                <div className={'lg:grid grid-cols-2 gap-16 '}>
                  {/* pt-16 */}
                    <div className={'pb-12 lg:pb-0 ' + order}>
                      {/*  xl:pt-12 */}
                        <h3 className={theme.text.H2}>
                            {content.heading}
                        </h3>
                        <p dangerouslySetInnerHTML={{__html: Parser(content.body)}} className={theme.text.P_STD + ' mt-8'}></p>
                        {content.componentButton && content.componentButton.link &&
                          <div className='text-left my-8'>
                            <Buttons 
                              content={content.componentButton} 
                              sectionBackground={settings.backgroundColor}/>
                          </div>
                        }
                    </div>

                    <div className={"lg:text-left text-center"}>
                        <FlexibleMedia data={content.componentFlexibleMedia} />
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