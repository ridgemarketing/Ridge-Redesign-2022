import React from "react"
import {Section, Container } from "../../components/global/Wrappers"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { theme } from "../../static/theme"
import { graphql } from "gatsby"

const TwoColBreakoutImageText = (props) => {
    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    const image = getImage(content.image.localFile.childImageSharp.gatsbyImageData);
    console.log(content);

    return (
        <Section settings={settings} classes={'2xl:max-w-[1920px] 2xl:mx-auto'}>
            <div className={'xl:absolute xl:left-[-102px] px-6 order-2 mt-16 xl:mt-0 mx-auto xl:mx-0'}>
              <GatsbyImage image={image}/>
            </div>
            <Container>
                <div className={'flex justify-start xl:mt-20 xl:mb-[600px] order-1'}>
                    <div className={`hidden xl:block xl:w-[calc(726px-(50vw-640px))] 2xl:w-[calc(726px-(50vw-640px)+(50vw-960px))] mr-8`}></div>

                    <div className={'flex-1 px-5 xl:pr-10'}>
                        <h4 className={theme.text.H1_STD}>
                          {content.heading}
                        </h4>
                        <p className={theme.text.P_STD + ' my-8 text-rm-grey'}>
                            {content.body}
                        </p>
                        <ul className={'flex flex-wrap justify-between'}>
                            {content.list.map(data => {
                              return (
                                <li className={theme.text.P_STD + `w-[48%] mb-4 text-rm-grey`}>
                                    {data.item}
                                </li>                                       
                              )
                            })}
                        </ul>
                    </div>

                </div>
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