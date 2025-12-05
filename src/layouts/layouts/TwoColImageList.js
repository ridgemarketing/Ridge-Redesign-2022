import React from "react"
import { Section, Container } from "../../components/global/Wrappers"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { theme } from "../../static/theme"
import { graphql } from "gatsby"
import Parser from "../../components/global/Parser"

const TwoColImageList = (props) => {
  const content  = props.layoutData.layoutContent;
  const settings = props.layoutData.layoutSettings;

  return (
    <Section settings={settings}>
      <Container container={settings.containerWidth}>
        <div className="space-y-16">
          {content.items &&
            content.items.map((item, index) => {
              // Default to 'left' if image orientation is not set
              const imageOrientation = item.imageOrientation || 'left';
              const isImageLeft      = imageOrientation === 'left';

              return (
                <div key={index} className="flex flex-col">
                  {/* Title - Full Width */}
                  {item.title && (
                    <h3 className={theme.text.H2 + " text-center lg:text-left mb-4"}>
                      {item.title} 
                    </h3>
                  )}

                  {/* Intro Text - Full Width */}
                  {item.introText && (
                    <p className={theme.text.P_STD + " text-center lg:text-left mb-8"}
                      dangerouslySetInnerHTML={ {__html:  Parser(item.introText)} }>
                    </p>
                  )}

                  {/* Two Column Section */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Image Column - Order changes based on orientation */}
                    {item.image?.localFile && (
                      <div 
                        className={`flex items-start justify-center lg:justify-${isImageLeft ? 'start' : 'end'} ${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}
                      >
                        <GatsbyImage
                          alt={item.image.altText || ""}
                          image={getImage(item.image.localFile)}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    )}

                    {/* Text & List Column */}
                    <div className={`flex flex-col ${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                      {/* Side Text */}
                      {item.sideText && (
                        <p className={theme.text.P_STD + " text-center lg:text-left mb-6"}
                          dangerouslySetInnerHTML={ {__html:  Parser(item.sideText)} }>
                        </p>
                      )}

                      {/* List Title */}
                      {item.listTitle && (
                        <h4 className={theme.text.H4 + " text-center lg:text-left mb-3"}>
                          {item.listTitle}
                        </h4>
                      )}

                      {/* List Items */}
                      {item.list && item.list.length > 0 && (
                        <ul className="space-y-3 pt-2">
                          {item.list.map((innerListItem, i) => (
                            <li
                              key={i}
                              className={theme.text.P_STD + " flex items-start gap-3"}
                            >
                              <svg 
                                className="w-7 h-7 text-rm-green flex-shrink-0 mt-[2px]" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                  strokeWidth={2} 
                                  d="M5 13l4 4L19 7" 
                                />
                              </svg>
                              <span>{innerListItem.listItem}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </Container>
    </Section>
  )
}

export default TwoColImageList

export const query = graphql`
  fragment TwoColImageListPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_TwoColImageList {
      fieldGroupName
      layoutTwoColImageList {
        layoutContent {
          items {
            title
            introText
            sideText
            listTitle
            imageOrientation
            list {
              listItem
            }
            image {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
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
  fragment TwoColImageListService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_TwoColImageList {
      fieldGroupName
      layoutTwoColImageList {
        layoutContent {
          items {
            title
            introText
            sideText
            listTitle
            imageOrientation
            list {
              listItem
            }
            image {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
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
  fragment TwoColImageListProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_TwoColImageList {
      fieldGroupName
      layoutTwoColImageList {
        layoutContent {
          items {
            title
            introText
            sideText
            listTitle
            imageOrientation
            list {
              listItem
            }
            image {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
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