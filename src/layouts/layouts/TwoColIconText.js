import React from "react"
import { Section, Container } from "../../components/global/Wrappers"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { theme } from "../../static/theme"
import { graphql } from "gatsby"
import Parser from "../../components/global/Parser"

const TwoColIconText = (props) => {
  const content  = props.layoutData.layoutContent;
  const settings = props.layoutData.layoutSettings;

  return (
    <Section settings={settings}>
      <Container container={settings.containerWidth}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
          {content.items &&
            content.items.map((item, index) => (
              <div key={index} className="flex flex-col">
                {/* Image */}
                {item.image?.localFile && (
                    <div className="mb-6 relative w-24 h-auto mx-auto lg:mx-0">
                        <GatsbyImage
                        alt={item.image.altText || ""}
                        image={getImage(item.image.localFile)}
                        className="w-full h-auto object-contain"
                        />
                    </div>
                    )}
      

                {/* Title */}
                {item.title && (
                  <h3 className={theme.text.H2 + " text-center lg:text-left mb-4"}>
                    {item.title} 
                  </h3>
                )}

                {/* Text (textarea) */}
                {item.text && (
                  <p className={theme.text.P_STD + " text-center lg:text-left mb-6"}>
                    <span dangerouslySetInnerHTML={{__html: Parser(item.text)}}></span>
                  </p>
                )}

                {/* List Title (textarea) */}
                {item.listTitle && (
                    <h4 className={theme.text.H4 + " text-center lg:text-left mb-3"}>
                    {item.listTitle}
                    </h4>
                )}

                {/* List */}
                {item.list && item.list.length > 0 && (
                  <div>
                    <ul className="list-disc space-y-3 pt-2">
                      {item.list.map((innerListItem, i) => (
                        <li
                          key={i}
                          className={theme.text.P_STD + "flex items-start gap-3"}
                        >
                          <span className="mr-1">•</span>  
                          <span>{innerListItem.listItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
        </div>
      </Container>
    </Section>
  )
}


export default TwoColIconText




export const query = graphql`
  fragment TwoColIconTextPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_TwoColIconText {
      fieldGroupName
      layoutTwoColIconText {
        layoutContent {
          items {
            image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            title
            text
            listTitle
            list {
              listItem
            }
          }
        }
        layoutSettings {
          padding {
            top
            bottom
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
  fragment TwoColIconTextService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_TwoColIconText {
      fieldGroupName
      layoutTwoColIconText {
        layoutContent {
          items {
            image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            title
            text
            listTitle
            list {
              listItem
            }
          }
        }
        layoutSettings {
          padding {
            top
            bottom
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
  fragment TwoColIconTextProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_TwoColIconText {
      fieldGroupName
      layoutTwoColIconText {
        layoutContent {
          items {
            image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            title
            text
            listTitle
            list {
              listItem
            }
          }
        }
        layoutSettings {
          padding {
            top
            bottom
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