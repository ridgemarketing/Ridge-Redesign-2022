import React from "react"
import { graphql } from "gatsby"

const VideoPlayer = () => {
    return(
      <h1>Contact 4 square</h1>
    )
}

export default VideoPlayer


export const query = graphql`
  fragment VideoPlayer on WpPage_Flexiblelayouts_Layouts {
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