import React from "react"
import { graphql } from "gatsby"

const VideoPlayer = () => {
    return(
      <h1>Contact 4 square</h1>
    )
}

export default VideoPlayer


export const pageQuery = graphql`
  fragment VideoPlayerPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_VideoPlayer {
        fieldGroupName
        layoutVideoPlayer {
          layoutContent {
            sideImage {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
              video
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
  fragment VideoPlayerService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_VideoPlayer {
        fieldGroupName
        layoutVideoPlayer {
          layoutContent {
            sideImage {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
              video
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
  fragment VideoPlayerProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_VideoPlayer {
        fieldGroupName
        layoutVideoPlayer {
          layoutContent {
            sideImage {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
              video
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