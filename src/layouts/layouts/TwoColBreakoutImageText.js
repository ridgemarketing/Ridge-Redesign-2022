import React from "react"
import {Section, Container } from "../../components/global/Wrappers"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { theme } from "../../static/theme"
import { graphql } from "gatsby"
import Parser from "../../components/global/Parser"

const TwoColBreakoutImageText = (props) => {
    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    const image = getImage(content.image.localFile.childImageSharp.gatsbyImageData);

    let imageWidth      = `xl:w-[calc(40%+2.25rem+(50vw-50%))]`;
    let imageCss        = ``;
    let imageStyle      = {};
    let imgWrapperCss   = `xl:left-[60%]`;
    let FlexWrapperCss  = `xl:flex`;
    let textCss         = `xl:mr-9 xl:mr-14`;

    if (content.imagePosition && content.imagePosition === `left`) {
      imgWrapperCss   = `xl:left-[calc(-40%+2.25rem)]`;
      FlexWrapperCss  = `xl:flex lg:flex-row-reverse`;
      textCss         = `xl:ml-9 xl:ml-14`;
    }

    if (content.imageOverflow && content.imageOverflow === `overflow`) {
      imageWidth      = `xl:w-auto xl:h-full`;
      imageCss        = `object-contain h-full w-auto overflow-visible`;
      imageStyle      = {height: `100%`, width: `auto`, objectFit: `contain`};
    } 

    return (
        <Section settings={settings} classes={`2xl:max-w-[1920px] 2xl:mx-auto overflow-hidden`}>
            <Container classes={`relative`}>
                <div className={`justify-start ${FlexWrapperCss}`}>
                    <div className={`text-center xl:text-left xl:w-3/5 w-full flex-1 ${textCss}`}>
                        {content.eyebrow && 
                          <span className={`block text-50px font-stratos font-normal uppercase`}>{content.eyebrow}</span>
                        }
                        {content.heading &&
                          <h2 className={theme.text.H1_STD}>
                            {content.heading}
                          </h2>
                        }

                        {content.body &&
                          <p dangerouslySetInnerHTML={{__html: Parser(content.body)}} className={`${theme.text.P_STD} mt-8 first-line:my-8 text-rm-grey`}></p>
                        }
                        {content.list && 
                          <ul className={`flex flex-wrap justify-between mt-10`}>
                              {content.list.map(data => {
                                return (
                                  <li className={`${theme.text.P_STD} font-normal w-[48%] mb-4 text-rm-grey text-21px`}>
                                      {data.item}
                                  </li>                                       
                                )
                              })}
                          </ul>
                        }
                    </div>
                    <div className={`max-w-[40%] w-full flex-1`}></div>

                </div>
                {image && 
                <div className={`mt-10 xl:mt-0 mx-auto xl:absolute xl:top-0 ${imageWidth} ${imgWrapperCss}`}>
                  <GatsbyImage image={image} className={imageCss} imgClassName={imageCss} imgStyle={imageStyle} />
                </div>
                }
            </Container>
        </Section>
    )
}

export default TwoColBreakoutImageText


export const query = graphql`
  fragment TwoColBreakoutImageTextPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_TwoColBreakoutImageText {
        fieldGroupName
        layoutTwoColBreakoutImageText {
          layoutContent {
            body
            eyebrow
            heading
            imagePosition
            imageOverflow
            image {
              localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
            }
            list {
                item
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
  fragment TwoColBreakoutImageTextService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_TwoColBreakoutImageText {
        fieldGroupName
        layoutTwoColBreakoutImageText {
          layoutContent {
            body
            eyebrow
            heading
            imagePosition
            imageOverflow
            image {
                                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
            }
            list {
                item
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
  fragment TwoColBreakoutImageTextProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_TwoColBreakoutImageText {
        fieldGroupName
        layoutTwoColBreakoutImageText {
          layoutContent {
            body
            eyebrow
            heading
            imagePosition
            imageOverflow
            image {
              localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
            }
            list {
                item
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