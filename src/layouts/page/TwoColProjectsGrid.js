import React from "react"
import { graphql } from "gatsby"

const TwoColProjectsGrid = () => {
    return(
      <h1>2 col project grid</h1>
    )
}

export default TwoColProjectsGrid


export const query = graphql`
  fragment TwoColProjectsGrid on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_TwoColProjectsGrid {
        fieldGroupName
        layoutTwoColProjectsGrid {
          layoutContent {
            fieldGroupName
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