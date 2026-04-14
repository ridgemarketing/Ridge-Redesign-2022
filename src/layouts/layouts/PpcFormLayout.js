import React from "react"
import { graphql } from "gatsby"
import PPCForm from "./ppcLander/PpcForm"

const PpcFormLayout = (props) => {
    const content = props.layoutData.layoutContent

    return <PPCForm data={content} />
}

export default PpcFormLayout

export const pageQuery = graphql`
  fragment PpcFormLayoutPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_PpcForm {
      fieldGroupName
      layoutPpcForm {
        layoutContent {
          heading
          body
          image {
            altText
            sourceUrl
            localFile {
              ext
              childImageSharp { gatsbyImageData }
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
  fragment PpcFormLayoutService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_PpcForm {
      fieldGroupName
      layoutPpcForm {
        layoutContent {
          heading
          body
          image {
            altText
            sourceUrl
            localFile {
              ext
              childImageSharp { gatsbyImageData }
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
  fragment PpcFormLayoutProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_PpcForm {
      fieldGroupName
      layoutPpcForm {
        layoutContent {
          heading
          body
          image {
            altText
            sourceUrl
            localFile {
              ext
              childImageSharp { gatsbyImageData }
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
  fragment PpcFormLayoutLander on WpLander_Flexiblelayouts_Layouts {
    ... on WpLander_Flexiblelayouts_Layouts_PpcForm {
      fieldGroupName
      layoutPpcForm {
        layoutContent {
          heading
          body
          image {
            altText
            sourceUrl
            localFile {
              ext
              childImageSharp { gatsbyImageData }
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
