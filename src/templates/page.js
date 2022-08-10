import React, { useRef, useEffect, useState } from "react"
import { graphql } from "gatsby"
import { Section, Container } from "../components/global/Wrappers"
import { theme } from '../static/theme.js'
import FlexibleLayouts from "../layouts/FlexibleLayouts"
import Parser from "../components/global/Parser"
import Blog from "./blog"
import HomeHero from "../layouts/page/HomeHero"
import PageHeader from "../layouts/page/PageHeader"

const WpPage = ({ data }) => {

  if(data.wpPage.isPostsPage === true){
    return( <Blog/> )
  }else{
    return (
      <>
        {data.wpPage.pageHeader && !data.wpPage.isFrontPage && data.wpPage.title != "404" && data.wpPage.title != "Terms and Conditions" &&
          <PageHeader layoutData={data.wpPage.pageHeader.pageHeader}/>
        }
        {data.wpPage.title == "404" &&
        <div className={'page404'} dangerouslySetInnerHTML={{__html: data.wpPage.content}}></div>
        }
        {data.wpPage.title == "Terms and Conditions" &&
        <div className={'terms'} dangerouslySetInnerHTML={{__html: data.wpPage.content}}></div>
        }
        {data.wpPage.isFrontPage &&
          <HomeHero layoutData={data.wpPage.homeHero.layoutHomeHero}/>
        }
        
        <FlexibleLayouts flexibleLayouts={data.wpPage.flexibleLayouts} />

      </>
    )
  }
}
export default WpPage;


export const query = graphql`
  query PageById($id: String) {
    wpPage(id: {eq: $id}) {
      id
      uri
      title
      content
      isPostsPage
      isFrontPage

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
              sourceUrl
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            mobileImage {
              localFile {
                childImageSharp {
                  gatsbyImageData(height: 686)
                }
              }
            }
            tabletImage {
              localFile {
                childImageSharp {
                  gatsbyImageData(height: 686)
                }
              }
            }
          }
        }
      }
    pageHeader {
      pageHeader {
        layoutContent {
          eyebrow
          heading
          subheading
        }
        layoutSettings {
          classes
          id
          backgroundColor
          anchorId
          padding {
            bottom
            fieldGroupName
            top
          }
        }
      }
    }

    ...FlexibleLayoutsPage
  }
}
`