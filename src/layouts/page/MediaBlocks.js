import React from "react"
import { graphql } from "gatsby"

const MediaBlocks = () => {
    return(
      <h1>Contact 4 square</h1>
    )
}

export default MediaBlocks

export const query = graphql`
  fragment MediaBlocks on WpPage_Flexiblelayouts_Layouts {
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
                  gatsbyImage
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