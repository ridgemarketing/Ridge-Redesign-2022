import React from "react"
import { graphql } from "gatsby"

const ThreeColIconsText = () => {
    return(
        <></>
    )
}

export default ThreeColIconsText

export const query = graphql`
  fragment ThreeColIconsText on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_ThreeColIconsText {
        fieldGroupName
        layoutThreeColIconsText {
          layoutContent {
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