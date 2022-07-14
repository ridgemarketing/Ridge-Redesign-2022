import React from "react"
import { graphql } from "gatsby"

const ProjectPortfolio = () => {
    return(
        <></>
    )
}

export default ProjectPortfolio

export const query = graphql`
  fragment ProjectPortfolioPage on WpPage_Flexiblelayouts_Layouts {
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

export const serviceQuery = graphql`
  fragment ProjectPortfolioService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_ProjectPortfolio {
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

export const projectQuery = graphql`
  fragment ProjectPortfolioProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_ProjectPortfolio {
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