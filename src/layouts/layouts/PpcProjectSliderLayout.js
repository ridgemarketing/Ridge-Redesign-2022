import React from "react"
import { graphql } from "gatsby"
import PPCProjectSlider from "./ppcLander/PpcProjectSlider"

const PpcProjectSliderLayout = (props) => {
    const content = props.layoutData.layoutContent

    return <PPCProjectSlider data={content} cmo={true} />
}

export default PpcProjectSliderLayout

export const pageQuery = graphql`
  fragment PpcProjectSliderLayoutPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_PpcProjectSlider {
      fieldGroupName
      layoutPpcProjectSlider {
        layoutContent {
          heading
          images {
            image {
              altText
              localFile {
                childImageSharp { gatsbyImageData }
              }
            }
          }
          componentButtonGroup {
            componentButton {
              style
              link { target title url }
            }
          }
        }
        layoutSettings {
          padding { bottom top }
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
  fragment PpcProjectSliderLayoutService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_PpcProjectSlider {
      fieldGroupName
      layoutPpcProjectSlider {
        layoutContent {
          heading
          images {
            image {
              altText
              localFile {
                childImageSharp { gatsbyImageData }
              }
            }
          }
          componentButtonGroup {
            componentButton {
              style
              link { target title url }
            }
          }
        }
        layoutSettings {
          padding { bottom top }
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
  fragment PpcProjectSliderLayoutProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_PpcProjectSlider {
      fieldGroupName
      layoutPpcProjectSlider {
        layoutContent {
          heading
          images {
            image {
              altText
              localFile {
                childImageSharp { gatsbyImageData }
              }
            }
          }
          componentButtonGroup {
            componentButton {
              style
              link { target title url }
            }
          }
        }
        layoutSettings {
          padding { bottom top }
          anchorId
          backgroundColor
          classes
          id
        }
      }
    }
  }
`

export const landerQuery = graphql`
  fragment PpcProjectSliderLayoutLander on WpLander_Flexiblelayouts_Layouts {
    ... on WpLander_Flexiblelayouts_Layouts_PpcProjectSlider {
      fieldGroupName
      layoutPpcProjectSlider {
        layoutContent {
          heading
          images {
            image {
              altText
              localFile {
                childImageSharp { gatsbyImageData }
              }
            }
          }
          componentButtonGroup {
            componentButton {
              style
              link { target title url }
            }
          }
        }
        layoutSettings {
          padding { bottom top }
          anchorId
          backgroundColor
          classes
          id
        }
      }
    }
  }
`
