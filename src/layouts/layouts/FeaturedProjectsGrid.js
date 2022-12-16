import React from "react"
import { Section, Container } from "../../components/global/Wrappers"
import { theme } from "../../static/theme"
import { graphql } from "gatsby"
import ResultCard from '../../components/ResultCard.js'
import Parser from "../../components/global/Parser";
import Buttons from '../../components/global/Buttons'
import LightBox from "../../components/global/Lightbox.js"

const FeaturedProjectsGrid = (props) => {
    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    const images= content.projects;
    console.log(content);
    console.log(settings);

    return(
        <Section settings={settings}>
          <Container container={'default'}>
                  <div className={'md:grid md:grid-cols-2 xl:grid-cols-3 xl:gap-x-4 xl:gap-y-8 py-16'}>
                    {content.projects.map(block => {
                        return (
                            <div className={''}>
                                <LightBox images={block.projectInformation.images.shadowBoxImages} />
                            </div>
                        )
                    })}
                  </div>
          </Container>
        </Section>
    )
}

export default FeaturedProjectsGrid

export const pageQuery = graphql`
  fragment FeaturedProjectsGridPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_FeaturedProjectsGrid {
      fieldGroupName
      layoutFeaturedProjectsGrid {
        layoutContent {
            heading
            projects{
                ...on WpProject {
                    projectInformation {
                      images {
                        shadowBoxImages {
                          shadowBoxText
                          shadowBoxImage {
                            sourceUrl
                            altText
                          }
                        }
                      }
                    }
                }
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
          containerWidth
        }
      }      
    }
  }
`

export const serviceQuery = graphql`
  fragment FeaturedProjectsGridService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_FeaturedProjectsGrid {
        fieldGroupName
        layoutFeaturedProjectsGrid {
            layoutContent {
                heading
                projects{
                    ...on WpProject {
                        projectInformation {
                          images {
                            shadowBoxImages {
                              shadowBoxText
                              shadowBoxImage {
                                sourceUrl
                                altText
                              }
                            }
                          }
                        }
                    }
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
            containerWidth
          }
        }
      }
  }
`

export const projectQuery = graphql`
  fragment FeaturedProjectsGridProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_FeaturedProjectsGrid {
        fieldGroupName
        layoutFeaturedProjectsGrid {
            layoutContent {
                heading
                projects{
                    ...on WpProject {
                        projectInformation {
                          images {
                            shadowBoxImages {
                              shadowBoxText
                              shadowBoxImage {
                                sourceUrl
                                altText
                              }
                            }
                          }
                        }
                    }
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
            containerWidth
          }
        }
      }
  }
`

