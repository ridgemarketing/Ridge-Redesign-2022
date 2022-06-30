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
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              mobile {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              tablet {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            settings {
              backgroundColor
              backgroundImage {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
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