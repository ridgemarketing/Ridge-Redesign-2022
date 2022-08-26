import React from "react"
import { graphql } from "gatsby"
import FlexibleLayouts from "../layouts/FlexibleLayouts"
import Blog from "./blog"
import HomeHero from "../layouts/page/HomeHero"
import PageHeader from "../layouts/page/PageHeader"
import Layout from "../components/global/Layout"
import Menu from "../components/global/FooterMenu"
import { Container } from "../components/global/Wrappers"

const WpPage = ({ data }) =>{

  //const content     = data.wpPage.pageHeader.pageHeader.layoutContent;
  //const settings    = data.wpPage.pageHeader.pageHeader.layoutSettings;

  if(data.wpPage.isPostsPage === true){
    return ( <Blog/> )
  } else {
    return (
      <Layout>
        {data.wpPage.pageHeader && !data.wpPage.isFrontPage && data.wpPage.title != "404" && data.wpPage.title != "Terms and Conditions" &&
          <PageHeader layoutData={data.wpPage.pageHeader.pageHeader} />
        }
        {data.wpPage.isFrontPage &&
          <HomeHero layoutData={data.wpPage.homeHero.layoutHomeHero}/>
        }
        {data.wpPage.title == "404" &&
          <Container>
            <div className={'page404'} dangerouslySetInnerHTML={{__html: data.wpPage.content}}></div>
            <Menu />
          </Container>
        }
        {data.wpPage.title == "Terms and Conditions" &&
        <div className={'terms'} dangerouslySetInnerHTML={{__html: data.wpPage.content}}></div>
        }
        
        {data.wpPage.flexibleLayouts && 
        <FlexibleLayouts flexibleLayouts={data.wpPage.flexibleLayouts} />
        }
      </Layout>
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
    ...PageHeader
    ...FlexibleLayoutsPage
  }
}
`