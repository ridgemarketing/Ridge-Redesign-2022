import React from "react"
import { graphql } from "gatsby"

const MediaBlocks = () => {
    return(
      <h1>Contact 4 square</h1>
    )
}

export default MediaBlocks

export const query = graphql`
  fragment MediaBlocksPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_MediaBlocks {
        fieldGroupName
        layoutMediaBlocks {
          layoutContent {
            blocks {
              heading
              componentFlexibleMedia {
                lottie
                type
                video
                image {
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
            columns
            heading
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
  fragment MediaBlocksService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_MediaBlocks {
        fieldGroupName
        layoutMediaBlocks {
          layoutContent {
            blocks {
              heading
              componentFlexibleMedia {
                lottie
                type
                video
                image {
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
            columns
            heading
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
  fragment MediaBlocksProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_MediaBlocks {
        fieldGroupName
        layoutMediaBlocks {
          layoutContent {
            blocks {
              heading
              componentFlexibleMedia {
                lottie
                type
                video
                image {
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
            columns
            heading
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