import React, { useRef, useEffect, useState } from "react"
import { graphql } from "gatsby"
import FlexibleLayouts from "../components/FlexibleLayouts"

const WpPage = ({ data }) =>{
  return (
    <div>
      <h1> {data.wpPage.title} </h1>
      <p> {data.wpPage.content} </p>
      <div>
          <FlexibleLayouts flexibleLayouts={data.wpPage.flexibleLayouts} />
      </div>
    </div>
  )
}
export default WpPage;


export const query = graphql`
  query PageById( $id: String ){
    wpPage(id: {eq: $id}) {
      id
      uri
      title
      content
      flexibleLayouts {
        layouts {
          ... on WpPage_Flexiblelayouts_Layouts_FullWidthTextImage {
            fieldGroupName
            layoutFullWidthTextImage {
              layoutContent {
                body
                componentButtonGroup {
                  componentButton {
                    colors {
                      fieldGroupName
                      hover
                      resting
                    }
                    icon
                    link {
                      target
                      title
                      url
                    }
                    style
                  }
                }
                componentFlexibleMedia {
                  image {
                    gatsbyImage(width: 928, formats: AUTO)
                  }
                }
              }
              layoutSettings {
                anchorId
                backgroundColor
                classes
                id
                padding {
                  bottom
                  top
                }
              }
            }
          }
          ... on WpPage_Flexiblelayouts_Layouts_TwoColList {
            fieldGroupName
            layoutTwoColList {
              fieldGroupName
              layoutContent {
                fieldGroupName
                list {
                  fieldGroupName
                  listItem
                }
              }
            }
          }
        }
      }
    }
  }
` 