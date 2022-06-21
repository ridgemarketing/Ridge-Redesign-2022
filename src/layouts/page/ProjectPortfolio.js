import React from "react"
import { graphql } from "gatsby"

const ProjectPortfolio = () => {
    return(
        <></>
    )
}

export default ProjectPortfolio


export const query = graphql`
  fragment ProjectPortfolio on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_ProjectPortfolio {
        fieldGroupName
        layoutProjectPortfolio {
          layoutContent {
            heading
            images {
              desktop {
                gatsbyImage
              }
              mobile {
                gatsbyImage
              }
              tablet {
                gatsbyImage
              }
            }
            settings {
              backgroundColor
              backgroundImage {
                gatsbyImage
              }
              textAlign
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