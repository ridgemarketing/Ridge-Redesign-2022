import React, { useRef, useEffect, useState } from "react"
import { graphql } from "gatsby"
import FlexibleLayouts from "../layouts/FlexibleLayouts"
import PageHeader from "../layouts/page/PageHeader"
import HomeHero from "../layouts/page/HomeHero"

const WpPage = ({ data }) =>{
  console.log(data.wpPage);
  return (
    <div>
      {/* <h1> {data.wpPage.title} </h1> */}
      {/* <p> {data.wpPage.content} </p> */}
      {data.wpPage.pageHeader &&
        <PageHeader layoutContent={data.wpPage.pageHeader.pageHeader} />
      }
      {data.wpPage.title == 'Home Page' &&
        <HomeHero layoutData={data.wpPage.homeHero.layoutHomeHero}/>
      }
      <div>
          <FlexibleLayouts flexibleLayouts={data.wpPage.flexibleLayouts} />
      </div>
    </div>
  )
}
export default WpPage;


export const query = graphql`
  query PageById($id: String) {
    wpPage(id: {eq: $id}) {
      id
      uri
      title
      content
      ...FlexibleLayoutsPage
      homeHero {
        layoutHomeHero {
          layoutContent {
            heading
            subheading
            componentButton {
              style
              link {
                url
                title
                target
              }
              colors {
                resting
              }
            }
            backgroundImage {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  } 
`