import React from "react"
import { graphql } from "gatsby"

const TwoColProjectsGrid = () => {
    return(
      <h1>2 col project grid</h1>
    )
}

export default TwoColProjectsGrid


export const query = graphql`
  fragment TwoColProjectsGridPage on WpPage_Flexiblelayouts_Layouts {
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
export const serviceQuery = graphql`
  fragment TwoColProjectsGridService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_TwoColProjectsGrid {
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

export const projectQuery = graphql`
  fragment TwoColProjectsGridProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_TwoColProjectsGrid {
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